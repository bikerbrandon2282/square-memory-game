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
setTimeout(() => {
  alert("This game is still in development, The leaderboards will only show the last players score.");
  alert("Welcome to the Square Memory Game! Click 'New Game' to start playing. You have 3 tries to match the sequence of squares. Good luck!");
}, 500);
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
function lightsOn(move) {
  document.getElementById(move).classList.add("light");
  setTimeout(() => {
    document.getElementById(move).classList.remove("light");
  }, 400);
}
function showScore() {
  document.getElementById("score").innerText = game.score;
}
/**
 * Displays the current number of tries left for the player in the game interface.
 */
function showTryCount() {
  document.getElementById("tryCount").innerText = game.tryCount;
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
    game.tryCount === 0 ? alert("Game Over!") && newGame() : null;
    alert("Wrong move!");
    game.playerMoves = [];
    showTurns();
    playerTurn();
  }
}