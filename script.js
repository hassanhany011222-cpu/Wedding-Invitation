/* =========================================
   WEDDING INVITATION
   MOHAMED & SAMAH
   SCRIPT.JS
========================================= */


/* =========================================
   1. LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1200);

    }

});


/* =========================================
   2. SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".section-reveal");


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}


/* =========================================
   3. COUNTDOWN
========================================= */

/*
   Wedding:
   Tuesday - 22 September 2026
   9:00 PM

   Uses the visitor's local time.
*/

const weddingDate =
    new Date("2026-09-22T21:00:00");


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function addZero(number) {

    return String(number).padStart(2, "0");

}


function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime() -
        now.getTime();


    if (difference <= 0) {

        if (daysElement)
            daysElement.textContent = "00";

        if (hoursElement)
            hoursElement.textContent = "00";

        if (minutesElement)
            minutesElement.textContent = "00";

        if (secondsElement)
            secondsElement.textContent = "00";

        return;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    if (daysElement)
        daysElement.textContent =
            addZero(days);


    if (hoursElement)
        hoursElement.textContent =
            addZero(hours);


    if (minutesElement)
        minutesElement.textContent =
            addZero(minutes);


    if (secondsElement)
        secondsElement.textContent =
            addZero(seconds);

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================
   4. MUSIC
========================================= */

const music =
    document.getElementById("weddingMusic");


if (music) {

    /*
       مستوى الصوت
    */

    music.volume = 0.7;


    /*
       تكرار الأغنية
    */

    music.loop = true;


    /*
       محاولة التشغيل تلقائيًا
    */

    async function playWeddingMusic() {

        try {

            await music.play();

            console.log(
                "🎵 Wedding music is playing"
            );

        } catch (error) {

            console.log(
                "Autoplay blocked by browser."
            );

        }

    }


    /*
       عند تحميل الصفحة
    */

    window.addEventListener(
        "load",
        () => {

            playWeddingMusic();

        }
    );


    /*
       إذا منع المتصفح التشغيل التلقائي،
       أول تفاعل مع الصفحة يشغل الأغنية.
    */

    const startMusicOnInteraction =
        () => {

            if (music.paused) {

                playWeddingMusic();

            }

        };


    document.addEventListener(
        "click",
        startMusicOnInteraction,
        { once: true }
    );


    document.addEventListener(
        "touchstart",
        startMusicOnInteraction,
        { once: true }
    );


    /*
       حماية إضافية:
       إذا انتهت الأغنية نعيدها من البداية.
    */

    music.addEventListener(
        "ended",
        () => {

            music.currentTime = 0;

            playWeddingMusic();

        }
    );

}


/* =========================================
   5. ATTENDANCE
========================================= */

const attendanceButton =
    document.getElementById(
        "attendanceButton"
    );


const celebrationContainer =
    document.getElementById(
        "celebration-container"
    );


const attendanceModal =
    document.getElementById(
        "attendanceModal"
    );


/* =========================================
   6. CELEBRATION SYMBOLS
========================================= */

const celebrationSymbols = [

    "❤️",
    "💗",
    "💕",
    "💖",
    "💘",
    "🌹",
    "🌸",
    "🌷",
    "✨",
    "💫",
    "🤍"

];


/* =========================================
   7. CREATE PARTICLE
========================================= */

function createCelebrationParticle(
    startX,
    startY
) {

    if (!celebrationContainer)
        return;


    const particle =
        document.createElement("div");


    particle.classList.add(
        "celebration-particle"
    );


    particle.textContent =
        celebrationSymbols[
            Math.floor(
                Math.random() *
                celebrationSymbols.length
            )
        ];


    particle.style.left =
        `${startX}px`;


    particle.style.top =
        `${startY}px`;


    const angle =
        Math.random() *
        Math.PI *
        2;


    const distance1 =
        70 +
        Math.random() * 120;


    const distance2 =
        180 +
        Math.random() * 300;


    const x1 =
        Math.cos(angle) *
        distance1;


    const y1 =
        Math.sin(angle) *
        distance1;


    const x2 =
        Math.cos(angle) *
        distance2;


    const y2 =
        Math.sin(angle) *
        distance2;


    const rotation =
        -360 +
        Math.random() * 720;


    particle.style.setProperty(
        "--x1",
        `${x1}px`
    );


    particle.style.setProperty(
        "--y1",
        `${y1}px`
    );


    particle.style.setProperty(
        "--x2",
        `${x2}px`
    );


    particle.style.setProperty(
        "--y2",
        `${y2}px`
    );


    particle.style.setProperty(
        "--rotation",
        `${rotation}deg`
    );


    const size =
        18 +
        Math.random() * 25;


    particle.style.fontSize =
        `${size}px`;


    particle.style.animationDelay =
        `${Math.random() * .15}s`;


    celebrationContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 1600);

}


/* =========================================
   8. EXPLOSION
========================================= */

function createCelebrationExplosion() {

    if (!attendanceButton)
        return;


    const buttonRect =
        attendanceButton.getBoundingClientRect();


    const startX =
        buttonRect.left +
        buttonRect.width / 2;


    const startY =
        buttonRect.top +
        buttonRect.height / 2;


    const particleCount = 50;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        setTimeout(() => {

            createCelebrationParticle(
                startX,
                startY
            );

        }, i * 12);

    }

}


/* =========================================
   9. OPEN MODAL
========================================= */

function openAttendanceModal() {

    if (!attendanceModal)
        return;


    attendanceModal.classList.add(
        "show"
    );


    attendanceModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================
   10. CLOSE MODAL
========================================= */

function closeAttendanceModal() {

    if (!attendanceModal)
        return;


    attendanceModal.classList.remove(
        "show"
    );


    attendanceModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalCloseButton =
    document.getElementById(
        "modalCloseButton"
    );


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeAttendanceModal
    );

}


if (modalCloseButton) {

    modalCloseButton.addEventListener(
        "click",
        closeAttendanceModal
    );

}


/* =========================================
   11. ATTENDANCE BUTTON
========================================= */

let attendanceLocked = false;


if (attendanceButton) {

    attendanceButton.addEventListener(
        "click",
        () => {

            if (attendanceLocked)
                return;


            attendanceLocked = true;


            /*
               Button animation
            */

            attendanceButton.style.transform =
                "scale(.92)";


            setTimeout(() => {

                attendanceButton.style.transform =
                    "";

            }, 180);


            /*
               Hearts + Flowers explosion
            */

            createCelebrationExplosion();


            /*
               Show attendance box
               after explosion
            */

            setTimeout(() => {

                openAttendanceModal();

            }, 850);


            setTimeout(() => {

                attendanceLocked = false;

            }, 1800);

        }
    );

}


/* =========================================
   12. CLICK OUTSIDE MODAL
========================================= */

if (attendanceModal) {

    const modalOverlay =
        attendanceModal.querySelector(
            ".modal-overlay"
        );


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeAttendanceModal
        );

    }

}


/* =========================================
   13. ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            attendanceModal &&
            attendanceModal.classList.contains(
                "show"
            )
        ) {

            closeAttendanceModal();

        }

    }
);


/* =========================================
   14. BACKGROUND FLOATING ELEMENTS
========================================= */

function createFloatingDecoration() {

    const decoration =
        document.createElement("div");


    decoration.textContent =
        Math.random() > .5
            ? "♡"
            : "✦";


    decoration.style.position =
        "fixed";


    decoration.style.bottom =
        "-30px";


    decoration.style.left =
        `${Math.random() * 100}%`;


    decoration.style.color =
        "rgba(128,101,47,.20)";


    decoration.style.fontSize =
        `${12 + Math.random() * 18}px`;


    decoration.style.pointerEvents =
        "none";


    decoration.style.zIndex =
        "1";


    decoration.style.animation =
        "backgroundFloat 8s linear forwards";


    document.body.appendChild(
        decoration
    );


    setTimeout(() => {

        decoration.remove();

    }, 8000);

}


/* =========================================
   15. BACKGROUND ANIMATION
========================================= */

const backgroundStyle =
    document.createElement("style");


backgroundStyle.textContent = `

@keyframes backgroundFloat {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    15% {

        opacity: 1;

    }

    85% {

        opacity: 1;

    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    backgroundStyle
);


setInterval(
    createFloatingDecoration,
    1800
);


/* =========================================
   16. FINAL CHECK
========================================= */

console.log(
    "💍 Wedding Invitation - Mohamed & Samah"
);

console.log(
    "✨ Script loaded successfully"
);
