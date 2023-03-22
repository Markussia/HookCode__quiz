let html__radio = document.querySelector('#html');
let css__radio = document.querySelector('#css');
let js__radio = document.querySelector('#js');
let vue__radio = document.querySelector('#vue');
let outTime = document.querySelector('#outTime')
var timerInput = document.getElementById("time");
let timerre = document.querySelector(".base-timer__label");
let btnLocationURL = document.querySelector('#btnLocationURL');
let answer__btn = document.querySelector("#answer");
let timerShow = document.getElementById(".time");
let questBlock = document.querySelector("#questBlock")
let numberQuest = document.querySelector('#numberQuest');
let number = 1

const fullDashArray = 283;
const warning = 10;
const alert = 5;

const timeLimit = 1800;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

numberQuest.innerHTML = "Вопрос: " +
    number + " / 10 "


function test() {
    if (css__radio.checked === true) {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}



answer__btn.addEventListener("click", function() {
    number = number + 1
    numberQuest.innerHTML = "Вопрос: " +
        number + " / 10 "
    if (number > 10) {
        answer__btn.style.display = 'none'
    }

    test()

    if (number == 1) {

    }

    if (number == 2) {

    }
    if (number == 3) {
        console.log('3')
    }
    if (number == 4) {
        console.log('4')
    }
    if (number == 5) {
        console.log('5')
    }

})




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
        timeLeft = timeLimit - timePassed;
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

    if (time == 0) {
        outTime.style.display = 'block'
        questBlock.style.display = 'none'
    }

    return `${minutes}:${seconds}`;
}

btnLocationURL.addEventListener('click', function() {
    window.location = 'result.html'

})