
/* Dialog Modal that waits for the pageto finish loading then outputs a message with the instructions to get the player started*/
window.addEventListener('DOMContentLoaded', () => {
// Get the modal
var modal = document.getElementById("instructionsModal");
modal.style.display = "block";
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (Close), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let game = {
  score: 0,
  tryCount: 3,
  currentGame: [],
  playerMoves: [],
  turnNumber: 0,
  turnInProgress: false,
  lastButton: "",
  choices: ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9"],
};
/**
 * Main game function that initializes the game state, sets up event listeners for the squares, and starts a new game.
 */
function newGame() {
  game.score = 0;
  game.tryCount = 3;
  game.currentGame = [];
  game.playerMoves = [];
  for (let square of document.getElementsByClassName("square")) {
    if (square.getAttribute("data-listener") !== "true") {
      square.addEventListener("click", (e) => {
        if(game.currentGame.length > 0 && !game.turnInProgress) {
          let move = e.target.getAttribute("id");
          game.lastButton = move;
          lightsOn(move);
          game.playerMoves.push(move);
          playerTurn();
        }
      });
    };
    square.setAttribute("data-listener", "true");
  };
  showScore();
  showTryCount();
  addTurn();
}
/**
 * Adds a new turn to the game by generating a random choice and displaying the sequence of turns to the player.
 */
function addTurn() {
  game.playerMoves = [];
  game.currentGame.push(game.choices[Math.floor(Math.random() * 9)]);
  showTurns();
}
/**
 * Lights up a square on the game board for a brief period of time to indicate the next move.
 */
function lightsOn(move) {
  document.getElementById(move).classList.add("light");
  setTimeout(() => {
    document.getElementById(move).classList.remove("light");
  }, 400);
}
/**
 * Displays the current score of the player in the game interface.
 */
function showScore() {
  document.getElementById("score").innerText = `Score: ${game.score}`;
}
/**
 * Displays the current number of tries left for the player in the game interface.
 */
function showTryCount() {
  document.getElementById("tryCount").innerText = `Tries: ${game.tryCount}`;
}
function showTurns() {
  game.turnInProgress = true;
  game.turnNumber = 0;
  let turns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length) {
      clearInterval(turns);
      game.turnInProgress = false;
    }
  }, 800);
}
/**
 * Checks the player's moves against the current game sequence and updates the score or try count accordingly. If the player makes a wrong move, it alerts them and either ends the game or allows them to try again.
 */
function playerTurn() {
  let i = game.playerMoves.length - 1;
  if (game.playerMoves[i] === game.currentGame[i]) {
    if (game.playerMoves.length === game.currentGame.length) {
      game.score++;
      showScore();
      showTryCount();
      addTurn();
    }
  }
   else {
    game.tryCount--;
    showTryCount();
    /* If statement checks if player has any lives left before it decides to stop the game 
    and display Leaderboard score or give them a chance to try again */
    if (game.tryCount === 0) {
      document.getElementById("lastScore").innerHTML = `<i class="fa-solid fa-star"></i> ${game.score}`;
      alert("Game Over! Your score was: " + game.score);
      newGame();
    }
    else{
      alert("Wrong move!");
      game.playerMoves = [];
      showTurns();
      playerTurn();
    }
  }
}
});