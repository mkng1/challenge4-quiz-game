var hiScoreList = document.querySelector(".high-scores");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var backButton = document.querySelector(".back-button");
var quizSection = document.querySelector(".quiz-section");
var wrongAlert = document.querySelector(".wrong");
var correctAlert = document.querySelector(".correct");


var storageScore;
var hiScore;
var timer;
var timerCount;
var isWin;

// winGame();
// loseGame();

function correct() {
    correctAlert.setAttribute("style", "display:block;");
    setInterval(() => {
        correctAlert.setAttribute("style", "display:none;");
    }, 2000);
}
function wrong() {
    wrongAlert.setAttribute("style", "display:block;");
    setInterval(() => {
        wrongAlert.setAttribute("style", "display:none;");
    }, 2000);
    timerCount = timerCount - 15;
}




function lastPage() {
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    quizSection.appendChild(h1);
    quizSection.appendChild(p);
    h1.textContent = "All done!";
    li1.textContent = "Your Final Score is " + timerCount;
    

    // <input type="text" name="" placeholder="Enter your initials" id="">
    // <button class="submit-button">Submit</button>

}

function question5() {
    var h1 = document.createElement("h1");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    quizSection.appendChild(h1);
    quizSection.appendChild(listEl);
    // Append list items to ordered list element 
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    h1.textContent = "5. A very useful tool used during development and debugging for printing content to the debugger is:";
    li1.textContent = "JavaScript";
    li2.textContent = "terminal/bash";
    li3.textContent = "for loops";
    li4.textContent = "console.log";

    //Event listeners
    li1.addEventListener("click", function(){
        wrong();
        lastPage();
    })
    li2.addEventListener("click", function(){
        wrong();
        lastPage();
    })
    li3.addEventListener("click", function(){
        wrong();
        lastPage();
    })
    li4.addEventListener("click", function(){
        correct();
        lastPage();
    })
}

function question4() {
    var h1 = document.createElement("h1");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    quizSection.appendChild(h1);
    quizSection.appendChild(listEl);
    // Append list items to ordered list element 
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    h1.textContent = "4. String values must be enclosed within ____ when being assigned to variables.";
    li1.textContent = "commas";
    li2.textContent = "curly brackets";
    li3.textContent = "quotes";
    li4.textContent = "parentheses";

    //Event listeners
    li1.addEventListener("click", function(){
        wrong();
        question5();
    })
    li2.addEventListener("click", function(){
        wrong();
        question5();
    })
    li3.addEventListener("click", function(){
        correct();
        question5();
    })
    li4.addEventListener("click", function(){
        wrong();
        question5();
    })
}


function question3() {
    var h1 = document.createElement("h1");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    quizSection.appendChild(h1);
    quizSection.appendChild(listEl);
    // Append list items to ordered list element 
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    h1.textContent = "3. Arrays in JavaScript can be used to store ____.";
    li1.textContent = "numbers and strings";
    li2.textContent = "other Arrays";
    li3.textContent = "booleans";
    li4.textContent = "all of the above";

    //Event listeners
    li1.addEventListener("click", function(){
        wrong();
        question4();
    })
    li2.addEventListener("click", function(){
        wrong();
        question4();
    })
    li3.addEventListener("click", function(){
        wrong();
        question4();
    })
    li4.addEventListener("click", function(){
        correct();
        question4();
    })
}

function question2() {
    var h1 = document.createElement("h1");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    quizSection.appendChild(h1);
    quizSection.appendChild(listEl);
    // Append list items to ordered list element 
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    h1.textContent = "2. The condition in an if / else statement is enclosed within ____.";
    li1.textContent = "quotes";
    li2.textContent = "curly brackets";
    li3.textContent = "parentheses";
    li4.textContent = "square brackets";

    //Event listeners
    li1.addEventListener("click", function(event){
        quizSection.replaceChildren();
        wrong();
        question3();
    })
    li2.addEventListener("click", function(event){
        quizSection.replaceChildren();
        wrong();
        question3();
    })
    li3.addEventListener("click", function(event){
        quizSection.replaceChildren();
        correct();
        question3();
    })
    li4.addEventListener("click", function(event){
        quizSection.replaceChildren();
        wrong();
        question3();
    })
}

function question1() {
    var h1 = document.createElement("h1");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    quizSection.appendChild(h1);
    quizSection.appendChild(listEl);
    // Append list items to ordered list element 
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    h1.textContent = "1. Commonly used data types DO NOT include:";
    li1.textContent = "strings";
    li2.textContent = "booleans";
    li3.textContent = "alerts";
    li4.textContent = "numbers";

    //Event listeners
    li1.addEventListener("click", function(event){
        quizSection.replaceChildren();
        wrong();
        question2();
    })
    li2.addEventListener("click", function(event){
        quizSection.replaceChildren();
        wrong();
        question2();
    })
    li3.addEventListener("click", function(event){
        quizSection.replaceChildren();
        correct();
        question2();
    })
    li4.addEventListener("click", function(event){
        quizSection.replaceChildren();
        wrong();
        question2();
    })
}

function startQuestions() {
    question1();
    var correct = document.querySelector(".correct");
    var wrong = document.querySelector(".wrong");
}




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


// Start button logic
startButton.addEventListener("click", function(event) {
    startGame();
    });

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