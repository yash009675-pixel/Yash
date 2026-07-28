alert("START JS ❤️");
/* ======================================================
   Yash ❤️ Arpita
   Script.js Version 2.0 FINAL
   PART 1
====================================================== */


/* ======================================================
   DOM READY
====================================================== */

window.addEventListener("load", () => {


    // ===============================
    // Loader Hide
    // ===============================

    const loader = document.getElementById("loader");


    if(loader){

        setTimeout(()=>{

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";


            setTimeout(()=>{

                loader.style.display = "none";

            },800);


        },2500);

    }



    // ===============================
    // Cinematic Intro
    // ===============================

    const cinematicIntro =
    document.getElementById("cinematicIntro");


    if(cinematicIntro){

        setTimeout(()=>{


            cinematicIntro.style.opacity="0";


            setTimeout(()=>{

                cinematicIntro.style.display="none";

            },1000);


        },5000);

    }



    // ===============================
    // Welcome Popup
    // ===============================


    const welcomePopup =
    document.getElementById("welcomePopup");


    const closePopup =
    document.getElementById("closePopup");



    if(welcomePopup && closePopup){


        setTimeout(()=>{


            welcomePopup.classList.add("show");


        },1500);



        closePopup.addEventListener("click",()=>{


            welcomePopup.classList.remove("show");


            setTimeout(()=>{


                welcomePopup.style.display="none";


            },500);



        });


    }



});




/* ======================================================
   ANIMATED STARS
====================================================== */


const starContainer =
document.getElementById("stars");



if(starContainer){


    for(let i=0;i<150;i++){


        const star =
        document.createElement("div");



        star.className="star";



        star.style.left =
        Math.random()*100+"%";



        star.style.top =
        Math.random()*100+"%";



        star.style.animationDuration =
        (1 + Math.random()*3)+"s";



        star.style.opacity =
        Math.random();



        starContainer.appendChild(star);



    }


}




/* ======================================================
   FLOATING HEARTS
====================================================== */


function createFloatingHeart(){



    const heart =
    document.createElement("div");



    const heartList=[

        "❤️",
        "💜",
        "💕",
        "💖"

    ];



    heart.innerHTML =
    heartList[
        Math.floor(
            Math.random()*heartList.length
        )
    ];



    heart.style.position="fixed";



    heart.style.left =
    Math.random()*window.innerWidth+"px";



    heart.style.bottom="-40px";



    heart.style.fontSize =
    (18 + Math.random()*20)+"px";



    heart.style.pointerEvents="none";



    heart.style.opacity=".85";



    heart.style.zIndex="2";



    heart.style.transition =
    "transform 8s linear, opacity 8s linear";



    document.body.appendChild(heart);




    requestAnimationFrame(()=>{


        heart.style.transform =
        "translateY(-110vh) rotate(360deg)";


        heart.style.opacity="0";


    });



    setTimeout(()=>{


        heart.remove();


    },8000);



}



setInterval(createFloatingHeart,700);





/* ======================================================
   CONSOLE BRAND MESSAGE
====================================================== */


console.clear();



console.log(

"%c❤️ Welcome To Yash & Arpita Love Story ❤️",

"color:#ff4fd8;font-size:18px;font-weight:bold;"

);



console.log(

"%cForever & Always 💜",

"color:#8b5cf6;font-size:14px;"

);



console.log(

"✅ Script Part 1 Loaded Successfully"

);

/* ======================================================
   Yash ❤️ Arpita
   Script.js Version 2.0 FINAL
   PART 2
====================================================== */


/* ======================================================
   ANNIVERSARY COUNTDOWN
====================================================== */


const countdownDays =
document.getElementById("days");

const countdownHours =
document.getElementById("hours");

const countdownMinutes =
document.getElementById("minutes");

const countdownSeconds =
document.getElementById("seconds");


const yearsTogetherBox =
document.getElementById("yearsTogether");



// Relationship Start Date
// 22 January 2021

const relationshipStartDate =
new Date(2021,0,22,0,0,0);





/* ======================================================
   APPLE FLIP ANIMATION
====================================================== */


function updateFlip(element,value){


    if(!element) return;



    const formatted =
    String(value).padStart(2,"0");



    if(element.innerText !== formatted){


        element.classList.remove("flip");


        void element.offsetWidth;


        element.classList.add("flip");


        element.innerText = formatted;


    }


}






/* ======================================================
   YEARS TOGETHER CALCULATION
====================================================== */


function calculateYearsTogether(){


    const today =
    new Date();



    let years =
    today.getFullYear()
    -
    relationshipStartDate.getFullYear();



    const anniversaryThisYear =
    new Date(
        today.getFullYear(),
        0,
        22
    );



    if(today < anniversaryThisYear){

        years--;

    }



    return years;


}







/* ======================================================
   COUNTDOWN UPDATE
====================================================== */


function updateAnniversaryCountdown(){



    const now =
    new Date();



    let nextAnniversary =
    new Date(
        now.getFullYear(),
        0,
        22,
        0,
        0,
        0
    );



    if(now >= nextAnniversary){


        nextAnniversary =
        new Date(
            now.getFullYear()+1,
            0,
            22,
            0,
            0,
            0
        );


    }




    const difference =
    nextAnniversary - now;




    const days =
    Math.floor(
        difference /
        (1000*60*60*24)
    );



    const hours =
    Math.floor(
        (difference /
        (1000*60*60))
        %24
    );



    const minutes =
    Math.floor(
        (difference /
        (1000*60))
        %60
    );



    const seconds =
    Math.floor(
        (difference /
        1000)
        %60
    );




    updateFlip(
        countdownDays,
        days
    );



    updateFlip(
        countdownHours,
        hours
    );



    updateFlip(
        countdownMinutes,
        minutes
    );



    updateFlip(
        countdownSeconds,
        seconds
    );





    const years =
    calculateYearsTogether();



    if(yearsTogetherBox){



        if(
            now.getMonth()===0 &&
            now.getDate()===22
        ){


            yearsTogetherBox.innerHTML =
            `🎉 Happy ${years} Year Anniversary ❤️`;


        }
        else{


            yearsTogetherBox.innerHTML =
            `❤️ ${years} Years Together ❤️`;


        }


    }



}



updateAnniversaryCountdown();


setInterval(
    updateAnniversaryCountdown,
    1000
);







/* ======================================================
   BACKGROUND MUSIC
====================================================== */


const backgroundMusic =
document.getElementById("bgMusic");


const musicButton =
document.getElementById("musicBtn");



let musicPlaying = false;



if(backgroundMusic && musicButton){



    musicButton.addEventListener(
    "click",
    ()=>{



        if(!musicPlaying){


            backgroundMusic.play();



            musicButton.innerHTML="⏸️";


            musicPlaying=true;



        }
        else{


            backgroundMusic.pause();



            musicButton.innerHTML="🎵";


            musicPlaying=false;



        }



    });



}







/* ======================================================
   DARK / LIGHT MODE
====================================================== */


const themeButton =
document.getElementById("themeBtn");



if(themeButton){



    themeButton.addEventListener(
    "click",
    ()=>{


        document.body.classList.toggle(
            "light"
        );



        if(
        document.body.classList.contains("light")
        ){


            themeButton.innerHTML="☀️";


        }
        else{


            themeButton.innerHTML="🌙";


        }



    });



}







console.log(
"✅ Script Part 2 Loaded Successfully ❤️"
);

/* ======================================================
   Yash ❤️ Arpita
   Script.js Version 2.0 FINAL
   PART 3
====================================================== */



/* ======================================================
   LOVE LETTER
====================================================== */


const loveEnvelope =
document.getElementById("envelope");


const openLetterButton =
document.getElementById("openLetter");



if(loveEnvelope && openLetterButton){


    let letterOpened = false;



    openLetterButton.addEventListener(
    "click",
    ()=>{


        letterOpened =
        !letterOpened;



        loveEnvelope.classList.toggle(
            "open",
            letterOpened
        );



        if(letterOpened){


            openLetterButton.innerHTML =
            "💌 Close Letter";



            loveEnvelope.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });



        }
        else{


            openLetterButton.innerHTML =
            "Open My Letter ❤️";


        }



    });


}







/* ======================================================
   CARD HOVER EFFECT
====================================================== */


const loveCards =
document.querySelectorAll(".card");



loveCards.forEach(card=>{


    card.addEventListener(
    "mouseenter",
    ()=>{


        card.style.transform =
        "translateY(-8px) scale(1.03)";


    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "translateY(0px) scale(1)";


    });



});







/* ======================================================
   BUTTON RIPPLE EFFECT
====================================================== */


const rippleButtons =
document.querySelectorAll(".button");



rippleButtons.forEach(button=>{


    button.style.position="relative";

    button.style.overflow="hidden";



    button.addEventListener(
    "click",
    function(event){



        const ripple =
        document.createElement("span");



        const box =
        this.getBoundingClientRect();



        const size =
        Math.max(
            box.width,
            box.height
        );



        ripple.style.position="absolute";

        ripple.style.width =
        size+"px";

        ripple.style.height =
        size+"px";

        ripple.style.borderRadius="50%";

        ripple.style.left =
        event.clientX -
        box.left -
        size/2 +"px";


        ripple.style.top =
        event.clientY -
        box.top -
        size/2 +"px";


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


            ripple.style.opacity="0";


        });



        setTimeout(()=>{


            ripple.remove();


        },600);



    });



});







/* ======================================================
   BACK TO TOP BUTTON
====================================================== */


const backTopButton =
document.createElement("button");



backTopButton.innerHTML="⬆";

backTopButton.id="topBtn";

document.body.appendChild(
    backTopButton
);



Object.assign(
backTopButton.style,
{

position:"fixed",

right:"25px",

bottom:"30px",

width:"52px",

height:"52px",

border:"none",

borderRadius:"50%",

background:
"linear-gradient(135deg,#ff4fd8,#8b5cf6)",

color:"#fff",

fontSize:"22px",

cursor:"pointer",

display:"none",

zIndex:"999"

}

);





window.addEventListener(
"scroll",
()=>{


    if(window.scrollY>300){


        backTopButton.style.display =
        "block";


    }
    else{


        backTopButton.style.display =
        "none";


    }


});





backTopButton.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});








/* ======================================================
   SCROLL PROGRESS BAR
====================================================== */


const scrollProgress =
document.createElement("div");



scrollProgress.id =
"progressBar";



document.body.appendChild(
    scrollProgress
);



Object.assign(
scrollProgress.style,
{

position:"fixed",

top:"0",

left:"0",

height:"4px",

width:"0%",

zIndex:"9999",

background:
"linear-gradient(90deg,#ff4fd8,#8b5cf6)"

}

);





window.addEventListener(
"scroll",
()=>{


    const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;



    const currentScroll =
    window.scrollY;



    scrollProgress.style.width =
    (currentScroll / totalHeight) * 100
    + "%";



});








/* ======================================================
   STORY PAGE MEMORY BUTTON
====================================================== */


const memoryButtons =
document.querySelectorAll(".readMore");



memoryButtons.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        const memory =
        button.nextElementSibling;



        if(memory.style.display==="block"){


            memory.style.display="none";


            button.innerHTML =
            "Read Memory ❤️";


        }
        else{


            memory.style.display="block";


            button.innerHTML =
            "Hide Memory ❤️";


        }


    });


});








/* ======================================================
   SCROLL REVEAL ANIMATION
====================================================== */


const revealElements =
document.querySelectorAll(
".memory-card,.slide,.letter-card,.quote-section,.ending-section"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";


            entry.target.style.transform =
            "translateY(0)";


        }


    });


},
{

threshold:.15

});





revealElements.forEach(element=>{


    element.style.opacity="0";


    element.style.transform =
    "translateY(60px)";


    element.style.transition =
    ".8s ease";



    revealObserver.observe(element);


});








/* ======================================================
   AUTO GALLERY SLIDER
====================================================== */


const gallerySlider =
document.querySelector(".slides");



if(gallerySlider){


    let slideIndex=0;



    setInterval(()=>{


        const slides =
        gallerySlider.querySelectorAll(".slide");



        if(slides.length===0)
        return;



        slideIndex++;



        if(slideIndex>=slides.length){


            slideIndex=0;


        }



        gallerySlider.scrollTo({

            left:
            slideIndex*345,

            behavior:"smooth"

        });



    },3500);



}








/* ======================================================
   IMAGE ZOOM
====================================================== */


document
.querySelectorAll(".slide img")
.forEach(image=>{


    image.addEventListener(
    "click",
    ()=>{


        image.classList.toggle(
            "zoom"
        );


    });


});






console.log(
"✅ Script Part 3 Loaded Successfully ❤️"
);

/* ======================================================
   Yash ❤️ Arpita
   Script.js Version 2.0 FINAL
   PART 4
====================================================== */



/* ======================================================
   CURSOR GLOW
====================================================== */


const cursorGlow =
document.createElement("div");


cursorGlow.className =
"cursor-glow";


document.body.appendChild(cursorGlow);



document.addEventListener(
"mousemove",
(event)=>{


    cursorGlow.style.left =
    event.clientX - 12 + "px";


    cursorGlow.style.top =
    event.clientY - 12 + "px";


});







/* ======================================================
   FIREFLIES EFFECT
====================================================== */


function createFirefly(){


    const firefly =
    document.createElement("div");


    firefly.className =
    "firefly";


    firefly.style.left =
    Math.random()*100 + "vw";


    firefly.style.top =
    "100vh";


    firefly.style.animationDuration =
    (8 + Math.random()*8) + "s";


    document.body.appendChild(firefly);



    setTimeout(()=>{


        firefly.remove();


    },16000);



}



setInterval(
createFirefly,
1200
);







/* ======================================================
   FALLING ROSES
====================================================== */


function createRose(){


    const rose =
    document.createElement("div");


    rose.className =
    "rose";


    rose.innerHTML =
    "🌹";


    rose.style.left =
    Math.random()*100 + "vw";


    rose.style.animationDuration =
    (6 + Math.random()*4) + "s";


    document.body.appendChild(rose);



    setTimeout(()=>{


        rose.remove();


    },10000);



}



setInterval(
createRose,
2500
);







/* ======================================================
   SHOOTING STAR
====================================================== */


function createShootingStar(){


    const star =
    document.createElement("div");


    star.className =
    "shooting-star";


    star.style.top =
    Math.random()*250 + "px";


    star.style.left =
    "100vw";


    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },1800);



}



setInterval(
createShootingStar,
9000
);







/* ======================================================
   SECRET GIFT POPUP
====================================================== */


const giftButton =
document.getElementById("giftButton");


const giftPopup =
document.getElementById("giftPopup");


const closeGiftButton =
document.getElementById("closeGift");



if(
giftButton &&
giftPopup &&
closeGiftButton
){


    giftButton.onclick =
    ()=>{


        giftPopup.style.display =
        "flex";


    };



    closeGiftButton.onclick =
    ()=>{


        giftPopup.style.display =
        "none";


    };


}








/* ======================================================
   CELEBRATION TEXT
====================================================== */


window.addEventListener(
"load",
()=>{


    const celebration =
    document.getElementById(
        "celebrationText"
    );



    if(celebration){


        setTimeout(()=>{


            celebration.style.opacity="1";


        },1500);



        setTimeout(()=>{


            celebration.style.opacity="0";


        },6500);



    }



});








/* ======================================================
   HEART RAIN
====================================================== */


function createHeartRain(){


    const heart =
    document.createElement("div");


    heart.innerHTML =
    "❤️";


    heart.style.position =
    "fixed";


    heart.style.left =
    Math.random()*100 + "vw";


    heart.style.top =
    "-40px";


    heart.style.fontSize =
    (20 + Math.random()*20)
    + "px";


    heart.style.pointerEvents =
    "none";


    heart.style.zIndex =
    "999";


    heart.style.transition =
    "8s linear";


    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.style.transform =
        "translateY(120vh)";

    setTimeout(()=>{

        heart.remove();

    },8000);

}


// ==========================================
// MOUSE HEART TRAIL
// ==========================================

function createMouseHeart(x,y){

    const heart = document.createElement("div");

    heart.className = "mouse-heart";

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💜"
    ];

    heart.innerHTML =
    emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = x + "px";

    heart.style.top = y + "px";

    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },900);

}


// Desktop

document.addEventListener(
"mousemove",
(e)=>{

    createMouseHeart(
        e.clientX,
        e.clientY
    );

});


// Mobile

document.addEventListener(
"touchmove",
(e)=>{

    const touch = e.touches[0];

    createMouseHeart(
        touch.clientX,
        touch.clientY
    );

});


console.log("✅ Script Part 4 Loaded Successfully ❤️");

alert("Script Loaded Successfully ❤️");
