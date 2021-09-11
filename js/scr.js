document.addEventListener("DOMContentLoaded", logo);
document.addEventListener("DOMContentLoaded", imgb);
document.addEventListener('load', logo);

function logo(){
    document.getElementById("spinner").style.animation='logo 0.5s 6s forwards ease-in-out';
    document.body.style.overflowY="hidden";
    document.getElementById("spinner").style.cursor="wait";
    setTimeout(()=>{
        document.getElementById("spinner").style.display='none';
        document.body.style.overflowY="scroll";
        val = window.scrollY;
        if (val > 0) {
         window.scrollTo(0,0);
         document.getElementById("spinner").scrollTo(0,0);
        }
    },7000);
}
function imgb() {
    setTimeout( ()=>{
        document.getElementById("img").style.display="flex";
    },14000);
    setTimeout( ()=>{
        document.getElementById("img2").style.display="flex";
    },19000);
}


///nav
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
nav.classList.toggle("sticky", window.scrollY > 24);
document.body.style.scrollBehavior="smooth";
});

//button top
window.addEventListener("scroll",()=>{
 sc.classList.toggle("act", window.scrollY > 500);
});
var sc =document.querySelector('.scroll-up');


//menu
const menup = document.getElementById('menu');
const closep = document.querySelector('.close-menu');
const openp = document.querySelector('.menu-btn');
var as1 =document.getElementsByTagName('a')[2];
var as2 =document.getElementsByTagName('a')[3];
var as3 =document.getElementsByTagName('a')[4];
var as4 =document.getElementsByTagName('a')[5];

document.addEventListener('loadeddata',close);
document.addEventListener("DOMContentLoaded",close);
menup.addEventListener('load',close);
window.addEventListener('load',close);
sc.addEventListener('click',close);
openp.addEventListener('click',show);
closep.addEventListener('click',close);
    as1.addEventListener('click',close);
    as2.addEventListener('click',close);
    as3.addEventListener('click',close);
    as4.addEventListener('click',close);

function show() {
    menup.style.display ='inline-block';
    menup.style.left ='0px';
}
function close() {
    menup.style.left ='-200%';
}

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
var card9 = document.getElementById("card10");


card1.addEventListener('click',()=>{
    window.open('http://omarsefo.github.io/icecream/')
});
card2.addEventListener('click',()=>{
    window.open('http://omarsefo.github.io/be-real/')
});
card3.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/bird/')
});
card4.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/cream/')
});
card5.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/ballspinner/')
});
card6.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/norway/')
});
card7.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/moon/moon.html')
});
card8.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/music/')
});
card9.addEventListener('click',()=>{
    window.open('http://omarsefo.epizy.com/shefra/')
});
card10.addEventListener('click',()=>{
    window.open('http://omarsefo.epizy.com/coder/')
});




// copy 
var nu = document.getElementById("ef");
var small =document.querySelector('small');
nu.addEventListener('click', ()=>{
    document.execCommand("copy");
    small.innerHTML="(The Number is Copyed)";
    setTimeout(()=>{
    small.innerHTML="(Click To Copy)";
    },3000)
});


// type 
var typed=new Typed(".typee", {
    strings: ["Front end", "Developer", "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed=new Typed(".type2", {
    strings: ["Omar", "Sefo", "Front end", "Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

// projectslide
$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }
    });
});


let dar =localStorage.getItem('darkm')
var icon =document.getElementById("ico");

const enable =()=>{
    document.body.classList.add("darkt");
    localStorage.setItem("darkm", "enabled");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}
const disenable =()=>{
    document.body.classList.remove("darkt");
    localStorage.setItem("darkm", null);
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
}
if (dar === "enabled") {
    enable();
}
icon.addEventListener('click',()=>{
    dar = localStorage.getItem("darkm");
    if (dar !== "enabled") {
        enable();
    }else{
        disenable();
    }
});

// var btn = document.querySelector('.button');
// btn.addEventListener('click',()=>{
// //    alert("sorry this side is not work now it will work soon");
//    alert("thanks you for sending a message");
// });

// Image
VanillaTilt.init(document.getElementById("img1"), {
    max: 10,
    speed: 100
});

