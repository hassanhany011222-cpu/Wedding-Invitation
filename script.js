/* =====================================================
   WEDDING INVITATION
   MOHAMED & SAMAH
===================================================== */


/* =====================================================
   MUSIC
===================================================== */

const weddingMusic =
    document.getElementById("weddingMusic");

let musicStarted = false;


/*
    تشغيل الأغنية
*/

function startWeddingMusic() {

    if (!weddingMusic || musicStarted) {
        return;
    }


    weddingMusic.volume = 0.7;

    weddingMusic.loop = true;


    weddingMusic.play()
        .then(() => {

            musicStarted = true;

            console.log(
                "Wedding music started"
            );

        })
        .catch(() => {

            console.log(
                "Browser blocked autoplay"
            );

        });

}


/*
    محاولة التشغيل عند فتح الصفحة
*/

startWeddingMusic();


/*
    أول تفاعل مع الصفحة
    يشغل الأغنية.

    نستثني زر تأكيد الحضور
    حتى لا يكون هو الذي يبدأ الأغنية.
*/

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.closest(
                "#attendanceButton"
            )
        ) {
            return;
        }

        startWeddingMusic();

    },
    {
        once: true
    }
);


document.addEventListener(
    "touchstart",
    function(event) {

        if (
            event.target.closest(
                "#attendanceButton"
            )
        ) {
            return;
        }

        startWeddingMusic();

    },
    {
        once: true,
        passive: true
    }
);


/*
    تشغيل عند بداية الـ Scroll
*/

window.addEventListener(
    "scroll",
    function() {

        startWeddingMusic();

    },
    {
        once: true,
        passive: true
    }
);



/* =====================================================
   COUNTDOWN
===================================================== */


/*
    22 September 2026
    9:00 PM
*/

const weddingDate =
    new Date(
        "September 22, 2026 21:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById(
            "days"
        ).textContent = "00";


        document.getElementById(
            "hours"
        ).textContent = "00";


        document.getElementById(
            "minutes"
        ).textContent = "00";


        document.getElementById(
            "seconds"
        ).textContent = "00";


        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2, "0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   RSVP
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
   CELEBRATION EXPLOSION
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
        "✦",
        "✨"

    ];


    const numberOfItems = 75;


    for (
        let i = 0;
        i < numberOfItems;
        i++
    ) {


        const item =
            document.createElement(
                "div"
            );


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
            30 +
            Math.random() * 40;


        const startY =
            48 +
            Math.random() * 12;


        item.style.left =
            startX + "%";


        item.style.top =
            startY + "%";


        /*
            اتجاه الانفجار
        */

        const x =
            Math.random() *
            700 -
            350;


        const y =
            Math.random() *
            650 -
            400;


        item.style.setProperty(
            "--x",
            `${x}px`
        );


        item.style.setProperty(
            "--y",
            `${y}px`
        );


        /*
            حجم عشوائي
        */

        const size =
            16 +
            Math.random() * 25;


        item.style.fontSize =
            `${size}px`;


        /*
            تأخير بسيط
        */

        item.style.animationDelay =
            `${Math.random() * 0.2}s`;


        celebrationContainer.appendChild(
            item
        );


        setTimeout(
            function() {

                item.remove();

            },
            2400
        );

    }

}



/* =====================================================
   OPEN MODAL
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
   CLOSE MODAL
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
   RSVP BUTTON
===================================================== */

if (attendanceButton) {

    attendanceButton.addEventListener(
        "click",
        function() {


            /*
                مهم:
                لا نشغل الموسيقى هنا.
            */


            /*
                انفجار القلوب والورود
            */

            createCelebration();


            /*
                ظهور الصندوق بعد الانفجار
            */

            setTimeout(
                function() {

                    openAttendanceModal();

                },
                1200
            );

        }
    );

}



/* =====================================================
   CLOSE BUTTON
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
   CLICK OUTSIDE MODAL
===================================================== */

if (attendanceModal) {

    attendanceModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                attendanceModal
            ) {

                closeAttendanceModal();

            }

        }
    );

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeAttendanceModal();

        }

    }
);



/* =====================================================
   IMAGE CHECK
===================================================== */

const mainImage =
    document.querySelector(
        ".photo-frame img"
    );


if (mainImage) {

    mainImage.addEventListener(
        "error",
        function() {

            console.log(
                "Image not found: her-photo.jpg"
            );

        }
    );

}



/* =====================================================
   END
===================================================== */
