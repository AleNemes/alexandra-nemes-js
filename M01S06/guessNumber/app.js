let randomNumber = Math.floor(Math.random() * 100 + 1);
let submitButton = document.getElementById('submitGuess');
let newGameButton = document.getElementById('newGame');
let result = document.getElementById('result');

submitButton.addEventListener('click', function () {
  let userGuess = document.getElementById('guessField').value;

  if (userGuess === randomNumber) {
    result.innerText = 'You Win!!!';
    result.style.color = '#1abc9a';
  } else if (userGuess > randomNumber) {
    result.innerText = 'Your number is too high! Try again!';
  } else {
    result.innerText = 'Your number is too low! Try again!';
    result.style.color = '#1abc9a';
  }
});

newGameButton.addEventListener('click', function () {
  result.innerText = 'Let`s play again!';
  result.style.color = '#9b59b6';
  document.getElementById('guessField').value = '';
  randomNumber = Math.floor(Math.random() * 100 + 1);
});
