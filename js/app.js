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

// check red win:
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

// check Winner
const checkWinner = () => {
  check_redWin();
  check_yellowWin();
};

// i didn't used arrow function=> this doesn't work well within
const play = function () {
  if (playerTurn == "red") this.classList.add("redIcon");
  else this.classList.add("yellowIcon");
  checkWinner();
  // changePlayer();
};

for (let tile of tiles) tile.addEventListener("click", play);
