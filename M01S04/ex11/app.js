// let myObject = {
//   key1: 'Key 1 value',
//   key2: 'Key 2 value',
//   key3: 'Key 3 value',
//   key4: true,
//   key5: [1, 2, 3],
// };

// Object.keys(myObject).forEach(function (keyName) {
//   console.log(myObject[keyName]);
// });

let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    node: false,
    react: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Steveson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

// Pct 1 Folosind Object.keys() pe proprietatea skills,
//  afiseaza abilitatile persoanei daca acestea sunt true.
Object.keys(person.skills).forEach((skill) => {
  if (person.skills[skill] === true) {
    console.log(skill);
  }
});

// Pct 2 Prin aceeasi metoda, afiseaza o lista inversata cu
// numele complet al prietenilor.
Object.keys(person.friends)
  .reverse()
  .forEach((friend) => {
    let friendObject = person.friends[friend];

    console.log(`${friendObject.name} ${friendObject.surname}`);
  });

// Pct 3 Afiseaza propozitia: “Prietenii mei sunt
// Larry Steven si Carol.” folosind Object.keys()
let friendsKeysArray = Object.keys(person.friends);
let sentence = 'Prietenii mei sunt ';
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let punctuation = ', ';

  if (i === friendsKeysArray.length - 1) {
    punctuation = '.';
  }

  if (i === friendsKeysArray.length - 2) {
    punctuation = ' si ';
  }

  sentence += `${friendObject.name}${punctuation}`;
}
console.log(sentence);

// Pct 4 Folosind bucla, afiseaza mai multe propozitii
// (cate una per console.log()) care sa afiseze:
// “Larry este mai mare|mic decat Dragos.” etc…
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let sentenceFragment =
    friendObject.age - person.age >= 0 ? 'mai mare' : 'mai mic';
  console.log(
    `${friendObject.name} este ${sentenceFragment} decat ${person.name}`,
  );
}

// Pct 5 Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.
Object.keys(person.skills).forEach((skill) => {
  console.log(skill);
});

// Pct 6 Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.
Object.keys(person.friends).forEach((friend) => {
  let friendObject = person.friends[friend];

  console.log(`${friendObject.name} ${friendObject.surname}`);
});

// Pct 7 Afiseaza propozitia: “Prietenii mei sunt Larry Larryson,
// Steven Stevenson si Carol Carolson.” folosind Object.keys()
let text = 'Prietenii mei sunt ';
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let punctuation = ', ';

  if (i === friendsKeysArray.length - 1) {
    punctuation = '.';
  }

  if (i === friendsKeysArray.length - 2) {
    punctuation = ' si ';
  }

  text += `${friendObject.name} ${friendObject.surname}${punctuation}`;
}
console.log(text);

// Pct 8 Folosind bucla, afiseaza mai multe propozitii (cate una per console.log())
//  care sa afiseze: “Larry are xx ani. Steven are …”
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];

  console.log(`${friendObject.name} are ${friendObject.age} ani.`);
}
