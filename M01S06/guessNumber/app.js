let btnStart = document.getElementById('start');
let btnReset = document.getElementById('reset');
let btnCheck = document.getElementById('btnCheck');
let output = document.getElementById('outPutText');

let number = Math.floor(Math.random() * 101);

btnCheck.addEventListener('click', function () {
  let input = document.getElementById('userInput').value;

  if (input === number) {
    output.innerText = `You guessed right, your number was ${number}`;
  } else if (input < number) {
    output.innerText = `Yo're suck! Your number is too low!`;
  } else if (input > number) {
    output.innerText = `Yo're suck! Your number is too high!`;
  }
});
