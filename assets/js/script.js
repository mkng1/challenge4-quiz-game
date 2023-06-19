var hiScoreList = document.querySelector(".high-scores");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var backButton = document.querySelector(".back-button");
var quizSection = document.querySelector(".quiz-section");


var storageScore;
var hiScore;
var timer;
var timerCount;
var isWin;

// winGame();
// loseGame();

function startQuestions() {

}



// Start button logic
startButton.addEventListener("click", function(event) {
    startGame();
    });


// Start the game by initilaising the timer
function startGame() {

    //Remove starter text from page
    const element = document.getElementById("starter");
    element.remove();
    timerCount = 75;
    isWin = false;
    timerElement.textContent = timerCount;
    setTimer()
    //Add questions
    startQuestions();
}

// Timer starts the countdown and win/loss condition is evaluated
function setTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount > 0 && isWin === true) {
            winGame();
        }
        if (timerCount <= 0) {
            clearInterval(timer);
            loseGame();
        }
    },1000)
}




// High Score retrieval and render
function getHiScore() {

    backButton.addEventListener("click", function(event) {
        location.href = "./index.html";
        });
    // RESET High Score - Event listener sets high score as ""
    resetButton.addEventListener("click", function(event) {
    localStorage.setItem("hiScore", null);
    });
    // RESET end

    // If there is no record, return empty string
    if (hiScore === null) {
        console.log("hiScore was null");
        var li = document.createElement("li");            
        hiScoreList.appendChild(li);
        li.textContent = "-";
    } else if (hiScore === "") {
        console.log("hiScore was an empty string");
        var li = document.createElement("li");            
        hiScoreList.appendChild(li);
        li.textContent = "-";
    } else {
        // retrieve and sort high score list by score descending
        // return high score for rendering
        storageScore = localStorage.getItem("hiScore")
        hiScore = JSON.parse(storageScore);

        // Render High Score onto the page
        for (let index = 0; index < hiScore.length; index++) {
            // console.log("wtaf" + hiScore.score[index] + hiScore.name[index]);
            var li = document.createElement("li");            
            hiScoreList.appendChild(li);
            li.textContent = hiScore[index].name + " " + hiScore[index].score;
        }
    }
    }

// Start the page script if it is high score page
function pageLoad() {
    console.log("initialized Page Load");
    if (timerElement === null) {
        console.log("running getHiScore");
        getHiScore();
    }

}
pageLoad();