# Soccer-Quiz

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/kev-luo/password-generator)
![GitHub language count](https://img.shields.io/github/languages/count/kev-luo/password-generator)

## Description

In the assignments up to this point, we've mainly been manipulating the DOM (Document Object Model) by hard-coding HTML. This assignment provided deeper understanding of how to dynamically update the DOM through the use of JavaScript event listeners. By using event listeners, the content displayed on a website is automatically updated based on a specified trigger. Examples of how this works include the buttons used to trigger the starting of a timer, and those used to alter HTML display attributes. 

The benefit of dynamically updated sites is the improved user experience - websites can now respond/change based on what the user chooses to do while visiting the site. With an enhanced user experience, it follows that re-visits and new traffic would increase in response. Through this assignment I was able to get a glimpse of how complex web development can be. Ensuring that all dynamically updated elements function as expected requires lots of experimentation with the code to minimize bugs/errors.  

## Table of Contents
* Process
* Usage
* Credits
* Contributing
* License

## Process
**HTML**

The site I built can be broken down into five major sections: the nav bar containing the view highscores button and timer, the quiz start card, the quiz question cards, the submit initials card, and the highscores card. The nav bar and all the cards were created using CSS Bootstrap components. Since each question card is a child of the same parent div, it was possible to keep track of which question the user is currently on and, based on that, what to display after they chose an answer. Specifically, if the user was currently on questions 1-4 (out of 5), clicking an answer would trigger the display of the next question. If the user was on question 5, clicking an answer would display the submit initials card. Each question is also given a unique ID which matches keys in a defined JavaScript object to allow for answer checking. After each question is answered, text is displayed on-screen telling the user whether they were correct or not.

**JavaScript**

By putting all the question cards inside a parent div, I was able to take advantage of event delegation and required only one event listener for all question choices. Since the buttons on the quiz start card, submit initials card, and highscores card all had relatively unique functionalities, they were all given separate event listeners. The quiz start button sets the timer to 60 seconds, begins the timer, directs you to the first question, and determines when to stop the timer. The submit initials button saves the input name and score to local storage, and adds the submission to the highscores list. The view highscores button will display the highscores page no matter when you click it (except when you are already viewing the highscores display). These functionalities were a few of the bigger ones. Excluded from this description are a few minor functionalities written for improved user experience. 

## Usage
To begin the quiz, simply follow the link below and click the "Let's Do This" button. 

[Soccer-Quiz](https://kev-luo.github.io/Soccer-Quiz/)

The starting page will display a time of 0, and once you begin the quiz the timer displays a countdown from 60 seconds. Each incorrect answer deducts 10 seconds from your time remaining. After you've completed the quiz, enter your initials and compare how you did with others on the highscore chart. If you didn't do as well as you'd hoped, there's always the option to try again.

![overview](assets/gifs/overview.gif)

Should you choose to view your highscores before you complete the quiz, your current score will not be saved, and you will have to restart the quiz at the beginning.

![highscores-quick](assets/gifs/antsy.gif)

All highscores are stored in local storage until you manually clear them.

![clear-scores](assets/gifs/storage.gif)

## Credits
To getItems from local storage and append them to the highscores card, I went about attempting to do this by looping through local storage and appending each value as a new list item. I had to use the key(n) method which takes in a number as an argument and returns the n-th key in local storage. I learned about this from Matthew Flaschen on Stack Overflow. I've linked to his Stack Overflow profile below, as well as the original explanation he provided on this topioc.

* [Matthew Flaschen](https://stackoverflow.com/users/47773/matthew-flaschen?tab=profile)
* [Looping through localStorage in HTML5 and JavaScript](https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript)

## Contributing
[Contributor Covenant](https://www.contributor-covenant.org/)

I was unable to work out how to sort the high scores based on the code I'd written due to time-constraints. My afterthoughts on this are to split the highscore input based on the hyphen ('-') between the name and the score, then transforming the returned array into an object with the values being equal to the scores. I would then loop through the values and push them to a new array based on the object values. I'm open to suggestions and/or constructive criticism on my theoretical approach...

## License
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) License.