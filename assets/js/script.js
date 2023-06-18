var hiScoreList = document.querySelector(".high-scores");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");



var timer;
var timerCount;

/* timer */
function startTimer() {

}

/* quiz segment */

/* result state */


// High Score retrieval and render
function getHiScore() {
    // Access local storage for high score data
    var hiScore = localStorage.getItem("hiScore");
    // If there is no record, return empty string
    if (hiScore === null) {
        hiScore = "";
    } else if (hiScore = "") {
    } else {
        hiScore = JSON.parse(hiScore);
    }

      // retrieve and sort high score list by score descending
      // return high score for rendering
    }

// Initialise getHiScore for High Score page
getHiScore();

JSON.parse();
JSON.stringify();




// Start the game by initilaising the timer
function startGame() {
timerCount = 75;
isWin = false;

// Prevents start button from being clicked when round is in progress
startButton.disabled = true;

renderBlanks()

startTimer()
}


// When initialised, timer starts the countdown and win/loss condition is evaluated
function setTimer() {
timer = setInterval( () => {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount > 0) {
        if (timerCount > 0) {
            winGame();
        }
    } else if (timerCount <= 0) {
        loseGame();
    }

},1000)}

// RESET High Score - Event listener sets high score as ""
resetButton.addEventListener("click", function(event) {
    localStorage.setItem("hiScore", "");
  });