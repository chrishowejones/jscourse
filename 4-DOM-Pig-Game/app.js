/*
  GAME RULES:

  - The game has 2 players, playing in rounds
  - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
  - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
  - The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
  - The first player to reach 100 points on GLOBAL score wins the game

  CHALLENGE

  1. Player loses his entire score when they throw 2 sixes in a row. Play then transfers to next player.
  2. Add an input field to the HTML to allow the players to select the wining score.
  3. Add another dice to the game so there are two dice. The player loses his score if any one of the dice is 1.

*/
var scores, roundScore, activePlayer, gamePlaying, dice, previousDice, previousDice2;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {


        // 1. Random number
        var dice = Math.floor(6 * Math.random()) + 1;
        var dice2 = Math.floor(6 * Math.random()) + 1;

        // 2. Display result.
        var diceDOM = document.getElementById("dice-1");
        diceDOM.style.display  = "block";
        diceDOM.src = "dice-" + dice + ".png";
        var diceDOM2 = document.getElementById("dice-2");
        diceDOM2.style.display  = "block";
        diceDOM2.src = "dice-" + dice2 + ".png";

        // 3. Update the round score IF the rolled number was not a 1 and
        // reset score/lose round if rolled number 6 and previous number 6.
        if ((dice === 6 && previousDice === 6)
           || (dice2 === 6 && previousDice2 === 6)) {
            // Reset total score to zero and nextPlayer
            scores[activePlayer] = 0;
            document.getElementById("score-" + activePlayer).textContent = "0";

            nextPlayer();
        }
        else if (dice !== 1 && dice2 != 1) {
            // Save previous dice
            previousDice = dice;
            previousDice2 = dice2;

            // Add score
            roundScore += dice + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update UI
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector(".final-score").value;

        var winningScore;
        // check if input not empty: undefined, null and empty string coerced to false
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if current player won the game
        if (scores[activePlayer] >= winningScore) {
            // active player won
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // reset previous dice
    previousDice = 0;
    previousDice2 = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
};

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
};
