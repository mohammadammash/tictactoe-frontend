const board = document.getElementById("board");
const tiles = document.getElementsByClassName("tile");
const restart_button = document.getElementById("reset-btn");
const player1_score = document.getElementById("player1_score"); //RedPlayer
const player2_score = document.getElementById("player2_score"); //YellowPlayer2
//title to show result
const title = document.getElementById("title");
// game vars
let [score1, score2] = [0, 0];
let playerTurn = "red";
let gameOver = false;

// restart Game: anytime a user clicks on restartButton:
const restartGame = () => {
  gameOver = false;
  playerTurn = "red";
  for (let tile of tiles) tile.classList.remove("yellowIcon", "redIcon");
  board.classList.remove("yellowBg", "redBg"); //remove if found
  title.textContent = "Coins Tic-Tac-Toe";
};

// check RED win:
const check_redWin = () => {
  // tiles 1->9 booleans if red: true else false
  const [
    tile0_red,
    tile1_red,
    tile2_red,
    tile3_red,
    tile4_red,
    tile5_red,
    tile6_red,
    tile7_red,
    tile8_red,
  ] = [
    board.children[0].classList.contains("redIcon"),
    board.children[1].classList.contains("redIcon"),
    board.children[2].classList.contains("redIcon"),
    board.children[3].classList.contains("redIcon"),
    board.children[4].classList.contains("redIcon"),
    board.children[5].classList.contains("redIcon"),
    board.children[6].classList.contains("redIcon"),
    board.children[7].classList.contains("redIcon"),
    board.children[8].classList.contains("redIcon"),
  ];
  //checking winning possibility for RED: if one is true return TRUE else False
  if (
    (tile0_red && tile1_red && tile2_red) ||
    (tile3_red && tile4_red && tile5_red) ||
    (tile6_red && tile7_red && tile8_red) ||
    (tile0_red && tile3_red && tile6_red) ||
    (tile1_red && tile4_red && tile7_red) ||
    (tile2_red && tile5_red && tile8_red) ||
    (tile0_red && tile4_red && tile8_red) ||
    (tile2_red && tile4_red && tile6_red)
  )
    return true;
  // if no true val exists, then it will return FALSE
  return false;
};

// check YELLOW win:
const check_yellowWin = () => {
  // tiles 1->9 booleans if yellow: true else false
  const [
    tile0_yellow,
    tile1_yellow,
    tile2_yellow,
    tile3_yellow,
    tile4_yellow,
    tile5_yellow,
    tile6_yellow,
    tile7_yellow,
    tile8_yellow,
  ] = [
    board.children[0].classList.contains("yellowIcon"),
    board.children[1].classList.contains("yellowIcon"),
    board.children[2].classList.contains("yellowIcon"),
    board.children[3].classList.contains("yellowIcon"),
    board.children[4].classList.contains("yellowIcon"),
    board.children[5].classList.contains("yellowIcon"),
    board.children[6].classList.contains("yellowIcon"),
    board.children[7].classList.contains("yellowIcon"),
    board.children[8].classList.contains("yellowIcon"),
  ];
  //checking winning possibility for YELLOW: if one is true return TRUE else False
  if (
    (tile0_yellow && tile1_yellow && tile2_yellow) ||
    (tile3_yellow && tile4_yellow && tile5_yellow) ||
    (tile6_yellow && tile7_yellow && tile8_yellow) ||
    (tile0_yellow && tile3_yellow && tile6_yellow) ||
    (tile1_yellow && tile4_yellow && tile7_yellow) ||
    (tile2_yellow && tile5_yellow && tile8_yellow) ||
    (tile0_yellow && tile4_yellow && tile8_yellow) ||
    (tile2_yellow && tile4_yellow && tile6_yellow)
  )
    return true;
  // if no true val exists, then it will return FALSE
  return false;
};

// check Winner
const checkWinner = () => {
  let result;
  if (check_redWin()) result = "red-wins";
  else if (check_yellowWin()) result = "yellow-wins";
  else result = "nothing-yet";

  // if red/player1 wins:
  if (result === "red-wins") {
    title.textContent = "Red WINSS!!";
    score1 += 1;
    player1_score.textContent = score1;
    gameOver = true;
    // if yellow/player2 wins:
  } else if (result === "yellow-wins") {
    title.textContent = "Yellow WINSS!!";
    board.classList.add("yellowBg");
    score2 += 1;
    player2_score.textContent = score2;
    gameOver = true;
  }
};

// change player:
const changePlayer = () => {};

// i didn't used arrow function=> this doesn't work well within //MAIN GAME
const play = function () {
  //validate if game is on, or it's over
  if (gameOver) return;

  if (playerTurn == "red") this.classList.add("redIcon");
  else this.classList.add("yellowIcon");
  //after each click/add => check if there is a WINNER!
  checkWinner();
  //change player if currentRed then it becomes yellow, and vice versa
  playerTurn = playerTurn === "red" ? (playerTurn = "yellow") : "red";
};

// each time a tile in the board is clicked
for (let tile of tiles) tile.addEventListener("click", play);
// each time a user clicks on the restart-button
restart_button.addEventListener("click", restartGame);
