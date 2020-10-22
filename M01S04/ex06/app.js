let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Steveson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// Pct 1 Folosind obiectul person si un for, afiseaza in consola
// skillurile de pe pozitiile pare ale arrayului.
for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

// In mod similar, afiseaza skillurile care NU incep cu j.
let skillsLength = person.skills.length;
for (let i = 0; i < skillsLength; i++) {
  if (person.skills[i].startsWith('j') !== true) {
    console.log(person.skills[i]);
  }
}

console.warn(
  'Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."',
);

let friendsLength = person.friends.length;
let sentence = 'Prietenii mei se numesc';
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  let friendFullName = `${friend.name} ${friend.surname}`;
  let punctuation = i === friendsLength - 1 ? '.' : ',';

  sentence = `${sentence} ${friendFullName}${punctuation}`;
}

console.log(sentence);

console.warn(`Folosind un for, afiseaza numarul total de ani pe care il au
  persoanele din arrayul friends, doar daca varsta este mai
  mare sau egala cu 30 de ani.`);
let totalAge = 0;

for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  if (friend.age >= 30) {
    totalAge += friend.age;
    // totalAge = totalAge + friend.age
  }
}
console.log(totalAge);

console.warn('Folosind un for, afiseaza suma anilor de nastere a persoanelor.');
let currentYear = 2020;
let sumBirthYears = currentYear - person.age;
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  sumBirthYears += currentYear - friend.age;
}
console.log(sumBirthYears);

console.warn(
  'Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.',
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  if (Math.abs(person.age - friend.age) > 2) {
    console.log(Math.abs(person.age - friend.age));
  }
}

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.',
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  if (friend.age % 2 !== 0) {
    console.log(
      `Intre ${person.name} si ${friend.name} este o diferenta de ${Math.abs(
        person.age - friend.age,
      )} ani.`,
    );
  }
}

console.warn(`Folosind proprietatea length a arrayului skills
si o bucla for, afiseaza in ordine inversa elementele arrayului skills.
Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (let i = skillsLength - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

// Pct 9 Folosind obiectul person si un for, afiseaza in
// consola skillurile pe care le are persoana
// let skills = `${person.skills}`;
// for (let i = 0; (i = skills); i++) {
//   console.log(i);
// }
for (let i = 0; i < skillsLength; i++) {
  console.log(person.skills[i]);
}

// Pct 10  In mod similar, afiseaza skillurile care incep cu c
for (let i = 0; i < skillsLength; i++) {
  if (person.skills[i].startsWith('c')) {
    console.log(person.skills[i]);
  }
}

// Pct 11 Folosind un for afiseaza propozitia:
// "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."
let message = 'Numele de familie ale prietenilor mei sunt: ';
let friendSurname = person.friends.surname;
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  let friendSurname = `${friend.surname}`;
  let punctuation = i === friendsLength - 1 ? '.' : ',';

  message = `${message} ${friendSurname}${punctuation}`;
}

console.log(message);

// Pct 12 Folosind un for, afiseaza numarul total de ani
// pe care il au persoanele din arrayul friends
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  totalAge = totalAge + friend.age;
}
console.log(totalAge);

// Pct 13 Folosind un for, afiseaza suma anilor  persoanelor.
let sumAge = person.age + person.friendsLength.age;
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
}
console.log(sumAge);

// Pct 14 Afiseaza diferenta de varsta dintre persoana
// si prietenii din arrayul friends.
let difference =
  person.age -
  (person.friends[0].age + person.friends[1].age + person.friends[2].age);
for (let i = 0; i < friendsLength; i++) {
  console.log(difference);
}

// Pct 15 Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
// Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
//  (un singur console.log()!)
let difference1 = person.age - person.friends[0].age;
let difference2 = person.age - person.friends[1].age;
let difference3 = person.age - person.friends[2].age;
console.log(
  `Intre ${person.name} si ${person.friends[0].name} este o diferenta de
   ${difference1} ani. Intre ${person.name} si ${person.friends[1].name}
   este o diferenta de ${difference2} an. Intre ${person.name} si
   ${person.friends[2].name} este o diferenta de ${difference3} ani.`,
);

// Pct 16 Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy
// in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
// let text = 'Prietenii mei sunt';

// for (let i = friendFullName - 1; i >= 0; i--) {
//   let friendFullName = `${friend.name} ${friend.surname}`;
//   console.log(friendFullName[i]);
// }

let text = 'Prietenii mei se numesc';
for (let i = 0; i < friendsLength; i--) {
  const friend = person.friends[i];
  let friendFullName = `${person.friends.name} ${person.friends.surname}`;
  let punctuation = i === friendsLength - 1 ? '.' : ',';

  text = `${text} ${friendFullName} ${punctuation}`;
}

console.log(text);
