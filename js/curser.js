class ArrowPointer {
  constructor() {
    this.root = document.body;
    this.cursor = document.querySelector(".curzr");
    this.position = { distanceX: 0, distanceY: 0, pointerX: 0, pointerY: 0 };
    this.previousPointerX = this.previousPointerY = this.angle = this.previousAngle = this.angleDisplace = 0;
    this.degrees = 57.296;
    this.cursorSize = 20;

    this.cursorStyle = {
      position: "fixed", top: "0px", left: `${-this.cursorSize / 2}px`,
      zIndex: "2147483647", width: `${this.cursorSize}px`, height: `${this.cursorSize}px`,
      transition: "250ms, transform 100ms", userSelect: "none", pointerEvents: "none"
    };
    this.init(this.cursor, this.cursorStyle);
  }

  init(el, style) {
    Object.assign(el.style, style);
    el.removeAttribute("hidden");
  }

  move(event) {
    const { x, y } = this.root.getBoundingClientRect();
    this.previousPointerX = this.position.pointerX;
    this.previousPointerY = this.position.pointerY;
    this.position.pointerX = event.pageX + x;
    this.position.pointerY = event.pageY + y;
    this.position.distanceX = this.previousPointerX - this.position.pointerX;
    this.position.distanceY = this.previousPointerY - this.position.pointerY;

    this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`;
    Math.hypot(this.position.distanceX, this.position.distanceY) > 1
      ? this.rotate(this.position)
      : (this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`);
  }

  rotate(pos) {
    const { degrees } = this;
    const { distanceX, distanceY } = pos;
    let angle = Math.atan(Math.abs(distanceY) / Math.abs(distanceX)) * degrees;

    this.previousAngle = this.angle;
    this.angle = distanceX <= 0 && distanceY >= 0 ? 90 - angle
      : distanceX < 0 && distanceY < 0 ? angle + 90
      : distanceX >= 0 && distanceY <= 0 ? 90 - angle + 180
      : angle + 270;

    if (isNaN(this.angle)) this.angle = this.previousAngle;
    else {
      const diff = this.angle - this.previousAngle;
      this.angleDisplace += diff <= -270 ? 360 + diff : diff >= 270 ? diff - 360 : diff;
    }

    this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`;
    setTimeout(() => {
      const modAngle = (this.angleDisplace % 360 + 360) % 360;
      const style = this.cursor.style;
      if (modAngle >= 45 && modAngle < 135) Object.assign(style, { left: `${-this.cursorSize}px`, top: `${-this.cursorSize / 2}px` });
      else if (modAngle >= 135 && modAngle < 225) Object.assign(style, { left: `${-this.cursorSize / 2}px`, top: `${-this.cursorSize}px` });
      else if (modAngle >= 225 && modAngle < 315) Object.assign(style, { left: "0px", top: `${-this.cursorSize / 2}px` });
      else Object.assign(style, { left: `${-this.cursorSize / 2}px`, top: "0px" });
    }, 0);
  }

  remove() { this.cursor.remove(); }
}

(() => {
  const cursor = new ArrowPointer();
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? cursor.remove()
    : (document.onmousemove = (e) => cursor.move(e));
})();
