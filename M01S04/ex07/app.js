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
