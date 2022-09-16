const board = document.getElementById("board");
const tiles = document.getElementsByClassName("tile");
const restart_button = document.getElementById("reset-btn");
const player1_score = document.getElementById("player1_score"); //RedPlayer
const player2_score = document.getElementById("player2_score"); //YellowPlayer
// game vars
let playerTurn = "red";
let gameOver = false;
let winPatterns = new Set();
winPatterns.add("036");
winPatterns.add("147");
winPatterns.add("258");
winPatterns.add("048");
winPatterns.add("246");

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
  if (check_redWin()) return "red-wins";
  else if (check_yellowWin()) return "yellow-wins";
  return "nothing-yet";
};

// change player:
const changePlayer = () => {};

// i didn't used arrow function=> this doesn't work well within
const play = function () {
  if (playerTurn == "red") this.classList.add("redIcon");
  else this.classList.add("yellowIcon");
  //after each click/add => check if there is a WINNER!
  const result = checkWinner();
  if (result == "red-wins") console.log("REEEDD!!!");
  if (result == "yellow-wins") console.log("YELLOWWW!!!");
  if (result == "nothing-yet") console.log("NOTHING!!!");
  //change player if currentRed then it becomes yellow, and vice versa
  playerTurn = playerTurn === "red" ? playerTurn = "yellow" : "red";
};

for (let tile of tiles) tile.addEventListener("click", play);
