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
let inpQuiz = document.querySelector('#inpQuiz');
let result1 = document.querySelector('#result');

let balls = 0
let ballsFake = 0

const fullDashArray = 283;
const warning = 10;
const alert = 5;

const timeLimit = 420;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

numberQuest.innerHTML = "Вопрос: " +
    number + " / 5";

test0();

function test0() {
    if (number == 1) {
        choiceRadio.style.display = ''
        choiceText.style.display = 'none'
    }
}


function test1() {
    if (html__radio.checked === true) {
        balls += 1
        ballsFake += 3
        console.log('selected')
        localStorage.setItem('test', balls);
    } else {}
}

function test2() {
    if (css.checked === true) {
        balls += 1
        console.log('selected')
        ballsFake += 4
    } else {}
}

function test3() {
    if (inpQuiz.value == 'import') {
        balls += 1
        ballsFake += 3
    } else {}
}

function test4() {
    if (inpQuiz.value == 'Нет') {
        balls += 1
        ballsFake += 3
    } else if (inpQuiz.value == 'нет') {
        balls += 1
        ballsFake += 3
    } else {}
}

function test5() {
    if (inpQuiz.value == 'Dart') {
        balls += 1
        ballsFake += 3
    } else {}
}



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


answer__btn.addEventListener("click", function() {
    number = number + 1
    numberQuest.innerHTML = "Вопрос: " +
        number + " / 5 "
    if (number > 5) {
        answer__btn.style.display = 'none'
    }

    if (number == 2) {
        test1();
        questP.innerHTML = 'Блягодаря какой библиотеке возможно создать Telegram боты на Python?'
        labelHtml.innerHTML = 'SQLite'
        labelCss.innerHTML = 'aiogram'
        labelJs.innerHTML = 'Kivy'
        labelVue.innerHTML = 'Flask'
        choiceRadio.style.display = ''
        html__radio.checked = false
        css__radio.checked = false
        js__radio.checked = false
        vue__radio.checked = false
    }
    if (number == 3) {
        test2();
        choiceRadio.style.display = 'none'
        choiceText.style.display = ''
        questP.innerHTML = 'С помощью чего мы в начале кода Python импортируем в проекте библиотеку??<br>.... tkinter'
    }
    if (number == 4) {
        test3();
        questP.innerHTML = 'Можно ли в Python писать сайты без библиотеки??<br>Да/Нет'
        inpQuiz.value = ''
    }
    if (number == 5) {
        test4();
        questP.innerHTML = 'Какой язык создал Google для того чтоб писать красивые интерфейсы на Python??<br>'
        inpQuiz.value = ''
    }
    if (number == 6) {
        test5();
        outQuiz.style.display = 'block'
        numberQuest.style.display = 'none'
        questBlock.style.display = 'none'
        inpQuiz.value = ''
        onTimesUp();
        if (balls == 5) {
            balls = 5
        }

        if (balls == 4) {
            balls = 4
        }

        if (balls == 3) {
            balls = 3
        }

        if (balls <= 2) {
            balls = 2
        }
    }

    test0();
})


btnLocationURL.addEventListener('click', function() {
    btnLocationURL.style.display = 'none'
    result1.style.display = 'block'
    result1.innerHTML = "У вас баллов: " +
        ballsFake + "<br>Ваша оценка: " + balls

})

btnLocationURL2.addEventListener('click', function() {
    btnLocationURL2.style.display = 'none'
    result1.style.display = 'block'
    result1.innerHTML = "У вас баллов: " +
        ballsFake + "<br>Ваша оценка: " + balls
})