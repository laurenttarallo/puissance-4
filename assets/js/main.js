//  let lap = 1
let playerOne = "X";
let playerTwo = "O";
let currentPlayer = playerOne;
let colorOne = "yellow";
let colorTwo = "red";
let currentColor = colorOne;
let gamerOver = false;
const winningConditions = [
  //les victoires horizontales
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  //les victoires verticales
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  //les victoires diagonales haut -> droite
  [0, 8, 16, 24],
  [1, 9, 17, 25],
  [2, 10, 18, 26],
  [3, 11, 19, 27],
  [7, 15, 23, 31],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [10, 18, 26, 34],
  [14, 22, 30, 38],
  [15, 23, 31, 39],
  [16, 24, 32, 40],
  [17, 25, 33, 41],
  //les victoires diagonales haut -> gauche
  [6, 12, 18, 24],
  [5, 11, 17, 23],
  [4, 10, 16, 22],
  [3, 9, 15, 21],
  [13, 19, 25, 31],
  [12, 18, 24, 30],
  [11, 17, 23, 29],
  [10, 16, 22, 28],
  [20, 26, 32, 38],
  [19, 25, 31, 37],
  [18, 24, 30, 36],
  [17, 23, 29, 35],
];

function getModeValue() {
  let radioBox = document.querySelectorAll("radio");
  console.log("Ta mère ", radioBox.values);
}

let cells = document.querySelectorAll(".cell");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", (event) => {
    let elem = event.target;
    play(elem);
  });
}

function play(e) {
  if (gamerOver == false) {
    if (e.innerHTML == "") {
      e.innerHTML = currentPlayer;
      e.style.backgroundColor = currentColor;
      e.style.color = currentColor;
      if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
        currentColor = colorTwo;
      } else {
        currentPlayer = playerOne;
        currentColor = colorOne;
      }
    }
    checkVictory();
  }
}

function checkVictory() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < winningConditions.length; i++) {
    if (cells[winningConditions[i][0]].innerHTML != "") {
      // si ma cellule 0 + ma cellule 1 + ma cellule 2 + ma cellule 3 (4 au total ) sont occupées par le meme élément ALORS VICTOIRE//
      if (
        cells[winningConditions[i][0]].innerHTML ==
          cells[winningConditions[i][1]].innerHTML &&
        cells[winningConditions[i][1]].innerHTML ==
          cells[winningConditions[i][2]].innerHTML &&
        cells[winningConditions[i][2]].innerHTML ==
          cells[winningConditions[i][3]].innerHTML
      ) {
        if (cells[winningConditions[i][0]].innerHTML == playerOne) {
          gamerOver = true;
          document.querySelector("#win").innerHTML = "Player 1 WIN"; // consol log pour afficher resultat dans la console/ DOCUMENT.QUERYSELECTOR pour selectionner l'element et l'afficher grace a innerHTML//
        } else {
          gamerOver = true;
          document.querySelector("#win").innerHTML = "Player 2 WIN";
        }
      }
    }
  }
}

function reset() {
  let cells = document.querySelectorAll(".cell");
  document.querySelector("#win").innerHTML = "";
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.backgroundColor = "";
    cells[i].style.color = "";
    gamerOver = false;
    currentPlayer = playerOne;
    currentColor = colorOne;
  }
}
const myAudio = document.getElementById("myAudio");
let isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};

function checkNumber(number) {
  if (number >= 0) {
    console.log("positif");
  } else {
    console.log("negatif");
  }
}

let zob = 1;

checkNumber(zob);

// let music = new Audio("/assets/sound/FOREST.mp3");

// function playsound() {
//   music.play();
// }

//   function play(elem) {

//     if ( elem.innerHTML == "")
// {
//   if (lap % 2 != 0) {
//             elem.innerHTML = playerOne /d'abord je def quand c'est au tour de joueur 1 et joueur 2 de jouer/
//         }else{
//             elem.innerHTML = playerTwo
//         }
//         checkWin() /ensuite j'appelle ma fonction checkWin pour dire au cpu de checker si y'a un gagnant ou pas/
//         lap++   /et je lui dis de prendre un tour de +/
//     }
// }
// Lap=1 donc "lap % 2 != 0" <=> 1/2=0,5
// (le modulo = au 5 de 0,5 cf def du modulo)
// donc lap % 2 EST BIEN different de 0
// au tour suivant  lap prend 1 tour ( on l'a defini dans la fonction avec lap++)
// donc "lap % 2 != 0" <=> 2/2=1 Y'a pas de décimal mais un nombre entier =1
//  (le modulo cette fois-ci est donc = 0 puisque il n'y a pas de décimal)
// donc lap % 2 EST BIEN = 0 donc on repond à la condition else: c'est donc
// au joueur 2 de jouer
