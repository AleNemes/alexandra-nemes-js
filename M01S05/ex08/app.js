let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
  alert('Ai apasat butonul!');
};

button.addEventListener('click', clickHandler);

// Pct 1 Folosind codul de la exercitiul 08, numeste functia care ruleaza
//  la click clickHandler si foloseste-i numele ca parametru al metodei
//  addEventListener in locul celei anonime.

// Pct 2 Adauga un buton pe care scrie Elimina Evenimentul.
// Pct 3 La click pe acest buton nou, foloseste metoda removeEventListener al
//  variabilei button si foloseste numele clickHandler ca parametru.

removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

console.warn(`
Pct 4 Adauga un buton nou in document cu id-ul query si folosind addEventListener()
ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
`);
let query = document.getElementById('query');
let eventHandler = () => {
  prompt('Introdu varsta ta');
};

query.addEventListener('click', eventHandler);

console.warn(`
Pct 5 Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola
folosind template strings: “Ai aa ani.”.
`);
let age = prompt('Introdu varsta ta');
let sentence = `Ai ${age} ani`;
console.log(sentence);

console.warn(`
Pct 6 Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul
 intr-o variabila, apoi folosind innerText (textContent), afiseaza mesajul de mai devreme in acest paragraf.
`);
let messageParagraph = document.getElementById('message');
let message = `Ai ${age} ani`;
messageParagraph.innerText = message;
