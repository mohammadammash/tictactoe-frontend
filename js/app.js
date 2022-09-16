const tiles = document.getElementsByClassName('tile');
const restart_button = document.getElementById('reset-btn');
const player1_score = document.getElementById('player1_score');
const player2_score = document.getElementById("player2_score");
// game vars
let playerTurn = 'red';
let gameOver = false;
let winPatterns = new Set();
winPatterns.add('012');
winPatterns.add("345");
winPatterns.add("678");
winPatterns.add("036");
winPatterns.add("147");
winPatterns.add("258");
winPatterns.add("048");
winPatterns.add("246");

// i didn't used arrow function=> this doesn't work well within :)
const play = function(){
    console.log(this);
    if(playerTurn == 'red') this.classList.add('redIcon');
    else this.classList.add('yellowIcon');
}

for(let tile of tiles) tile.addEventListener('click',play)