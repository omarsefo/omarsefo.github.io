var VanillaTilt = (function () {
  "use strict";
  class VanillaTilt {
    constructor(element, settings = {}) {
      if (!(element instanceof Node)) throw "Invalid Node";
      this.element = element;
      this.settings = this.extendSettings(settings);
      this.reverse = this.settings.reverse ? -1 : 1;
      this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
      this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
      this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
      this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
      this.elementListener = this.getElementListener();
      this.updateBind = this.update.bind(this);
      this.resetBind = this.reset.bind(this);
      if (this.glare) this.prepareGlare();
      if (this.fullPageListening) this.updateClientSize();
      this.addEventListeners();
      this.updateInitialPosition();
    }

    static isSettingTrue(s) { return s === "" || s === true || s === 1; }
    getElementListener() {
      if (this.fullPageListening) return document;
      if (typeof this.settings["mouse-event-element"] === "string") {
        return document.querySelector(this.settings["mouse-event-element"]) || this.element;
      }
      return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element;
    }
    addEventListeners() {
      this.elementListener.addEventListener("mouseenter", this.onMouseEnter.bind(this));
      this.elementListener.addEventListener("mousemove", this.onMouseMove.bind(this));
      this.elementListener.addEventListener("mouseleave", this.onMouseLeave.bind(this));
      if (this.glare || this.fullPageListening) window.addEventListener("resize", this.onWindowResize.bind(this));
      if (this.gyroscope) window.addEventListener("deviceorientation", this.onDeviceOrientation.bind(this));
    }
    removeEventListeners() {
      this.elementListener.removeEventListener("mouseenter", this.onMouseEnter);
      this.elementListener.removeEventListener("mousemove", this.onMouseMove);
      this.elementListener.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.gyroscope) window.removeEventListener("deviceorientation", this.onDeviceOrientation);
      if (this.glare || this.fullPageListening) window.removeEventListener("resize", this.onWindowResize);
    }
    destroy() {
      clearTimeout(this.transitionTimeout);
      if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
      this.reset();
      this.removeEventListeners();
      this.element.vanillaTilt = null;
      delete this.element.vanillaTilt;
      this.element = null;
    }
    onMouseEnter() {
      this.updateElementPosition();
      this.element.style.willChange = "transform";
      this.setTransition();
    }
    onMouseMove(event) {
      if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
      this.event = event;
      this.updateCall = requestAnimationFrame(this.updateBind);
    }
    onMouseLeave() {
      this.setTransition();
      if (this.settings.reset) requestAnimationFrame(this.resetBind);
    }
    reset() {
      this.event = { clientX: this.left + this.width / 2, clientY: this.top + this.height / 2 };
      if (this.element) {
        this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        this.resetGlare();
      }
    }
    resetGlare() {
      if (this.glare) {
        this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
        this.glareElement.style.opacity = "0";
      }
    }
    updateElementPosition() {
      let rect = this.element.getBoundingClientRect();
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.left = rect.left;
      this.top = rect.top;
    }
    getValues() {
      let x = this.fullPageListening ? this.event.clientX / this.clientWidth : (this.event.clientX - this.left) / this.width;
      let y = this.fullPageListening ? this.event.clientY / this.clientHeight : (this.event.clientY - this.top) / this.height;
      x = Math.min(Math.max(x, 0), 1);
      y = Math.min(Math.max(y, 0), 1);
      return {
        tiltX: (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2),
        tiltY: (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2),
        percentageX: x * 100,
        percentageY: y * 100,
        angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
      };
    }
    update() {
      let v = this.getValues();
      this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === "x" ? 0 : v.tiltY}deg) rotateY(${this.settings.axis === "y" ? 0 : v.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`;
      if (this.glare) {
        this.glareElement.style.transform = `rotate(${v.angle}deg) translate(-50%, -50%)`;
        this.glareElement.style.opacity = `${(v.percentageY * this.settings["max-glare"]) / 100}`;
      }
      this.element.dispatchEvent(new CustomEvent("tiltChange", { detail: v }));
      this.updateCall = null;
    }
    extendSettings(settings) {
      let defaultSettings = {
        reverse: false, max: 15, startX: 0, startY: 0, perspective: 1000, easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1, speed: 300, transition: true, axis: null, glare: false, "max-glare": 1,
        "glare-prerender": false, "full-page-listening": false, "mouse-event-element": null,
        reset: true, gyroscope: true, gyroscopeMinAngleX: -45, gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45, gyroscopeMaxAngleY: 45, gyroscopeSamples: 10
      };
      let newSettings = {};
      for (let prop in defaultSettings) {
        if (prop in settings) newSettings[prop] = settings[prop];
        else if (this.element.hasAttribute("data-tilt-" + prop)) {
          let attr = this.element.getAttribute("data-tilt-" + prop);
          newSettings[prop] = isNaN(attr) ? attr : parseFloat(attr);
        } else newSettings[prop] = defaultSettings[prop];
      }
      return newSettings;
    }
    prepareGlare() {
      if (!this.glarePrerender) {
        const jsTiltGlare = document.createElement("div");
        jsTiltGlare.classList.add("js-tilt-glare");
        const jsTiltGlareInner = document.createElement("div");
        jsTiltGlareInner.classList.add("js-tilt-glare-inner");
        jsTiltGlare.appendChild(jsTiltGlareInner);
        this.element.appendChild(jsTiltGlare);
      }
      this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
      this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
      if (!this.glarePrerender) {
        Object.assign(this.glareElementWrapper.style, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", "pointer-events": "none" });
        Object.assign(this.glareElement.style, { position: "absolute", top: "50%", left: "50%", "pointer-events": "none", "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", width: `${this.element.offsetWidth * 2}px`, height: `${this.element.offsetWidth * 2}px`, transform: "rotate(180deg) translate(-50%, -50%)", "transform-origin": "0% 0%", opacity: "0" });
      }
    }
    updateGlareSize() {
      if (this.glare) Object.assign(this.glareElement.style, { width: `${this.element.offsetWidth * 2}px`, height: `${this.element.offsetWidth * 2}px` });
    }
    updateClientSize() {
      this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    onWindowResize() { this.updateGlareSize(); this.updateClientSize(); }
    setTransition() {
      clearTimeout(this.transitionTimeout);
      this.element.style.transition = `${this.settings.speed}ms ${this.settings.easing}`;
      if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;
      this.transitionTimeout = setTimeout(() => {
        this.element.style.transition = "";
        if (this.glare) this.glareElement.style.transition = "";
      }, this.settings.speed);
    }
    static init(elements, settings) {
      if (elements instanceof Node) elements = [elements];
      if (elements instanceof NodeList) elements = [].slice.call(elements);
      if (!(elements instanceof Array)) return;
      elements.forEach((el) => {
        if (!("vanillaTilt" in el)) el.vanillaTilt = new VanillaTilt(el, settings);
      });
    }
  }
  if (typeof document !== "undefined") {
    window.VanillaTilt = VanillaTilt;
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }
  return VanillaTilt;
})();
