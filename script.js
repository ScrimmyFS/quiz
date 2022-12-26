const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const containerel = document.querySelector('.container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById('time')
const message = document.getElementById('message')
const form = document.getElementById('form')
const Highscoreform = document.getElementById("Highscoreform")
const formbutton = document.getElementById('Formbutton')
const forminput = document.getElementById('initials')
let CurrentQuestion = 0
let Highscore = 0

var questions = [
    {
        question: 'What is used to style your page?',
        answer: [
            { text: 'CSS', correct: true },
            { text: 'Java', correct: false },
            { text: 'HTML', correct: false },
            { text: 'Paint', correct: false },
        ]
    },
    {
        question: 'What does Java do a webpage?',
        answer: [
            { text: 'gives the page writing', correct: false },
            { text: 'give the page accesibilty', correct: true },
            { text: 'Makes the page look pretty', correct: false },
            { text: 'Gives the page sizing', correct: false },
        ]
    },
    {
        question: 'What is going on?',
        answer: [
            { text: 'I def know', correct: false },
            { text: 'I reaaaaallly know', correct: false },
            { text: 'I HAVE NO IDEA', correct: true },
            { text: 'I know it all', correct: false },
        ]
    }
]

startButton.addEventListener('click', startGame)
formbutton.addEventListener('click', Score)

answerButtonsElement.addEventListener("click", function (event) {

    event.preventDefault()


    var element = event.target

    console.log(event)

    if (element.matches('.answer')) {


        checkanswer(element.textContent)

        renderquestion()
    }
})

var timer;
var secondsleft = 100;

function startTimer() {

    timer = setInterval(function () {
        secondsleft--;
        timerElement.textContent = "Time: " + secondsleft;

        if (secondsleft <= 0 || CurrentQuestion === questions.length) {
            clearInterval(timer)
        }

    }, 1000);
}

function Wrongquestion() {

    secondsleft -= 10;
    message.textContent = 'WRONG!'


}

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

    startTimer();
    renderquestion();


}

function renderquestion() {


    if (CurrentQuestion < questions.length) {
        questionElement.textContent = questions[CurrentQuestion].question
    }


    if (CurrentQuestion < questions.length) {
        for (var i = 0; i < questions[CurrentQuestion].answer.length; i++) {
            answerButtonsElement.children[i].textContent = questions[CurrentQuestion].answer[i].text
        }
    }

}

function checkanswer(element) {

    var q = questions[CurrentQuestion]

    if (secondsleft <= 0 || CurrentQuestion === questions.length) {
        Renderhighscoreform();
    }
    else {

        for (var i = 0; i < q.answer.length; i++) {
            if (q.answer[i].text == element && !q.answer[i].correct) {
                Wrongquestion();
            }
        }


        for (var i = 0; i < q.answer.length; i++) {
            if (q.answer[i].text == element && q.answer[i].correct) {
                message.textContent = "CORRECTOMUNDO"
            }
        }
        CurrentQuestion++
        renderquestion();
    }

}


function Renderhighscoreform() {

    containerel.classList.add("hide")
    questionContainerElement.classList.add('hide')
    Highscoreform.classList.remove("hide")
    Highscoreform.style.display = "flex"
    Highscoreform.style.alignItems = "center"
    Highscoreform.style.justifyContent = "center"
   

}
    function Score(event) {

        event.preventDefault()
        
        var initials = forminput.value
        var currentscore = JSON.parse(window.localStorage.getItem("High-scores"))||[]

        var newscore = {
            initials: initials, 
            score: secondsleft
        }
        console.log(newscore)
        currentscore.push(newscore)
        localStorage.setItem("High-scores", JSON.stringify(currentscore))

        window.location.href = "highscore.html"
    

    }















