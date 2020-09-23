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
var bar = document.querySelector("#topBar");
var container;

// button variables
var beginBtn = document.querySelector("#btnBegin");
var initialBtn = document.querySelector("#btnInitial");
var goBackBtn = document.querySelector("#goBack");
var clearHsBtn = document.querySelector("#clearHs");
var navHs = document.querySelector("#navViewHs");

// number variables
var questionNumber = 0;
var score;

// quiz question variables
var answers = {"qu1": "this",
"qu2": "that",
"qu3": "or",
"qu4": "perhaps",
"qu5": "both"};

// highscore variable
var highscoresArray = [];

// EVENT LISTENERS
beginBtn.addEventListener("click",beginTimer);
quests.addEventListener("click",question);
initialBtn.addEventListener("click",addInitials);
goBackBtn.addEventListener("click",back);
clearHsBtn.addEventListener("click",clearH);
navHs.addEventListener("click",view);


// FUNCTIONS
// ===========================================================
// begin timer function
function beginTimer(event) {
    event.preventDefault();

    var secondsLeft = document.querySelector("#timeLeft");
    var seconds = 100;

    beginQuiz.setAttribute("style", "display: none");
    qu1.setAttribute("style", "display: block");
    score = 0;
    questionNumber = 0;

    var timeInterval = setInterval(function() {
        seconds--;
        secondsLeft.textContent = seconds;

        if (seconds === 0 || initial.getAttribute("style")==="display: block") {
            clearInterval(timeInterval);
            
        }
    },1000);
};

// questions function
function question(event) {
    event.preventDefault();
    var parent = event.target.parentElement.id;
    container = event.currentTarget.children;

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

        container[questionNumber].setAttribute("style","display: none");
        questionNumber++
        container[questionNumber].setAttribute("style","display: block");

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

        container[questionNumber].setAttribute("style","display: none");
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
    highscoresArray.push({entry:name+' - '+score.toString()});

    var li = document.createElement("li");
    li.textContent = name+' - '+score.toString();
    scoreList.append(li);

    initial.setAttribute("style","display: none");
    bar.setAttribute("style","visibility: hidden");
    highScore.setAttribute("style","display: block");
}

// go back function
function back(event) {
    event.preventDefault();
    highScore.setAttribute("style", "display: none");
    beginQuiz.setAttribute("style", "display: block");
    bar.setAttribute("style","visibility: inline");
}

// clear highscores function
function clearH(event) {
    event.preventDefault();
    scoreList.innerHTML = '';
    bar.setAttribute("style","visibility: inline");
}

// view highscores function
function view(event) {
    console.log("hello");
    if (beginQuiz.getAttribute("style") === "display: block") {
        beginQuiz.setAttribute("style","display: none");
        bar.setAttribute("style","visibility: hidden");
        highScore.setAttribute("style","display: block");
    } else {
        container[questionNumber].setAttribute("style","display: none");
        initial.setAttribute("style","display: none");
        bar.setAttribute("style","visibility: hidden");
        highScore.setAttribute("style","display: block");
    }
}
