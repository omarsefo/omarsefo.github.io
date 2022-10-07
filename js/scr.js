document.addEventListener("DOMContentLoaded", imgb);
document.addEventListener("DOMContentLoaded", logo);
document.addEventListener('load', logo);
var spinner = document.getElementById("spinner");

function logo() {
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
    }, 6000)
}


function imgb() {
    setTimeout(() => {
        document.getElementById("img").style.display = "flex";
    }, 10000);
    setTimeout(() => {
        document.getElementById("img2").style.display = "flex";
    }, 15000);
}

///nav
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 24);
    // document.body.style.scrollBehavior="smooth";
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


card1.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/bird/')
});
card2.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/starbacks/')
});
card3.addEventListener('click', () => {
    window.open('http://omarsefo.github.io/be-real/')
});
card4.addEventListener('click', () => {
    window.open('http://omarsefo.github.io/icecream/')
});
card5.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/ballspinner/')
});
card6.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/norway/')
});
card7.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/moon/moon.html')
});
card8.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/cream/')
});
card9.addEventListener('click', () => {
    window.open('http://omarsefo.github.io/shefra/')
});
card10.addEventListener('click', () => {
    window.open('https://omarsefo.github.io/code/')
});




// copy 
var nu = document.getElementById("ef");
var small = document.querySelector('small');
nu.addEventListener('click', () => {
    document.execCommand("copy");
    small.innerHTML = "(The Number is Copyed)";
    setTimeout(() => {
        small.innerHTML = "(Click To Copy)";
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

var button = document.getElementById('button');
var email = document.getElementById('email');
var vname = document.getElementById('name');
var messag = document.getElementById('message');

button.addEventListener("click", onmail);

function onmail() {
    var Vemail = email.value.trim();
    var Vname = vname.value.trim();
    var Vmessage = messag.value.trim();
    if (Vmessage === '') {
        messag.style.border = "2px solid red";
    } else {
        messag.style.border = "2px solid green";
    }
    if (Vmessage !== '' && Vname !== '' && Vemail !== '' && Vemail.includes("@gmail.com")) {
        sendMail();
    }
}
var ok = document.getElementById("ok");
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
            overlayform.classList.add("active");
            ok.innerHTML = "Your Message will sent soon.";
            document.body.style.cursor = "wait";
            setTimeout(() => {
                email.value = '';
                vname.value = '';
                messag.value = '';
                messag.style.border = "2px solid var(--orange)";
                setTimeout(() => {
                    ok.innerHTML = "Your Message is Sent.";
                    document.body.style.cursor = "default";
                }, 3000);
            }, 7000);
            overlayform.classList.remove("active");
        })
    overlayform.classList.add("active");
    ok.innerHTML = "Your Message will sent soon.";
    document.body.style.cursor = "wait";
    setTimeout(() => {
        email.value = '';
        vname.value = '';
        messag.value = '';
        messag.style.border = "2px solid var(--orange)";
        ok.innerHTML = "Sorry Your Message is not Sent.";
        document.body.style.cursor = "default";
        setTimeout(() => {
            overlayform.classList.remove("active");
        }, 3000)
    }, 3000);
}