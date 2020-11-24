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
