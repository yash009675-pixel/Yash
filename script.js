// ========================================
// Yash ❤️ Arpita
// script.js (Part 3A)
// ========================================


// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }

    }, 2500);

});



// ===============================
// Animated Stars
// ===============================

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 150; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        star.style.opacity = Math.random();

        stars.appendChild(star);

    }

}



// ===============================
// Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    const hearts = ["❤️","💜","💕","💖"];

    heart.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random()*window.innerWidth+"px";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
        (18+Math.random()*18)+"px";

    heart.style.pointerEvents = "none";

    heart.style.opacity = ".8";

    heart.style.transition = "all 8s linear";

    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform =
            "translateY(-110vh) rotate(360deg)";

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);



// ===============================
// Countdown Elements
// ===============================

const dayBox =
document.getElementById("days");

const hourBox =
document.getElementById("hours");

const minuteBox =
document.getElementById("minutes");

const secondBox =
document.getElementById("seconds");

const yearsBox =
document.getElementById("yearsTogether");



// ===============================
// Relationship Date
// ===============================

const relationshipDate =
new Date(2021,0,22,0,0,0);



// ===============================
// Flip Animation
// ===============================

function flip(element,value){

    const text =
    value.toString().padStart(2,"0");

    if(element.innerHTML!==text){

        element.classList.remove("flip");

        void element.offsetWidth;

        element.classList.add("flip");

        element.innerHTML=text;

    }

}



// ===============================
// Calculate Years Together
// ===============================

function getYearsTogether(){

    const now=new Date();

    let years=
    now.getFullYear()-
    relationshipDate.getFullYear();

    const anniversary=
    new Date(now.getFullYear(),0,22);

    if(now<anniversary){

        years--;

    }

    return years;

}
// ===============================
// Next Anniversary Countdown
// ===============================

function updateCountdown(){

    const now = new Date();

    let nextAnniversary =
        new Date(now.getFullYear(),0,22,0,0,0);

    if(now >= nextAnniversary){

        nextAnniversary =
        new Date(now.getFullYear()+1,0,22,0,0,0);

    }

    const diff =
        nextAnniversary - now;

    const days =
        Math.floor(diff/(1000*60*60*24));

    const hours =
        Math.floor((diff/(1000*60*60))%24);

    const minutes =
        Math.floor((diff/(1000*60))%60);

    const seconds =
        Math.floor((diff/1000)%60);



    flip(dayBox,days);
    flip(hourBox,hours);
    flip(minuteBox,minutes);
    flip(secondBox,seconds);



    const years =
        getYearsTogether();



    if(
        now.getMonth()===0 &&
        now.getDate()===22
    ){

        yearsBox.innerHTML =
        `🎉 Happy ${years}th Anniversary ❤️`;

    }
    else{

        yearsBox.innerHTML =
        `${years} Years Together ❤️`;

    }

}



// ===============================
// Start Countdown
// ===============================

updateCountdown();

setInterval(updateCountdown,1000);



// ===============================
// Small Hover Glow Effect
// ===============================

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-6px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});



// ===============================
// Button Ripple Effect
// ===============================

const button =
document.querySelector(".button");

if(button){

button.addEventListener("click",function(e){

const ripple =
document.createElement("span");

const rect =
this.getBoundingClientRect();

const size =
Math.max(rect.width,rect.height);

ripple.style.width =
size+"px";

ripple.style.height =
size+"px";

ripple.style.position =
"absolute";

ripple.style.borderRadius =
"50%";

ripple.style.background =
"rgba(255,255,255,.4)";

ripple.style.left =
(e.clientX-rect.left-size/2)+"px";

ripple.style.top =
(e.clientY-rect.top-size/2)+"px";

ripple.style.transform =
"scale(0)";

ripple.style.transition =
".6s";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(3)";
ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

}



// ===============================
// Console Message ❤️
// ===============================

console.log(
"❤️ Yash & Arpita - Forever & Always ❤️"
);
// ==========================
// Background Music
// ==========================

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

};



// ==========================
// Welcome Popup
// ==========================

const popup=document.getElementById("welcomePopup");

document
.getElementById("closePopup")
.onclick=()=>{

popup.style.display="none";

};



// ==========================
// Theme Switch
// ==========================

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

};
