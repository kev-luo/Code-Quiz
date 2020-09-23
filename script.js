// VARIABLES
// ===========================================================
// card variables
var beginQuiz = document.querySelector("#quizBegin");
var qu1 = document.querySelector("#q1");
var qu2 = document.querySelector("#q2");
var qu3 = document.querySelector("#q3");
var qu4 = document.querySelector("#q4");
var qu5 = document.querySelector("#q5");

// button variables
var beginBtn = document.querySelector("#btnBegin");

// number variables
var secondsLeft = document.querySelector("#timeLeft");
var seconds = 100;
var score = 0;

// EVENT LISTENERS
beginBtn.addEventListener("click",beginTimer);



// FUNCTIONS
// ===========================================================
// begin timer function
function beginTimer(event) {
    event.preventDefault();
    beginQuiz.setAttribute("style", "display: none");

    var timeInterval = setInterval(function() {
        secondsLeft.textContent = seconds
        seconds--;

        if (seconds === 0) {
            clearInterval(timeInterval);
        }
    },1000);
}