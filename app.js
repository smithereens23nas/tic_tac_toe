//Let the player chose if they want to be X or O, then set that value.
// let currentPlayer = {
//   chosenLetter: "",
//   get chooseCharacter() {
//     return `${currentPlayer.chosenLetter}`;
//   },
//   set chooseCharacter(value) {
//     this.chosenLetter = value;
//   },
// };

// //conditional to make sure user chooses X or O

// currentPlayer.chooseCharacter = prompt("Player: Do you want to be X or O?");

// console.log(currentPlayer);
// let cpu = "";
// //conditional to set the cpu to the opposite letter from the currentPlayer
// if (currentPlayer.chosenLetter.toUpperCase() === "X") {
//   cpu = "O";
// } else {
//   cpu = "X";
// }
// console.log(cpu)
// console.log(currentPlayer.chosenLetter)

let playerX = "X";
let playerO = 'O';

//winning conditions
const winningConditions = [
  [0, 3, 6],
  [0, 1, 2],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

//grab userClick
// const userClick = $('.box');

// addEventListener for a user click
let userClick = document.querySelectorAll(".box");
let turnCount = 1;
function playerClick() {
  for (let i = 0; i < userClick.length; i++) {
    userClick[i].addEventListener("click", function () {
      // if (validMove()) 
      // {
      userClick[i].innerHTML = playerX;
      console.log(userClick[i]);
      turn();
      // validMove();
      winEvent();
      // }
          } 
  )}
}

//if playerX = X then make it an O
function turn() {
  if (playerX === "X") {
    playerX = "O";
  } else {
    playerX = "X";
  }
}

function validMove() {
  for (let i = 0; i < userClick.length; i++) {
    if (userClick[i].innerHTML === "") {
      return true;
    } else
    return false;
  }
}
console.log(validMove())

function winEvent() {
  for (let i = 0; i < winningConditions.length; i++) {
    let numOfX = 0;
    let numOfO = 0;
    // console.log(winningConditions[i])
    for (let j = 0; j < winningConditions[i].length; j++) {
      // console.log(winningConditions[i][j]);
      if (userClick[winningConditions[i][j]].innerHTML === "X") {
        numOfX++;
      }
      if (userClick[winningConditions[i][j]].innerHTML === "O") {
        numOfO++;
      }
      if (numOfX === 3) {
        //append html to congratulate winner
        let div = document.createElement("h1")
div.append("Player X is the winner!!!");
let win = document.querySelector('.game-board').appendChild(div);
// console.log(div.textContent);
win.classList.toggle('popupMessage')
        //  = 'X You are the winner'
      } else if (numOfO === 3) {
        //append html to congratulate winner
        let div = document.createElement("h1")
        div.append("Player O is the winner!!!");
        let win = document.querySelector('.game-board').appendChild(div);
        // console.log(div.textContent);
        win.classList.toggle('popupMessage')      }
    }
  }
}

//reset button 

//grab the reset button
let resetBtn = document.querySelector('button')
//listen for a click and reset the game
resetBtn.addEventListener('click', function(){
  // turnCount = 0;
  for(let i = 0; i < userClick.length; i++){
    userClick[i].innerHTML = '';
    let popup = document.querySelector('.popupMessage');
    popup.innerHTML = ''
  }
})


playerClick();

