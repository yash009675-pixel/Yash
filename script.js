/* ======================================================
   Yash ❤️ Arpita
   Script.js Version 2.0
   Part 1
====================================================== */

// ==========================================
// DOM Ready
// ==========================================

window.addEventListener("load", () => {

    // Loader Hide
    const loader = document.getElementById("loader");

    setTimeout(() => {

        if (loader) {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }

    }, 2500);


    // Cinematic Intro Hide

    const intro = document.getElementById("cinematicIntro");

    if (intro) {

        setTimeout(() => {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";

            }, 1000);

        }, 5000);

    }


    // Welcome Popup

    const popup = document.getElementById("welcomePopup");
    const closePopup = document.getElementById("closePopup");

    if (popup && closePopup) {

        setTimeout(() => {

            popup.classList.add("show");

        }, 1500);

        closePopup.addEventListener("click", () => {

            popup.classList.remove("show");

            setTimeout(() => {

                popup.style.display = "none";

            }, 500);

        });

    }

});


// ==========================================
// Animated Stars
// ==========================================

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 150; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        star.style.opacity =
            Math.random();

        stars.appendChild(star);

    }

}


// ==========================================
// Floating Hearts
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    const emojis = [

        "❤️",
        "💜",
        "💕",
        "💖"

    ];

    heart.innerHTML =

        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.opacity = ".85";

    heart.style.zIndex = "2";

    heart.style.transition =
        "transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            "translateY(-110vh) rotate(360deg)";

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 700);


// ==========================================
// Console Message
// ==========================================

console.log("❤️ Welcome To Yash & Arpita's Love Story ❤️");
// ==========================================
// Anniversary Countdown
// ==========================================

const dayBox = document.getElementById("days");
const hourBox = document.getElementById("hours");
const minuteBox = document.getElementById("minutes");
const secondBox = document.getElementById("seconds");
const yearsBox = document.getElementById("yearsTogether");

const relationshipDate = new Date(2021, 0, 22, 0, 0, 0);

// ==========================================
// Apple Flip Animation
// ==========================================

function flip(element, value) {

    if (!element) return;

    const text = value.toString().padStart(2, "0");

    if (element.textContent !== text) {

        element.classList.remove("flip");

        void element.offsetWidth;

        element.classList.add("flip");

        element.textContent = text;

    }

}

// ==========================================
// Years Together
// ==========================================

function getYearsTogether() {

    const now = new Date();

    let years =
        now.getFullYear() -
        relationshipDate.getFullYear();

    const anniversary =
        new Date(now.getFullYear(), 0, 22);

    if (now < anniversary) {

        years--;

    }

    return years;

}

// ==========================================
// Countdown Update
// ==========================================

function updateCountdown() {

    const now = new Date();

    let nextAnniversary =
        new Date(now.getFullYear(), 0, 22);

    if (now >= nextAnniversary) {

        nextAnniversary =
            new Date(now.getFullYear() + 1, 0, 22);

    }

    const diff =
        nextAnniversary - now;

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes =
        Math.floor((diff / (1000 * 60)) % 60);

    const seconds =
        Math.floor((diff / 1000) % 60);

    flip(dayBox, days);
    flip(hourBox, hours);
    flip(minuteBox, minutes);
    flip(secondBox, seconds);

    const years = getYearsTogether();

    if (yearsBox) {

        if (
            now.getMonth() === 0 &&
            now.getDate() === 22
        ) {

            yearsBox.innerHTML =
                `🎉 Happy ${years} Year Anniversary ❤️`;

        } else {

            yearsBox.innerHTML =
                `❤️ ${years} Years Together ❤️`;

        }

    }

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ==========================================
// Background Music
// ==========================================

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (!isPlaying) {

            music.play();

            musicBtn.innerHTML = "⏸️";

            isPlaying = true;

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵";

            isPlaying = false;

        }

    });

}

// ==========================================
// Dark / Light Theme
// ==========================================

const themeBtn =
document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains("light")
        ) {

            themeBtn.innerHTML = "☀️";

        } else {

            themeBtn.innerHTML = "🌙";

        }

    });

}
// ==========================================
// LOVE LETTER
// ==========================================

const envelope =
document.getElementById("envelope");

const openLetterBtn =
document.getElementById("openLetter");

if (envelope && openLetterBtn) {

    let opened = false;

    openLetterBtn.addEventListener("click", () => {

        opened = !opened;

        envelope.classList.toggle("open", opened);

        if (opened) {

            openLetterBtn.innerHTML =
            "💌 Close Letter";

            envelope.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        } else {

            openLetterBtn.innerHTML =
            "Open My Letter ❤️";

        }

    });

}



// ==========================================
// CARD HOVER EFFECT
// ==========================================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});



// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons =
document.querySelectorAll(".button");

buttons.forEach(btn => {

    btn.style.position = "relative";

    btn.style.overflow = "hidden";

    btn.addEventListener("click", function(e){

        const ripple =
        document.createElement("span");

        const rect =
        this.getBoundingClientRect();

        const size =
        Math.max(rect.width, rect.height);

        ripple.style.position = "absolute";

        ripple.style.width =
        size + "px";

        ripple.style.height =
        size + "px";

        ripple.style.borderRadius =
        "50%";

        ripple.style.left =
        (e.clientX - rect.left - size/2) + "px";

        ripple.style.top =
        (e.clientY - rect.top - size/2) + "px";

        ripple.style.background =
        "rgba(255,255,255,.4)";

        ripple.style.transform =
        "scale(0)";

        ripple.style.transition =
        ".6s";

        ripple.style.pointerEvents =
        "none";

        this.appendChild(ripple);

        requestAnimationFrame(()=>{

            ripple.style.transform =
            "scale(3)";

            ripple.style.opacity =
            "0";

        });

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});



// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";

topBtn.style.right = "25px";

topBtn.style.bottom = "30px";

topBtn.style.width = "52px";

topBtn.style.height = "52px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background =
"linear-gradient(135deg,#ff4fd8,#8b5cf6)";

topBtn.style.color = "#fff";

topBtn.style.fontSize = "22px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progress =
document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.zIndex="9999";

progress.style.background=
"linear-gradient(90deg,#ff4fd8,#8b5cf6)";

window.addEventListener("scroll",()=>{

    const total =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const current =
    window.scrollY;

    progress.style.width =
    (current/total)*100 + "%";

});



// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.clear();

console.log(

"%c❤️ Welcome To Yash & Arpita ❤️",

"color:#ff4fd8;font-size:18px;font-weight:bold;"

);

console.log(

"%cForever & Always 💜",

"color:#8b5cf6;font-size:14px;"

);



// ==========================================
// READY
// ==========================================

console.log("✅ Script Version 2.0 Loaded");
/* =========================================
   STORY PAGE JAVASCRIPT
========================================= */

// ===============================
// Read Memory Button
// ===============================

const memoryButtons =
document.querySelectorAll(".readMore");

memoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

const memory =
button.nextElementSibling;

if(memory.style.display==="block"){

memory.style.display="none";

button.innerHTML="Read Memory ❤️";

}else{

memory.style.display="block";

button.innerHTML="Hide Memory ❤️";

}

});

});



// ===============================
// Scroll Reveal Animation
// ===============================

const revealItems =
document.querySelectorAll(

".memory-card,.slide,.letter-card,.quote-section,.ending-section"

);

const revealObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});



// ===============================
// Auto Gallery Slider
// ===============================

const slider =
document.querySelector(".slides");

if(slider){

let index=0;

setInterval(()=>{

const cards=

slider.querySelectorAll(".slide");

if(cards.length===0)return;

index++;

if(index>=cards.length){

index=0;

}

slider.scrollTo({

left:index*345,

behavior:"smooth"

});

},3500);

}



// ===============================
// Ending Glow
// ===============================

const ending=

document.querySelector(".ending-section");

if(ending){

const endObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

ending.animate([

{

transform:"scale(.9)",

opacity:.4

},

{

transform:"scale(1)",

opacity:1

}

],

{

duration:1000

});

}

});

});

endObserver.observe(ending);

}



// ===============================
// Scroll Progress Bar
// ===============================

const progress=
document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

if(!progress)return;

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const current=

(window.scrollY/total)*100;

progress.style.width=current+"%";

});



// ===============================
// Back To Top
// ===============================

const topBtn=

document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn)return;

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}



// ===============================
// Gallery Image Zoom
// ===============================

document.querySelectorAll(".slide img")

.forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});



// ===============================
// Console
// ===============================

console.log(

"❤️ Story Page Loaded Successfully ❤️"

);
/* =========================================
PHASE 5A
MAGIC EFFECTS
========================================= */

// Cursor Glow

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX-12+"px";

glow.style.top=e.clientY-12+"px";

});

// Fireflies

function firefly(){

const f=document.createElement("div");

f.className="firefly";

f.style.left=Math.random()*100+"vw";

f.style.top="100vh";

f.style.animationDuration=

8+Math.random()*8+"s";

document.body.appendChild(f);

setTimeout(()=>{

f.remove();

},16000);

}

setInterval(firefly,1200);

// Roses

function rose(){

const r=document.createElement("div");

r.className="rose";

r.innerHTML="🌹";

r.style.left=Math.random()*100+"vw";

r.style.animationDuration=

6+Math.random()*4+"s";

document.body.appendChild(r);

setTimeout(()=>{

r.remove();

},10000);

}

setInterval(rose,2500);

// Shooting Star

function shooting(){

const s=document.createElement("div");

s.className="shooting-star";

s.style.top=Math.random()*250+"px";

s.style.left="100vw";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1800);

}

setInterval(shooting,9000);

console.log("✨ Magic Effects Loaded ✨");
/* =========================================
PHASE 6A
ANNIVERSARY
========================================= */

// Secret Gift

const gift=document.getElementById("giftButton");

const popup=document.getElementById("giftPopup");

const closeGift=document.getElementById("closeGift");

if(gift && popup && closeGift){

gift.onclick=()=>{

popup.style.display="flex";

};

closeGift.onclick=()=>{

popup.style.display="none";

};

}

// Celebration

window.addEventListener("load",()=>{

const text=

document.getElementById("celebrationText");

if(text){

setTimeout(()=>{

text.style.opacity="1";

},1500);

setTimeout(()=>{

text.style.opacity="0";

},6500);

}

});

// Heart Rain

function heartRain(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=

20+Math.random()*20+"px";

heart.style.pointerEvents="none";

heart.style.transition="8s linear";

heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=

"translateY(120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(heartRain,700);
/* =========================================
PHASE 6B
CONFETTI
========================================= */

function launchConfetti(){

const colors=[
"#ff4fd8",
"#8b5cf6",
"#ffd700",
"#00e5ff",
"#ffffff",
"#ff6b6b"
];

for(let i=0;i<180;i++){

const confetti=
document.createElement("div");

confetti.className="confetti";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

confetti.style.animationDuration=
(4+Math.random()*3)+"s";

confetti.style.animationDelay=
(Math.random()*0.5)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},8000);

}

}

// Launch after page load

window.addEventListener("load",()=>{

setTimeout(()=>{

launchConfetti();

},2500);

});
/* =========================================
PHASE 6C
PROPOSAL
========================================= */

const proposal=document.getElementById("proposalPopup");

const yes=document.getElementById("yesBtn");

const no=document.getElementById("noBtn");

setTimeout(()=>{

if(proposal){

proposal.style.display="flex";

}

},12000);

if(yes){

yes.onclick=()=>{

yes.innerHTML="❤️ Forever ❤️";

};

}

if(no){

no.addEventListener("mouseover",()=>{

no.style.position="absolute";

no.style.left=Math.random()*70+"%";

no.style.top=Math.random()*70+"%";

});

}
