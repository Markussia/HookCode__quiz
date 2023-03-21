let html__radio = document.querySelector('#html');
let css__radio = document.querySelector('#css');
let js__radio = document.querySelector('#js');
let vue__radio = document.querySelector('#vue');
let outTime = document.querySelector('#outTime')
var timerInput = document.getElementById("time");
let timerre = document.querySelector(".base-timer");
let btnLocationURL = document.querySelector('#btnLocationURL');

// let all__radio = document.querySelector("input")

let answer__btn = document.querySelector("#answer");

let timerShow = document.getElementById(".time");

function test() {
    if (css__radio.checked === true) {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}

answer__btn.addEventListener("click", function() {
    test()
})


const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 5;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.querySelector("#time").innerHTML = `
<div class="base-timer">
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
    clearInterval(timerInterval);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        );

        if (timeLeft === 0) {
            onTimesUp();
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;

    }



    if (seconds == 0) {
        outTime.style.display = 'block'
    }

    return `${minutes}:${seconds}`;
}

btnLocationURL.addEventListener('click', function() {
    window.location = 'google.com'
})