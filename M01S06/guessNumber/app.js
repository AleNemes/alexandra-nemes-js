let randomNumber = Math.floor(Math.random() * 100 + 1);
let playersGuess = 0;
let guessesRemaining = 10;
let gameState = '';
let gameWon = false;

let input = document.querySelector('#input');
let output = document.querySelector('#output');

let submitButton = document.querySelector('#submitGuess');
let newGameButton = document.querySelector('#newGame');

submitButton.addEventListener('click', clickHandler, false);
submitButton.addEventListener('submit', playGame(e) {
  e.preventDefault();
}, false);

// window.addEventListener('keydown', keydownHandler, false);

// function keydownHandler(event) {
//   if (event.keyCode === 13) {
//     validateInput();
//   }
// }

function clickHandler() {
  validateInput();
}

function playGame() {
  guessesRemaining--;
  let gameState = 'You have ' + guessesRemaining + 'more attempts';

  playersGuess = parseInt(input.value);

  if (playersGuess > randomNumber) {
    output.innerHTML = 'Your number is too high! <br>' + gameState;
    output.style.color = '#1abc9a';
    if (guessesRemaining < 1) {
      endGame();
    }
  } else if (playersGuess < randomNumber) {
    output.innerHTML = 'Your number is too low! <br>' + gameState;
    output.style.color = '#1abc9a';
    if (guessesRemaining < 1) {
      endGame();
    }
  } else {
    gameWon = true;
    endGame();
  }
}

function endGame() {
  if (gameWon) {
    output.innerHTML = 'You WIN!!! The number is ' + randomNumber;
    output.style.color = '#9b59b6';
  } else {
    output.innerHTML =
      'No more guesses left! <br> The number was ' + randomNumber;
  }
}

newGameButton.addEventListener('click', function () {
  output.innerText = 'Let`s play again!';
  output.style.color = '#9b59b6';
  document.getElementById('input').value = '';
  gameWon = false;
  guessesRemaining = 10;
  randomNumber = Math.floor(Math.random() * 100 + 1);
});

function validateInput() {
  playersGuess = parseInt(input.value);

  if (isNaN(playersGuess)) {
    output.innerHTML = 'Please enter a number.';
  } else {
    playGame();
  }
}
