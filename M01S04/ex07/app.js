let friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Steveson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
  {
    name: 'Rangar',
    surname: 'Rangarson',
  },
];

console.warn(`
Pct 1. Folosind o bucla for afiseaza proprietatea surname a tuturor
obiectelor din arrayul friends.
`);
let friendsLength = friends.length;

for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];

  console.log(friend.surname);
}

console.warn(`
Pct 2 Afiseaza numele complet al tuturor prietenilor, insa o data ce
l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];
  console.log(`${friend.name} ${friend.surname}`);

  if (friend.name === 'Steven' && friend.surname === 'Steveson') {
    break;
  }
}

console.warn(`
Pct 3 Folosind keywordul continue, afiseaza numele complet al
prietenilor, doar daca numarul de caractere total al numelor
lor este mai mare de 13.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];

  if (`${friend.name}${friend.surname}`.length <= 13) {
    continue;
  }

  console.log(`${friend.name} ${friend.surname}`);
}

console.warn(`
Pct 4. Folosind o bucla for afiseaza proprietatea name a
tuturor obiectelor din arrayul friends.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];

  console.log(friend.name);
}

console.warn(`
Pct 5 Afiseaza numele complet al tuturor prietenilor.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];

  console.log(`${friend.name} ${friend.surname}`);
}

console.warn(`
Pct 6 Folosind keywordul break, afiseaza numele complet al prietenilor
 dar opeste bucla la primul surname care are numarul de caractere mai
  mare sau egal decat 9.
`);
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];

  if (`${friend.surname}`.length >= 9) {
    break;
  }

  console.log(`${friend.name} ${friend.surname}`);
}
