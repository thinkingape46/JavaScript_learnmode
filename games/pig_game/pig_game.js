let startStop = document.getElementById("button-start-stop");

let playerOneRoll = document.getElementById("player-one-roll");
let playerOneHold = document.getElementById("player-one-hold");
let playerOneRoundScore = document.getElementById("score-num-round-one")
let playerOneScore = document.getElementById("score-num-one")

let dice = document.getElementById("dice")

let diceImage = document.getElementById("dice-image")


startStop.style.transition = "all 1s";

startStop.addEventListener("click", function() {
    if (startStop.textContent === "START") {
        startStop.style.backgroundColor = "#ff3d3d";
        startStop.textContent = "STOP";
        playerTurn = "one";
    }
    else if (startStop.textContent === "STOP") {
        startStop.style.backgroundColor = "#0bd43d";
        startStop.textContent = "START";
    }
    })

playerOneRoll.addEventListener("click", () => rollDiceOne())
playerOneHold.addEventListener("click", () => holdDiceOne())

function rollDiceOne() {

    let diceValue = (Math.floor(Math.random() * 6) + 1);
    dice.src = "images/dice_" + diceValue + ".png";

    if (diceValue === 1) {
        playerOneRoundScore.textContent = 0;
    }
    else {      
        playerOneRoundScore.textContent = Number(playerOneRoundScore.textContent) + diceValue;
    }}

function holdDiceOne() {
    playerOneScore.textContent = Number(playerOneScore.textContent) + Number(playerOneRoundScore.textContent);
    playerOneRoundScore.textContent = 0;

}