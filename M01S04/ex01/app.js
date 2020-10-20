var messageParagraph = document.getElementById('message');
var value = window.prompt('Introdu o valoare');

var word = 'para';

if (value % 2 === 0) {
  word = 'para';
} else {
  word = 'impara';
}

var message = `Valoarea este ${value} si este ${word}.`;
messageParagraph.innerText = message;
// messageParagraph.textContent = message

// var value = window.prompt('Introdu o valoare');
// var isOdd = false;

// if (value % 2 === 0) {
//   isOdd = false;
// } else {
//   isOdd = true;
// }

// // ternary operator
// var word = isOdd === true ? 'impara' : 'para';

// console.log(`Valoarea este ${value} si este ${word}`);

// // console.log(`Valoarea este: ${value}`);

// Folosind metoda prompt() afiseaza in pagina mesajul:
//  “Numarul introdus este mai mic | mai mare decat 20.”
var message2Paragraph = document.getElementById('message2');

var word = 'mai mic';

if (value < 20) {
  word = 'mai mic decat';
} else {
  word = 'mai mare decat';
}

var message2 = `Numarul introdus este ${word} 20.`;
message2Paragraph.innerText = message2;
