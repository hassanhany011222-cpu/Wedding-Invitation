/* =========================================
   Wedding Invitation - محمد & سماح
   SCRIPT.JS
========================================= */


/* =========================================
   1. شاشة التحميل
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});


/* =========================================
   2. ظهور الأقسام أثناء الـ Scroll
========================================= */

const revealElements =
    document.querySelectorAll(".section-reveal");


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


/* =========================================
   3. العداد التنازلي
========================================= */

/*
   موعد الفرح:
   الثلاثاء 22 سبتمبر 2026
   الساعة 9 مساءً

   التوقيت المحلي للجهاز.
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


    /* لو انتهى الوقت */

    if (difference <= 0) {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";

        return;

    }


    const totalSeconds =
        Math.floor(difference / 1000);


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


    daysElement.textContent =
        addZero(days);

    hoursElement.textContent =
        addZero(hours);

    minutesElement.textContent =
        addZero(minutes);

    secondsElement.textContent =
        addZero(seconds);

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================
   4. الموسيقى
========================================= */

const music =
    document.getElementById("weddingMusic");


const musicButton =
    document.getElementById("musicButton");


const musicIcon =
    document.getElementById("musicIcon");


const musicText =
    document.getElementById("musicText");


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    async () => {

        try {

            if (!musicPlaying) {

                await music.play();

                musicPlaying = true;

                musicIcon.textContent = "❚❚";

                musicText.textContent =
                    "إيقاف الموسيقى";

            } else {

                music.pause();

                musicPlaying = false;

                musicIcon.textContent = "▶";

                musicText.textContent =
                    "تشغيل الموسيقى";

            }

        } catch (error) {

            console.error(
                "تعذر تشغيل الموسيقى:",
                error
            );

            musicText.textContent =
                "تأكد من وجود ملف الأغنية";

        }

    }
);


/* =========================================
   5. عند انتهاء الأغنية
========================================= */

music.addEventListener(
    "ended",
    () => {

        musicPlaying = false;

        musicIcon.textContent = "▶";

        musicText.textContent =
            "تشغيل الموسيقى";

    }
);


/* =========================================
   6. زر تأكيد الحضور
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
   7. رموز الانفجار
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
    "❣️",
    "🤍"

];


/* =========================================
   8. إنشاء قلب / وردة طائرة
========================================= */

function createCelebrationParticle(
    startX,
    startY
) {

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


    /*
       نقطة البداية
    */

    particle.style.left =
        `${startX}px`;

    particle.style.top =
        `${startY}px`;


    /*
       اتجاه الانفجار
    */

    const angle =
        Math.random() *
        Math.PI *
        2;


    /*
       المسافة الأولى
    */

    const distance1 =
        80 +
        Math.random() * 130;


    /*
       المسافة النهائية
    */

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


    /*
       أحجام مختلفة
    */

    const size =
        18 +
        Math.random() * 25;


    particle.style.fontSize =
        `${size}px`;


    /*
       تأخير بسيط عشوائي
    */

    particle.style.animationDelay =
        `${Math.random() * 0.15}s`;


    celebrationContainer.appendChild(
        particle
    );


    /*
       حذف العنصر بعد انتهاء الحركة
    */

    setTimeout(() => {

        particle.remove();

    }, 1600);

}


/* =========================================
   9. انفجار القلوب والورود
========================================= */

function createCelebrationExplosion() {

    const buttonRect =
        attendanceButton.getBoundingClientRect();


    const startX =
        buttonRect.left +
        buttonRect.width / 2;


    const startY =
        buttonRect.top +
        buttonRect.height / 2;


    /*
       عدد الجزيئات
    */

    const particleCount = 45;


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
   10. تأثير الضغط على الزر
========================================= */

attendanceButton.addEventListener(
    "click",
    () => {

        /*
           نبضة للزر
        */

        attendanceButton.style.transform =
            "scale(0.92)";


        setTimeout(() => {

            attendanceButton.style.transform =
                "";

        }, 180);


        /*
           انفجار القلوب والورود
        */

        createCelebrationExplosion();


        /*
           ظهور صندوق التأكيد
           بعد الانفجار
        */

        setTimeout(() => {

            openAttendanceModal();

        }, 850);

    }
);


/* =========================================
   11. فتح صندوق الحضور
========================================= */

function openAttendanceModal() {

    attendanceModal.classList.add(
        "show"
    );


    attendanceModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       منع Scroll خلف الصندوق
    */

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   12. إغلاق الصندوق
========================================= */

const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalCloseButton =
    document.getElementById(
        "modalCloseButton"
    );


function closeAttendanceModal() {

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


closeModal.addEventListener(
    "click",
    closeAttendanceModal
);


modalCloseButton.addEventListener(
    "click",
    closeAttendanceModal
);


/* =========================================
   13. الضغط خارج الصندوق
========================================= */

attendanceModal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeAttendanceModal
    );


/* =========================================
   14. زر ESC لإغلاق الصندوق
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            attendanceModal.classList.contains(
                "show"
            )
        ) {

            closeAttendanceModal();

        }

    }
);


/* =========================================
   15. قلوب خفيفة عشوائية في الخلفية
========================================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");


    heart.textContent =
        Math.random() > .5
            ? "♡"
            : "✦";


    heart.style.position =
        "fixed";


    heart.style.bottom =
        "-30px";


    heart.style.left =
        `${Math.random() * 100}%`;


    heart.style.color =
        "rgba(229, 201, 135, .25)";


    heart.style.fontSize =
        `${12 + Math.random() * 18}px`;


    heart.style.pointerEvents =
        "none";


    heart.style.zIndex =
        "1";


    heart.style.animation =
        "backgroundFloat 8s linear forwards";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


/* =========================================
   16. إضافة حركة الخلفية
========================================= */

const backgroundAnimationStyle =
    document.createElement("style");


backgroundAnimationStyle.textContent = `

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
    backgroundAnimationStyle
);


/* =========================================
   17. تشغيل الخلفية بشكل هادئ
========================================= */

setInterval(
    createFloatingHeart,
    1800
);


/* =========================================
   18. منع الضغط المزدوج السريع
========================================= */

let attendanceLocked = false;


attendanceButton.addEventListener(
    "click",
    () => {

        if (attendanceLocked) {

            return;

        }


        attendanceLocked = true;


        setTimeout(() => {

            attendanceLocked = false;

        }, 1800);

    }
);


/* =========================================
   19. رسالة في Console للتأكد
========================================= */

console.log(
    "💍 دعوة محمد & سماح تعمل بنجاح ❤️"
);
