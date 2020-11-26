// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf',
  class: 'clase de css',
});

// $p.appendTo($('body'));

// Pct 1 Salveaza obiectul jQuery $('body') intr-o variabila numita
//  $body si foloseste-o in metoda appendTo().
//
// Pct 2 Creaza inca un paragraf cu idul message care sa contina textul:
//  “Parola nu trebuie sa fie mai mica de 5 caractere.”.
//
// Pct 3 Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
//
// Pct 4 Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass
// a noului obiect pentru a ii adauga clasa error.
//
let $body = $('body');
$body.append($p);

$p1 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});
$body.append($p1);
setTimeout(() => {
  $p1.addClass('error');
}, 5000);

// Pct 5 Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in
//  textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// js
// document.getElementById('myParagraph').innerText =
//   'Am schimbat dinamic acest paragraf.';
let message = 'Am schimbat acest paragraf';
// JQuery
$('#myParagraph').text(message);

// Pct 6 Creeaza un element de tip span cu idul example si cu textul “ParolaMea”
// si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
//
$('<span>', {
  id: 'example',
  text: 'Parola mea',
}).appendTo($p1);

// js
let span = document.createElement('span');
span.id = 'example2';
span.innerText = 'Parola ta';
$p1[0].append(span);

// Pct 7 Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul
//  div-ului cu clasa container folosind metoda .prependTo()
$('<h2>', {
  text: 'Mesaje',
}).prependTo('.container');

//js
let h2 = document.createElement('h2');
h2.innerText = 'Mesaje2';
document.querySelector('.container').prepend(h2);

// Pct 8 Creaza un div cu clasa navigation si adauga-l dupa divul anterior,
//  folosind metoda .after()
// Pct  9 Creeaza un element de tip ancora cu textul Primul Link si clasa
//  nav-link si adauga-l la divul cu clasa navigation.
// Pct 10 Creeaza un element h2 cu textul “Navigatie” si folosind metoda
// .before() adauga-l la divul cu clasa navigation. Selectorul lui before
// va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
//
// Pct 11 Creeaza un element de tip sup cu textul 1 si folosind metoda
// .prepend() adauga-l in ancora .nav-link
// Pct 12 Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind
// metoda .before() adauga-l deasupra divului .container
// Pct 13 Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery
// poate fi gasita aici.” Cuvantul aici va fi o ancora care va deschide
// intr-o pagina noua documentia jQuery. Atributele target si href pot
// fi setate in acelasi fel cum sunt setate cele text sau class.
