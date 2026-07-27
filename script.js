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
