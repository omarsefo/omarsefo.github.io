document.addEventListener("DOMContentLoaded", logo);
document.addEventListener('load', logo);
var spinner = document.getElementById("spinner");

function logo() {
    // window.location.href('https://omarsefo.github.io');
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
    }, 1500);
    spinner.classList.add("active");
    spinner.style.cursor = "wait";
    setTimeout(() => {
        spinner.style.cursor = "default";
        document.body.style.overflowY = "scroll";
        spinner.classList.remove("active");
    }, 5000)
}
//scroll up
document.getElementById("scroll").addEventListener("click", () => { window.scrollTo(0, 0) });

///nav
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 24);
});

//button top
window.addEventListener("scroll", () => {
    sc.classList.toggle("act", window.scrollY > 500);
});
var sc = document.querySelector('.scroll-up');


const men = document.querySelector('.menu').querySelectorAll('a');
const section = document.querySelectorAll('section');

men.forEach(element => {
    element.addEventListener("click", activenav)
});

function activenav() {
    let len = section.length;
    while (--len && window.scrollY + 90 < section[len].offsetTop) { }
    men.forEach(itx => itx.classList.remove("activ"));
    men[len].classList.add("activ");
}
window.addEventListener("scroll", activenav)

//web
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var card10 = document.getElementById("card10");


// card1.addEventListener('click', () => {
//     window.open('https://omarsefo.github.io/bird/')
// });
card1.addEventListener('mouseover', () => {
    card1.style.cursor = "not-allowed";
});
card2.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/foot-cup/')
});
card3.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/Globe_Agency/')
});
card4.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/sign-in-up/')
});
card5.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/ballspinner/')
});
card6.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/starbacks/')
});
card7.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/moon/moon.html')
});
card8.addEventListener('click', () => {
    window.open('http://omarsefo.github.io/be-real/')
});
card9.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/norway/')
});
card10.addEventListener('click', () => {
    window.open('http://omarsefo.github.io/icecream/')
});

// Right Click disable
document.addEventListener('contextmenu', event => event.preventDefault());


// copy 
var nu = document.getElementById("ef");
var small = document.querySelector('small');
nu.addEventListener('click', () => {
    document.execCommand("copy");
    small.innerHTML = "(The Number is Copyed)";
    setTimeout(() => {
        small.innerHTML = "(Click To Copy & Call)";
    }, 3000)
});


// type 
var typed = new Typed(".typee", {
    strings: ["Front end", "Developer", "Flutter", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".type2", {
    strings: ["Omar", "Sefo", "Front end", "Flutter", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// projectslide
$(document).ready(function () {
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


let dar = localStorage.getItem('darkm')
var icon = document.getElementById("ico");

const enable = () => {
    document.body.classList.add("darkt");
    localStorage.setItem("darkm", "enabled");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}
const disenable = () => {
    document.body.classList.remove("darkt");
    localStorage.setItem("darkm", null);
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
}
if (dar === "enabled") {
    enable();
}
icon.addEventListener('click', () => {
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
    speed: 100
});

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // check form validation
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
    }
    emailjs.send('service_enze2af', 'template_43vqktk', tempParms)
        .then(function (res) {
            console.log("success", res.status);
            document.body.style.cursor = "wait";
            overlayform.classList.add("active");
            setTimeout(() => {
                email.value = '';
                vname.value = '';
                messag.value = '';
                setTimeout(() => {
                    document.body.style.cursor = "default";
                    overlayform.classList.remove("active");
                }, 2000);
            }, 7000);
        })
    // overlayform.classList.add("active");
    // ok.innerHTML = "sending2...";
    // document.body.style.cursor = "wait";
    // setTimeout(() => {
    //     email.value = '';
    //     vname.value = '';
    //     messag.value = '';
    //     messag.style.border = "2px solid var(--orange)";
    //     ok.innerHTML = "Sorry Your Message is not Sent.";
    //     document.body.style.cursor = "default";
    //     setTimeout(() => {
    //         overlayform.classList.remove("active");
    //     }, 3000)
    // }, 3000);
}


class ArrowPointer {
    constructor() {
        this.root = document.body
        this.cursor = document.querySelector(".curzr")

        this.position = {
            distanceX: 0,
            distanceY: 0,
            distance: 0,
            pointerX: 0,
            pointerY: 0,
        },
            this.previousPointerX = 0
        this.previousPointerY = 0
        this.angle = 0
        this.previousAngle = 0
        this.angleDisplace = 0
        this.degrees = 57.296
        this.cursorSize = 20

        this.cursorStyle = {
            boxSizing: 'border-box',
            position: 'fixed',
            top: '0px',
            left: `${-this.cursorSize / 2}px`,
            zIndex: '2147483647',
            width: `${this.cursorSize}px`,
            height: `${this.cursorSize}px`,
            transition: '250ms, transform 100ms',
            userSelect: 'none',
            pointerEvents: 'none'
        }

        this.init(this.cursor, this.cursorStyle)
    }

    init(el, style) {
        Object.assign(el.style, style)
        this.cursor.removeAttribute("hidden")

    }

    move(event) {
        this.previousPointerX = this.position.pointerX
        this.previousPointerY = this.position.pointerY
        this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x
        this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y
        this.position.distanceX = this.previousPointerX - this.position.pointerX
        this.position.distanceY = this.previousPointerY - this.position.pointerY
        this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2)

        this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`

        if (this.distance > 1) {
            this.rotate(this.position)
        } else {
            this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`
        }
    }

    rotate(position) {
        let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees
        let modAngle
        const style = this.cursor.style
        this.previousAngle = this.angle

        if (position.distanceX <= 0 && position.distanceY >= 0) {
            this.angle = 90 - unsortedAngle + 0
        } else if (position.distanceX < 0 && position.distanceY < 0) {
            this.angle = unsortedAngle + 90
        } else if (position.distanceX >= 0 && position.distanceY <= 0) {
            this.angle = 90 - unsortedAngle + 180
        } else if (position.distanceX > 0 && position.distanceY > 0) {
            this.angle = unsortedAngle + 270
        }

        if (isNaN(this.angle)) {
            this.angle = this.previousAngle
        } else {
            if (this.angle - this.previousAngle <= -270) {
                this.angleDisplace += 360 + this.angle - this.previousAngle
            } else if (this.angle - this.previousAngle >= 270) {
                this.angleDisplace += this.angle - this.previousAngle - 360
            } else {
                this.angleDisplace += this.angle - this.previousAngle
            }
        }
        style.transform += ` rotate(${this.angleDisplace}deg)`

        setTimeout(() => {
            modAngle = this.angleDisplace >= 0 ? this.angleDisplace % 360 : 360 + this.angleDisplace % 360
            if (modAngle >= 45 && modAngle < 135) {
                style.left = `${-this.cursorSize}px`
                style.top = `${-this.cursorSize / 2}px`
            } else if (modAngle >= 135 && modAngle < 225) {
                style.left = `${-this.cursorSize / 2}px`
                style.top = `${-this.cursorSize}px`
            } else if (modAngle >= 225 && modAngle < 315) {
                style.left = '0px'
                style.top = `${-this.cursorSize / 2}px`
            } else {
                style.left = `${-this.cursorSize / 2}px`
                style.top = '0px'
            }
        }, 0)
    }

    remove() {
        this.cursor.remove()
    }
}

(() => {
    const cursor = new ArrowPointer()
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.onmousemove = function (event) {
            cursor.move(event)
        }
    } else {
        cursor.remove()
    }
})()
