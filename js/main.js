document.addEventListener("DOMContentLoaded", logo);
document.addEventListener("load", logo);
var spinner = document.getElementById("spinner");

function logo() {
  spinner.classList.add("active");
  spinner.style.cursor = "wait";
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
    val = window.scrollY;
    if (val > 0) {
      window.scrollTo(0, 0);
      document.getElementById("spinner").scrollTo(0, 0);
    }
  }, 500);
  setTimeout(() => {
    document.body.style.overflowY = "hidden";
  }, 1000);
  setTimeout(() => {
    spinner.style.cursor = "default";
    document.body.style.overflowY = "scroll";
    spinner.classList.remove("active");
  }, 3500);
}
// scroll up
document.getElementById("scroll").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//button top
window.addEventListener("scroll", () => {
  sc.classList.toggle("act", window.scrollY > 500);
});
var sc = document.querySelector(".scroll-up");

///nav
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 24);
  icon.classList.toggle("sticky", window.scrollY > 24);
});

//title
// let docTitle = document.title;
// window.addEventListener("blur", () => {
//   document.title = "come back  ;(";
// })
// window.addEventListener("focus", () => {
//   document.title = docTitle;
// })


var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.1 &&
      scrollPosition <=
      section.offsetTop + section.offsetHeight - section.offsetHeight * 0.1
    ) {
      var currentId = section.dataset.page;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var addActiveClass = function (id) {
  var selector = `ul li a[id="${id}"]`;
  document.querySelector(selector).classList.add("activ");
  if (id === "Home") {
    indicator.style.setProperty("--position", 0);
  } else if (id === "skills") {
    indicator.style.setProperty("--position", 1);
  } else if (id === "project") {
    indicator.style.setProperty("--position", 2);
  } else if (id === "contact") {
    indicator.style.setProperty("--position", 3);
  } else {
    indicator.style.setProperty("--position", 0);
  }
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("[nav-a]").forEach((el) => {
    el.classList.remove("activ");
    indicator.style.setProperty("--position", null);
  });
};

// var currentId = section.attributes.id.value;
var navLinks = document.querySelectorAll("[nav-a]");
const indicator = document.querySelector("[data-indicator]");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
      if (link.attributes.id.value === sections[i].dataset.page) {
        indicator.style.setProperty("--position", i);
        var sectionPos = sections[i].offsetTop;
        window.scroll({
          top: sectionPos,
        });
        onscroll();
      }
    }
  });
});

//web

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".projects .countainer .card");

  cards.forEach((card) => {
    const loadingOverlay = card.querySelector(".loading-overlay");
    const image = card.querySelector("img");

    loadingOverlay.style.display = "flex";

    image.src = addRandomQueryParam(image.src);

    image.onload = function () {
      loadingOverlay.style.display = "none";
    };

    image.onerror = function () {
      loadingOverlay.style.display = "flex";
    };
  });

  function addRandomQueryParam(url) {
    const randomParam = "cache=" + Math.random().toString(36).substring(7);
    if (url.includes("?")) {
      return url + "&" + randomParam;
    } else {
      return url + "?" + randomParam;
    }
  }
});

document.getElementById("card6").addEventListener("click", () => {
  if (window.innerWidth >= 1300) {
    openLink("http://omarsefo.github.io/be-real/");
  } else {
    displayModal(
      "Sorry, this page is not supported in mobile and small screens.",
      "alert-circle-outline"
    );
  }
});
document.getElementById("card7").addEventListener("click", () => {
  if (window.innerWidth >= 1300) {
    openLink("http://omarsefo.github.io/icecream/");
  } else {
    displayModal(
      "Sorry, this page is not supported in mobile and small screens.",
      "alert-circle-outline"
    );
  }
});
document.getElementById("card8").addEventListener("click", () => {
  if (window.innerWidth >= 1300) {
    openLink("http://omarsefo.github.io/starbacks/");
  } else {
    displayModal(
      "Sorry, this page is not supported in mobile and small screens.",
      "alert-circle-outline"
    );
  }
});


function openLink(link) {
  window.open(link);
}

const modal = document.getElementById("myModal");
const Alart = document.getElementById("alart");
function displayModal(message, icon) {
  modal.style.display = "block";
  updateModalMessage(message);
  Alart.setAttribute("name", icon);
}

// modal message
const modalMessage = document.getElementById("modalMessage");
function updateModalMessage(message) {
  modalMessage.textContent = message;
}

const closeBtn = document.querySelector(".closea");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Right Click disable
https: document.addEventListener("contextmenu", (event) =>
  event.preventDefault()
);

// copy
var nu = document.getElementById("ef");
var small = document.querySelector("small");
nu.addEventListener("click", () => {
  document.execCommand("copy");
  small.innerHTML = "(The Number was Copied)";
  setTimeout(() => {
    small.innerHTML = "(Click To Copy & Call)";
  }, 3000);
});

// type
var typed = new Typed(".typee", {
  strings: ["software", "Engineer", "Front end", "Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".type2", {
  strings: ["Omar Sefo", "Front end", "Developer", "software", "Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// projectslide
$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let dar = localStorage.getItem("darkm");
var icon = document.getElementById("icondark");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

const enable = () => {
  document.body.classList.add("darkt");
  localStorage.setItem("darkm", "enabled");
  sun.style.transform = "rotate(100deg) scale(0)";
  moon.style.transform = " rotate(0deg) scale(1)";
};
const disenable = () => {
  document.body.classList.remove("darkt");
  localStorage.setItem("darkm", null);
  sun.style.transform = "rotate(0deg) scale(1)";
  moon.style.transform = "rotate(150deg) scale(0)";
};
if (dar === "enabled") {
  enable();
}
if (dar !== "enabled") {
  disenable();
}
icon.addEventListener("click", () => {
  dar = localStorage.getItem("darkm");
  if (dar !== "enabled") {
    enable();
  } else {
    disenable();
  }
});

// Image
VanillaTilt.init(document.getElementById("img1"), {
  max: 10,
  speed: 100,
});

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
var vname = document.getElementById("name");
var email = document.getElementById("email");
var messag = document.getElementById("message");

formBtn.addEventListener("click", sendMail);

let overlayform = document.querySelector(".overlay-form");

function sendMail() {
  var tempParms = {
    from_name: document.getElementById("email").value,
    ename: document.getElementById("name").value,
    to_name: "omarsefo7@gmail.com",
    message: document.getElementById("message").value,
  };
  document.body.style.cursor = "wait";
  overlayform.classList.add("active");
  emailjs
    .send("service_atlkrd5", "template_43vqktk", tempParms)
    .then(function (res) {
      console.log("success", res.status);
      displayModal(
        "thanks for sending a message, We will reply to you as soon as possible",
        "checkmark-circle-outline"
      );
      setTimeout(() => {
        email.value = "";
        vname.value = "";
        messag.value = "";
        setTimeout(() => {
          document.body.style.cursor = "default";
          overlayform.classList.remove("active");
        }, 2000);
      }, 7000);
    })
    .catch(function (error) {
      console.error("error", error);
      displayModal(
        "Sorry, there's a problem try again later, we will fix it.",
        "alert-circle-outline"
      );
      setTimeout(() => {
        email.value = "";
        vname.value = "";
        messag.value = "";
        setTimeout(() => {
          document.body.style.cursor = "default";
          overlayform.classList.remove("active");
        }, 1000);
      }, 4000);
    });
}
// dynamic date
const currentYear = new Date().getFullYear();
const copyrightYearElement = document.getElementById("copyright-year");
if (copyrightYearElement) {
  copyrightYearElement.textContent = currentYear;
}
