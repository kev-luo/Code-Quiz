// VARIABLES
// ===========================================================
// card variables
var beginQuiz = document.querySelector("#quizBegin");
var quests = document.querySelector("#questions");
var qu1 = document.querySelector("#q1");
var qu2 = document.querySelector("#q2");
var qu3 = document.querySelector("#q3");
var qu4 = document.querySelector("#q4");
var qu5 = document.querySelector("#q5");
var feedB = document.querySelector("#feedback");
var initial = document.querySelector("#initials");
var final = document.querySelector("#finalScore");
var initialInp = document.querySelector("#initialsInp");
var highScore = document.querySelector("#highScores");
var scoreList = document.querySelector("#highS");

// button variables
var beginBtn = document.querySelector("#btnBegin");
var initialBtn = document.querySelector("#btnInitial");

// number variables
var secondsLeft = document.querySelector("#timeLeft");
var seconds = 100;
var questionNumber = 0;
var score = 0;

// quiz question variables
var answers = {"qu1": "this",
"qu2": "that",
"qu3": "or",
"qu4": "perhaps",
"qu5": "both"};

// highscore variable
var highscores = [];

// EVENT LISTENERS
beginBtn.addEventListener("click",beginTimer);
quests.addEventListener("click",question);
initialBtn.addEventListener("click",addInitials);

// FUNCTIONS
// ===========================================================
// begin timer function
function beginTimer(event) {
    event.preventDefault();
    beginQuiz.setAttribute("style", "display: none");
    qu1.setAttribute("style", "display: block");
    score = 0;

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
    var container = event.currentTarget.children;

    if (event.target.matches("button") && questionNumber < (container.length)-1) {
        if (event.target.textContent === answers[parent]) {
            feedB.innerHTML = "<hr>"+ "Correct!";
            feedB.setAttribute("style","visibility: visible");
            score++
        }
        else {
            feedB.innerHTML = "<hr>"+ "Better luck next time!";
            feedB.setAttribute("style","visibility: visible");
        }

        container[questionNumber].setAttribute("style","display:none");
        questionNumber++
        container[questionNumber].setAttribute("style","display:block");

    } else if (event.target.matches("button")) {
        if (event.target.textContent === answers[parent]) {
            feedB.innerHTML = "<hr>"+ "Correct!";
            feedB.setAttribute("style","visibility: visible");
            score++
        }
        else {
            feedB.innerHTML = "<hr>"+ "Better luck next time!";
            feedB.setAttribute("style","visibility: visible");
        }

        container[questionNumber].setAttribute("style","display:none");
        initial.setAttribute("style","display: block");
        final.textContent = score;
    }

    setTimeout(function() {
        feedB.setAttribute("style","visibility: hidden");
    },1000);
}
    
// add initials function
function addInitials(event) {
    event.preventDefault();
    var name = initialInp.value;
    highscores.push({entry:name+' - '+score.toString()});

    var li = document.createElement("li");
    li.textContent = name+' - '+score.toString();
    scoreList.append(li);

    initial.setAttribute("style","display: none");
    highScore.setAttribute("style","display: block");
}

// highscores functions


