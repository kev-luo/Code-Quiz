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

// quiz question variables
var answers = {"qu1": "this",
"qu2": "that",
"qu3": "or",
"qu4": "perhaps",
"qu5": "both"};

// EVENT LISTENERS
beginBtn.addEventListener("click",beginTimer);
qu1.addEventListener("click",question);


// FUNCTIONS
// ===========================================================
// begin timer function
function beginTimer(event) {
    event.preventDefault();
    beginQuiz.setAttribute("style", "display: none");
    qu1.setAttribute("style", "display: block");

    var timeInterval = setInterval(function() {
        seconds--;
        secondsLeft.textContent = seconds;

        if (seconds === 0) {
            clearInterval(timeInterval);
        }
    },1000);
};

// questions function
function question(event) {
    event.preventDefault();
    var parent = event.target.parentElement.id;

    if (event.target.matches("button")) {
        if (event.target.textContent === answers[event.target.parentElement.id]) {
            var ansCheck = document.createElement("p");
            ansCheck.innerHTML = "<hr>"+ "Correct!";
            event.target.parentElement.append(ansCheck);
        }
        else {
            var ansCheck = document.createElement("p");
            ansCheck.innerHTML = "<hr>"+ "Better luck next time!";
            event.target.parentElement.append(ansCheck);
        }
    }
}