let startStop = document.getElementById("button-start-stop");
let playerOneRoll = document.getElementById("player-one-roll")
let dice = document.getElementById("dice")
let playerOneRoundScore = document.getElementById("score-num-round-one")


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

playerOneRoll.addEventListener("click", function() {
    rollDice()
})

function rollDice() {

    let diceValueInt = Number(playerOneRoundScore.textContent);
    let diceValue = Math.floor(Math.random() * 6) + 1;
    dice.src = "images/dice_" + diceValue + ".png";

    if (diceValue === 1) {
        playerOneRoundScore.textContent = 0;
    }
    else {        
        diceValueInt = diceValueInt + Number(diceValue);    
        playerOneRoundScore.textContent = diceValueInt
    }

    



}