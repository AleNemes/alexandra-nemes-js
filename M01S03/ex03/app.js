var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Steveson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.andra = andra;

console.log(dragos);
console.log(dragos.friends);

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
andra.friends.dragos = dragos;

console.log(dragos.friends);

// Seteaza-l pe Steven ca prieten al lui Larry si
//  al Andrei (si invers).
steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

// Seteaz-o pe Carol ca prietena a Andrei (si invers).
carol.friends.andra = andra;
andra.friends.carol = carol;

// Folosind keywordul delete sterge prietenia
// dintre Dragos si Larry (si invers).
delete dragos.friends.larry;
delete larry.friends.dragos;

// Folosind obiectul Carol afiseaza numele
//  complet al lui Dragos.
console.log(
  `${carol.friends.andra.friends.dragos.name} ${carol.friends.andra.friends.dragos.surname}`,
);

// Folosind obiectul Andra afiseaza numarul total de
// caractere al numelui complet al lui Dragos.
console.log(
  `${andra.friends.dragos.name}${andra.friends.dragos.surname}`.length,
);

console.log((andra.friends.dragos.name + andra.friends.dragos.surname).length);

// Pct 5 Afiseaza numele complet al lui Dragos folosind obiectul Larry.
console.log(
  `${larry.friends.steven.friends.dragos.name} ${larry.friends.steven.friends.dragos.surname}`,
);

// Pct 6 Afiseaza numele complet a lui Larry folosind obiectul Dragos.
console.log(
  `${dragos.friends.steven.friends.larry.name} ${dragos.friends.steven.friends.larry.surname}`,
);
