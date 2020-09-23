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
var secondsLeft = document.querySelector("#timeLeft");
var questionNumber = 0;
var score;
var seconds;

// quiz question variables
var answers = {"qu1": "Uruguay",
"qu2": "There is no offical field size - soccer is anarchy",
"qu3": "Pakistan",
"qu4": "11",
"qu5": "Messi"};

// EVENT LISTENERS
beginBtn.addEventListener("click",beginTimer);
quests.addEventListener("click",question);
initialBtn.addEventListener("click",addInitials);
goBackBtn.addEventListener("click",back);
clearHsBtn.addEventListener("click",clearH);
navHs.addEventListener("click",view);
window.addEventListener("load",loadHs);

// FUNCTIONS
// ===========================================================
// begin timer function
function beginTimer(event) {
    event.preventDefault();

    seconds = 60; // assign initial value, reset time

    beginQuiz.setAttribute("style","display: none"); 
    qu1.setAttribute("style","display: block"); // change displayed card to first question
    score = 0; // assign initial value, reset score
    questionNumber = 0; // assign initial value, reset question no.
    container = quests.children; // assign initial value, reset

    var timeInterval = setInterval(function() {
        seconds--;
        if (seconds < 0) { // prevent timer from showing negative time due to point deductions
            secondsLeft.textContent = 0;
        } else {
            secondsLeft.textContent = seconds;
        }

        if (seconds <= 0) {
            clearInterval(timeInterval);
            feedB.setAttribute("style","visibility: visible");
            feedB.innerHTML = "<hr style='border:1px solid white'>"+ "You ran out of time!";
            final.textContent = score;
            container[questionNumber].setAttribute("style","display: none"); // if quiz is unfinished the current question card is no longer displayed, and replaced with the enter initials card
            highScore.setAttribute("style","display: none"); 
            initial.setAttribute("style","display: block");
            feedback(); // displays feedback text for limited time
        } else if (initial.getAttribute("style")==="display: block" || highScore.getAttribute("style")==="display: block") { // if user chooses to view highscore mid-quiz, the timer restarts
            clearInterval(timeInterval);
        }
    },1000);
};

// questions function
function question(event) {
    event.preventDefault();
    var parent = event.target.parentElement.id;
    container = event.currentTarget.children;

    if (event.target.matches("button") && questionNumber < (container.length)-1) { // what to do if button is clicked and it's' not the last question
        if (event.target.textContent === answers[parent]) { // what to do if answer is correct
            feedB.setAttribute("style","visibility: visible");
            feedB.innerHTML = "<hr style='border:1px solid white'>"+ "Correct!";
            score++
        }
        else { // what to do if answer is incorrect
            seconds -= 10;
            feedB.setAttribute("style","visibility: visible");
            feedB.innerHTML = "<hr style='border:1px solid white'>"+ "Better luck next time!";
        }

        container[questionNumber].setAttribute("style","display: none");
        questionNumber++
        container[questionNumber].setAttribute("style","display: block"); // change display to next question

    } else if (event.target.matches("button")) { // what to do if button is clicked and it is the last question
        if (event.target.textContent === answers[parent]) {
            feedB.setAttribute("style","visibility: visible");
            feedB.innerHTML = "<hr style='border:1px solid white'>"+ "Correct!";
            score++
        }
        else {
            seconds -=10;
            feedB.setAttribute("style","visibility: visible");
            feedB.innerHTML = "<hr style='border:1px solid white'>"+ "Better luck next time!";
        }

        container[questionNumber].setAttribute("style","display: none");
        initial.setAttribute("style","display: block"); // change display to enter initials card
        final.textContent = score;
    }

    feedback(); // displays whether question is correct or incorrect for limited time
}
    
// add initials function
function addInitials(event) {
    event.preventDefault();
    var name = initialInp.value;
    localStorage.setItem(name, name+' - '+score.toString()); // save input data to local storage

    var li = document.createElement("li");
    li.textContent = name+' - '+score.toString();
    li.setAttribute("class","list-group-item list-group-item-seconday");
    li.setAttribute("style","display:list-item");
    scoreList.append(li); // append new input to the list so it displays on site

    initialInp.value=''; // clear input area if user wants to play again

    initial.setAttribute("style","display: none");
    bar.setAttribute("style","visibility: hidden");
    highScore.setAttribute("style","display: block"); // changes display card to highscores card
}

// go back function
function back(event) {
    event.preventDefault();
    highScore.setAttribute("style","display: none");
    beginQuiz.setAttribute("style","display: block"); // change display back to intro card
    bar.setAttribute("style","visibility: inline");
    seconds = 0; // clean timer, resets game if user chooses to view highscores mid quiz
    secondsLeft.textContent = seconds;
}

// clear highscores function
function clearH(event) {
    event.preventDefault();
    localStorage.clear(); // clears data from local storage
    scoreList.innerHTML = ''; // clears data in ordered list
}

// view highscores function
function view(event) {
    if (beginQuiz.getAttribute("style") ==="display: block") { // which cards to display/hide if highscores link clicked on home page
        beginQuiz.setAttribute("style","display: none");
        bar.setAttribute("style","visibility: hidden");
        highScore.setAttribute("style","display: block");
    } else {
        container[questionNumber].setAttribute("style","display: none"); // which cards to display/hide if highscores link clicked mid-quiz or on the input initials card
        initial.setAttribute("style","display: none");
        bar.setAttribute("style","visibility: hidden");
        highScore.setAttribute("style","display: block");
    }
}

// feedback function
function feedback() {
    if (seconds <= 1) {
        setTimeout(function() {
            feedB.setAttribute("style","visibility: hidden"); // if time less than 1 second then the display of correct/incorrect will run over the display showing time is up, which impacts the visibility duration of the time is up display text
        },3000);
    } else {
        setTimeout(function() {
            feedB.setAttribute("style","visibility: hidden");
        },1000);
    }
    
}

// page refresh load highscores from localStorage function
// append all highscores from local storage when page is refreshed
function loadHs() {
    for (var i = 0; i < localStorage.length; i++) {
        var li = document.createElement("li");
        li.textContent = localStorage.getItem(localStorage.key(i));
        li.setAttribute("class","list-group-item list-group-item-seconday");
        li.setAttribute("style","display:list-item");
        scoreList.append(li);
    }
}