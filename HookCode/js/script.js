let html__radio = document.querySelector('#html');
let css__radio = document.querySelector('#css');
let js__radio = document.querySelector('#js');
let vue__radio = document.querySelector('#vue');
let outTime = document.querySelector('#outTime')
var timerInput = document.getElementById("time");
let timerre = document.querySelector(".base-timer__label");
let btnLocationURL = document.querySelector('#btnLocationURL');
let btnLocationURL2 = document.querySelector('#btnLocationURL2');
let answer__btn = document.querySelector("#answer");
let timerShow = document.getElementById(".time");
let questBlock = document.querySelector("#questBlock")
let numberQuest = document.querySelector('#numberQuest');
let number = 1;
let outQuiz = document.querySelector('#outQuiz')
let styleTime = document.querySelector('.header .time');
let labelHtml = document.querySelector('#labelHtml');
let labelCss = document.querySelector('#labelCss');
let labeljs = document.querySelector('#labeljs');
let labelVue = document.querySelector('#labelVue');
let questP = document.querySelector('#questP');
let choiceRadio = document.querySelector('.choice__option__radio');
let choiceText = document.querySelector('.choice__option__text');
let inpQuiz = document.querySelector('#inpQuiz')
const fullDashArray = 283;
const warning = 10;
const alert = 5;

const timeLimit = 420;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

numberQuest.innerHTML = "Вопрос: " +
    number + " / 5"

test0();

function test0() {
    if (number == 1) {
        choiceRadio.style.display = ''
        choiceText.style.display = 'none'
    }
}


function test1() {
    if (css__radio.checked === true) {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}

function test2() {
    if (js__radio.checked === true) {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}

function test3() {
    if (inpQuiz.value == 'npm') {
        console.log("да")
    } else if (inpQuiz.value == 'NPM') {
        console.log("да")
    } else if (inpQuiz.value == 'Npm') {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}

function test4() {
    if (inpQuiz.value == 'scss') {
        console.log("да")
    } else if (inpQuiz.value == 'SCSS') {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}

function test5() {
    if (inpQuiz.value == 'Нет') {
        console.log("да")
    } else if (inpQuiz.value == 'нет') {
        console.log("да")
    } else {
        console.log('неправильно')
    }
}



answer__btn.addEventListener("click", function() {
    number = number + 1
    numberQuest.innerHTML = "Вопрос: " +
        number + " / 5 "
    if (number > 5) {
        answer__btn.style.display = 'none'
    }

    if (number == 2) {
        test1();
        questP.innerHTML = 'С помощью какого фрейворка можно писать backend и frontend? '
        labelHtml.innerHTML = 'JS'
        labelCss.innerHTML = 'React'
        labelJs.innerHTML = 'Next.js'
        labelVue.innerHTML = 'tmi.js'
        choiceRadio.style.display = ''
    }
    if (number == 3) {
        test2();
        choiceRadio.style.display = 'none'
        choiceText.style.display = ''
        questP.innerHTML = 'С помощью чего можно установить Vue?<br>.... install vue'

    }
    if (number == 4) {
        test3();
        questP.innerHTML = 'Как называется популярный препроцессор для CSS?<br>S...'
        inpQuiz.value = ''
    }
    if (number == 5) {
        test4();
        questP.innerHTML = 'HTML - это язык програмиирования?<br>Да/Нет'
        inpQuiz.value = ''


    }
    if (number == 6) {
        test5();
        outQuiz.style.display = 'block'
        numberQuest.style.display = 'none'
        questBlock.style.display = 'none'
    }

    test0();

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

    if (time == 90) {
        styleTime.style.color = 'orange'
    }

    if (time == 25) {
        styleTime.style.color = 'red'
    }

    return `${minutes}:${seconds}`;
}

btnLocationURL.addEventListener('click', function() {
    window.location = 'result.html'

})

btnLocationURL2.addEventListener('click', function() {
    window.location = 'wesult.html'

})