var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

// Pct 2 Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
person.pets.forEach((pet) => {
  let petName = `${pet.name}`;
  console.log(petName);
});

// Pct 3 Folosind o bucla for afiseaza suma anilor animalelor.
let totalAge = 0;
for (let i = 0; i < person.pets.length; i++) {
  const pet = person.pets[i];

  totalAge += pet.age;
}
console.log(totalAge);

// Pct 4 Folosind forEach() afiseaza cate una pe linie propozitiile:
//  “Twix este papagal si are 4 ani. Mars este caine si are… etc”.

person.pets.forEach((pet) => {
  let sentence = '';
  sentence += `${pet.name} este ${pet.species} si are ${pet.age} ani.`;

  console.log(sentence);
});

// Pct 5 Folosind o bucla for afiseaza cate una pe linie propozitiile:
//  “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ”
//  (repeta pentru toate intrarile din array).
let petsLength = person.pets.length;
let personAge = 2020 - person.birthYear;
for (let i = 0; i < petsLength; i++) {
  const pet = person.pets[i];

  console.log(
    `Intre ${person.firstName} si ${
      pet.name
    } este o diferenta de varsta de ${Math.abs(personAge - pet.age)} ani.`,
  );
}

// Pct 6 Folosind o bucla for afiseaza in ordine inversa numele
// animalelor din array (.reverse() si inainte si dupa bucla).
person.pets.reverse();
for (let i = 0; i < petsLength; i++) {
  const pet = person.pets[i];

  console.log(pet.name);
}
person.pets.reverse();

// Pct 7 La fel si cu forEach()
person.pets.reverse();
person.pets.forEach((pet) => {
  console.log(pet.name);
});
person.pets.reverse();

// Pct 8 Folosind o bucla for afla care este cel mai in varsta animal si
// afiseaza propozitia: “xxx este cel mai batran animal pe care il am
// si este cu y ani mai mic decat mine.”

for (let i = 0; i < petsLength; i++) {
  const pet = person.pets[i];
  let ageDifference = personAge - pet.age;

  if (pet.age >= 10) {
  }
}

// pct 9 Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
let sentence = 'Am ';
person.pets.forEach((pet, i, pets) => {
  let petSpecies = person.pets.species;
  let punctuation = ', ';

  if (i === person.pets.length - 1) {
    punctuation = '.';
  }

  if (i === person.pets.length - 2) {
    punctuation = ' si ';
  }

  sentence += pet.species + punctuation;
});
console.log(sentence);
