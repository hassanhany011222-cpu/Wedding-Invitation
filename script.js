/* =====================================================
   Wedding Invitation
   Mohamed & Samah
===================================================== */

/* =====================================================
   1. MUSIC
===================================================== */

const weddingMusic = document.getElementById("weddingMusic");

if (weddingMusic) {

    weddingMusic.loop = true;
    weddingMusic.volume = 0.7;

    function playWeddingMusic() {
        weddingMusic.play().catch(() => {
            console.log("Waiting for user interaction...");
        });
    }

    // محاولة التشغيل عند فتح الموقع
    playWeddingMusic();

    // تشغيل الموسيقى عند أول تفاعل مع الموقع
    const startMusicOnce = () => {
        playWeddingMusic();
    };

    document.addEventListener("click", startMusicOnce, {
        once: true
    });

    document.addEventListener("touchstart", startMusicOnce, {
        once: true,
        passive: true
    });

    document.addEventListener("scroll", startMusicOnce, {
        once: true,
        passive: true
    });
}


/* =====================================================
   2. COUNTDOWN
===================================================== */

const weddingDate = new Date(
    "September 22, 2026 21:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {

        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        if (days) days.textContent = "00";
        if (hours) hours.textContent = "00";
        if (minutes) minutes.textContent = "00";
        if (seconds) seconds.textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );


    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if (daysElement) {
        daysElement.textContent =
            String(days).padStart(2, "0");
    }

    if (hoursElement) {
        hoursElement.textContent =
            String(hours).padStart(2, "0");
    }

    if (minutesElement) {
        minutesElement.textContent =
            String(minutes).padStart(2, "0");
    }

    if (secondsElement) {
        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================================
   3. SCROLL REVEAL
===================================================== */

const revealSections =
    document.querySelectorAll(".section-reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealSections.forEach((section) => {
        revealObserver.observe(section);
    });

} else {

    revealSections.forEach((section) => {
        section.classList.add("visible");
    });

}


/* =====================================================
   4. RSVP ELEMENTS
===================================================== */

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


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalCloseButton =
    document.getElementById(
        "modalCloseButton"
    );


/* =====================================================
   5. HEARTS + FLOWERS EXPLOSION
===================================================== */

function createCelebration() {

    if (!celebrationContainer) {
        return;
    }


    const symbols = [
        "♥",
        "♡",
        "💜",
        "🤎",
        "🌸",
        "🌹",
        "🌷",
        "✨",
        "✦"
    ];


    const numberOfItems = 70;


    for (
        let i = 0;
        i < numberOfItems;
        i++
    ) {

        const item =
            document.createElement("div");


        item.className =
            "celebration-item";


        item.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        /*
           بداية الانفجار
        */

        const startX =
            35 +
            Math.random() * 30;


        const startY =
            55 +
            Math.random() * 10;


        item.style.left =
            startX + "%";


        item.style.top =
            startY + "%";


        /*
           اتجاه الانفجار
        */

        const x =
            (Math.random() * 700) - 350;


        const y =
            (Math.random() * 600) - 400;


        item.style.setProperty(
            "--x",
            `${x}px`
        );


        item.style.setProperty(
            "--y",
            `${y}px`
        );


        /*
           أحجام مختلفة
        */

        const size =
            18 +
            Math.random() * 28;


        item.style.fontSize =
            `${size}px`;


        /*
           توقيت عشوائي بسيط
        */

        item.style.animationDelay =
            `${Math.random() * 0.25}s`;


        celebrationContainer.appendChild(
            item
        );


        /*
           حذف العنصر بعد انتهاء الحركة
        */

        setTimeout(() => {

            item.remove();

        }, 2500);

    }

}


/* =====================================================
   6. OPEN RSVP MODAL
===================================================== */

function openAttendanceModal() {

    if (!attendanceModal) {
        return;
    }


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


/* =====================================================
   7. CLOSE RSVP MODAL
===================================================== */

function closeAttendanceModal() {

    if (!attendanceModal) {
        return;
    }


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


/* =====================================================
   8. RSVP BUTTON
===================================================== */

if (attendanceButton) {

    attendanceButton.addEventListener(
        "click",
        () => {

            /*
               تشغيل الموسيقى أيضًا
               عند الضغط على الزر
            */

            if (weddingMusic) {

                weddingMusic
                    .play()
                    .catch(() => {});

            }


            /*
               انفجار القلوب والورود
            */

            createCelebration();


            /*
               ننتظر حتى يظهر الانفجار
               ثم نفتح صندوق التأكيد
            */

            setTimeout(() => {

                openAttendanceModal();

            }, 1200);

        }
    );

}


/* =====================================================
   9. CLOSE BUTTON
===================================================== */

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


/* =====================================================
   10. CLICK OUTSIDE MODAL
===================================================== */

if (attendanceModal) {

    attendanceModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target.classList.contains(
                    "modal-overlay"
                )
            ) {

                closeAttendanceModal();

            }

        }
    );

}


/* =====================================================
   11. ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeAttendanceModal();

        }

    }
);


/* =====================================================
   12. SMOOTH SCROLL
===================================================== */

document.documentElement.style.scrollBehavior =
    "smooth";


/* =====================================================
   13. BROKEN IMAGE HANDLING
===================================================== */

const weddingImage =
    document.querySelector(
        ".photo-frame img"
    );


if (weddingImage) {

    weddingImage.addEventListener(
        "error",
        () => {

            console.log(
                "Wedding image not found."
            );

        }
    );

}


/* =====================================================
   END
===================================================== */
