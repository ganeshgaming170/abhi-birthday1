/* =========================================
   BIRTHDAY WEBSITE
========================================= */


/* =========================================
   PASSWORD
========================================= */

/*
    CHANGE PASSWORD HERE
*/

const SECRET_PASSWORD = "abhigna";


const passwordScreen =
    document.getElementById(
        "passwordScreen"
    );

const passwordInput =
    document.getElementById(
        "passwordInput"
    );

const unlockBtn =
    document.getElementById(
        "unlockBtn"
    );

const passwordError =
    document.getElementById(
        "passwordError"
    );


function unlockWebsite() {

    const entered =
        passwordInput.value
            .trim()
            .toLowerCase();


    if (
        entered ===
        SECRET_PASSWORD
    ) {

        passwordScreen.classList.add(
            "hide"
        );


        setTimeout(() => {

            passwordScreen.style.display =
                "none";


            goTo("intro");


        }, 900);


    } else {

        passwordInput.value = "";

        passwordError.classList.add(
            "show"
        );


        setTimeout(() => {

            passwordError.classList.remove(
                "show"
            );

        }, 1500);

    }

}


unlockBtn.addEventListener(
    "click",
    unlockWebsite
);


passwordInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            unlockWebsite();

        }

    }
);


/* =========================================
   SCENES
========================================= */

const scenes =
    document.querySelectorAll(
        ".scene"
    );


function goTo(id) {

    scenes.forEach(scene => {

        scene.classList.remove(
            "active"
        );

    });


    const target =
        document.getElementById(id);


    if (target) {

        target.classList.add(
            "active"
        );

    }

}


/* =========================================
   CREATE STARS
========================================= */

const stars =
    document.getElementById(
        "stars"
    );


for (
    let i = 0;
    i < 100;
    i++
) {

    const star =
        document.createElement(
            "div"
        );


    star.className =
        "star";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.animationDuration =
        (
            Math.random() * 8 + 5
        ) + "s";


    star.style.animationDelay =
        Math.random() * 8 + "s";


    stars.appendChild(
        star
    );

}


/* =========================================
   TYPING EFFECT
========================================= */

const typing =
    document.getElementById(
        "typing"
    );


const messages = [

    "this is for someone special...",

    "someone who deserves a beautiful day...",

    "someone named Abhigna ❤️"

];


let messageIndex = 0;

let characterIndex = 0;


function typeMessage() {

    if (
        messageIndex >=
        messages.length
    ) {

        return;

    }


    const currentMessage =
        messages[
            messageIndex
        ];


    if (
        characterIndex <
        currentMessage.length
    ) {

        typing.textContent +=
            currentMessage.charAt(
                characterIndex
            );


        characterIndex++;


        setTimeout(
            typeMessage,
            55
        );

    } else {

        setTimeout(() => {

            typing.textContent = "";

            characterIndex = 0;

            messageIndex++;

            typeMessage();

        }, 900);

    }

}


setTimeout(
    typeMessage,
    700
);


/* =========================================
   START REEL
========================================= */

const startBtn =
    document.getElementById(
        "startBtn"
    );


startBtn.addEventListener(
    "click",
    () => {

        goTo(
            "nameScene"
        );


        setTimeout(() => {

            goTo(
                "messageScene"
            );

        }, 3000);


        setTimeout(() => {

            goTo(
                "wishScene"
            );

        }, 6500);


        setTimeout(() => {

            goTo(
                "countdownScene"
            );

            startCountdown();

        }, 10000);

    }
);


/* =========================================
   COUNTDOWN
========================================= */

let countdownStarted = false;


function startCountdown() {

    if (
        countdownStarted
    ) {

        return;

    }


    countdownStarted = true;


    const counter =
        document.getElementById(
            "countdown"
        );


    let number = 3;


    counter.textContent =
        number;


    const interval =
        setInterval(() => {

            number--;


            if (
                number <= 0
            ) {

                clearInterval(
                    interval
                );


                goTo(
                    "cakeScene"
                );


                return;

            }


            counter.animate(

                [

                    {
                        opacity: 0,

                        transform:
                            "scale(1.5)"
                    },

                    {
                        opacity: 1,

                        transform:
                            "scale(1)"
                    }

                ],

                {
                    duration: 500
                }

            );


            counter.textContent =
                number;


        }, 1000);

}


/* =========================================
   BLOW CANDLES
========================================= */

const blowBtn =
    document.getElementById(
        "blowBtn"
    );


blowBtn.addEventListener(
    "click",
    () => {

        const flames =
            document.querySelectorAll(
                ".flame"
            );


        flames.forEach(flame => {

            flame.animate(

                [

                    {
                        transform:
                            "scaleX(1)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translateX(15px) scaleX(.1)",

                        opacity: 0
                    }

                ],

                {
                    duration: 500,

                    fill: "forwards"
                }

            );

        });


        blowBtn.style.display =
            "none";


        document.getElementById(
            "blowMessage"
        ).textContent =
            "YOUR WISH IS ON ITS WAY ❤️";


        setTimeout(() => {

            goTo(
                "finalScene"
            );


            startFireworks();

            createConfetti();

        }, 1200);

    }
);


/* =========================================
   FIREWORKS
========================================= */

const canvas =
    document.getElementById(
        "fireworks"
    );


const ctx =
    canvas.getContext(
        "2d"
    );


let fireworks = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


function createFirework() {

    const x =
        Math.random() *
        canvas.width;


    const y =
        Math.random() *
        canvas.height *
        .55;


    const colors = [

        "#d9ad68",

        "#ffffff",

        "#ff8ca8",

        "#ffd166",

        "#f4d39b"

    ];


    const color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const angle =
            (Math.PI * 2 / 55) * i;


        const speed =
            Math.random() * 5 + 2;


        fireworks.push({

            x: x,

            y: y,

            vx:
                Math.cos(angle) *
                speed,

            vy:
                Math.sin(angle) *
                speed,

            life: 1,

            color: color

        });

    }

}


function animateFireworks() {

    ctx.fillStyle =
        "rgba(0,0,0,.15)";


    ctx.fillRect(

        0,
        0,

        canvas.width,
        canvas.height

    );


    fireworks.forEach(
        (particle, index) => {

            particle.x +=
                particle.vx;


            particle.y +=
                particle.vy;


            particle.vy +=
                .035;


            particle.life -=
                .012;


            ctx.beginPath();


            ctx.arc(

                particle.x,

                particle.y,

                1.8,

                0,

                Math.PI * 2

            );


            ctx.fillStyle =
                particle.color;


            ctx.globalAlpha =
                Math.max(
                    particle.life,
                    0
                );


            ctx.fill();


            if (
                particle.life <= 0
            ) {

                fireworks.splice(
                    index,
                    1
                );

            }

        }
    );


    ctx.globalAlpha = 1;


    requestAnimationFrame(
        animateFireworks
    );

}


function startFireworks() {

    animateFireworks();


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createFirework,
            i * 400
        );

    }

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    const colors = [

        "#d9ad68",

        "#ffffff",

        "#ff8ca8",

        "#ffd166",

        "#c77dff"

    ];


    for (
        let i = 0;
        i < 180;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        const size =
            Math.random() * 7 + 3;


        piece.style.position =
            "absolute";


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.8 + "px";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "%";


        piece.style.top =
            "-20px";


        container.appendChild(
            piece
        );


        const duration =
            Math.random() * 3 + 3;


        piece.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(
                            ${Math.random() * 1000}deg
                         )`,

                    opacity: .8
                }

            ],

            {

                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        setTimeout(() => {

            piece.remove();

        }, duration * 1000);

    }

}


/* =========================================
   SWIPE UP
========================================= */

let touchStartY = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        const touchEndY =
            event.changedTouches[0]
                .clientY;


        const difference =
            touchStartY -
            touchEndY;


        if (
            difference > 70
        ) {

            nextScene();

        }

    },
    {
        passive: true
    }
);


function nextScene() {

    const active =
        document.querySelector(
            ".scene.active"
        );


    const index =
        [...scenes].indexOf(
            active
        );


    if (
        index >= 0 &&
        index < scenes.length - 1
    ) {

        goTo(
            scenes[index + 1].id
        );

    }

}
