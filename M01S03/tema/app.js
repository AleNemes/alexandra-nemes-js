var person = {
  firstName: 'Carolson',
  lastName: 'Carol',
  email: 'carol.carolson@gmail.com',
  birthYear: '1990',
  zipCode: '0222',
  pets: [
    {
      name: 'Lady',
      species: 'caine',
      age: '5',
    },

    {
      name: 'Horsy',
      species: 'cal',
      age: '12',
    },

    {
      name: 'Miti',
      species: 'tigru',
      age: '4',
    },
  ],
};

// Afiseaza propozitia: “Numele meu este: xxx si yyy si
// am x animale”. Nu uita de proprietatea length a arrayului pets.
console.log(
  `Numele meu este ${person.lastName} ${person.firstName}
  si am ${person.pets.length} animale.`,
);

// Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
console.log('Am acelasi email din copilarie: ' + person.email);

// Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este
   ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

// // Calculeaza si afiseaza (folosind anul curent) anul de
// nastere al animalului de pe pozitia 2.
console.log(2020 - person.pets[2].age);

// Calculeaza si salveaza in variabila difference diferenta
// de ani dintre persoana si animalul de pe pozitia 0.
// Foloseste anul curent.
console.log(2020 - person.birthYear - person.pets[0].age);

var difference = 2020 - person.birthYear - person.pets[0].age;

// Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
var petName = person.petName[0].name;

// Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani`,
);

// In documentul HTML creeaza o lista neordonata <ul> cu 4 elemente goale <li>.
// Fiecare li sa aiba un id: prop01, prop02… etc
// Folosind metoda document.getElementById() afiseaza
// urmatoarele 4 afirmatii despre obiectul person.
// Afiseaza propozitia “ firstName, pet1, pet2, pet3
//  locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
var prop01Paragraph = document.getElementById('prop01');
var prop01 = `${person.firstName}, ${person.pets[0].name},
${person.pets[1].name} si ${person.pets[2].name}
locuiesc toti in aceeasi casa.`;

prop01Paragraph.textContent = prop01;
// var prop01 = `${person.firstName}, ${
//   person.pets[(0, 1, 2)].name} locuiesc toti in aceeasi casa`;
// Nu merge sa enumeri pozitiile intr-o singura paranteaza patrata?
//Imi baga automat si parantezele rotunde si imi arata [Object object].

// Calculeaza si afiseaza diferenta de varsta dintre animalul
// de pe pozitia 0 si cel de pe pozitia 2
var prop02Paragraph = document.getElementById('prop02');
var prop02 = `${person.pets[2].age - person.pets[2].age}`;

prop02Paragraph.textContent = prop02;

// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in
//  birthYear si codul meu postal este: zipCode”
var prop03Paragraph = document.getElementById('prop03');
var prop03 = `Ma numesc ${person.lastName} ${person.firstName},
m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}`;

prop03Paragraph.textContent = prop03;
// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx,
// xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.
// Folosirea variabilelor este optionala dar incurajata.
var prop04Paragraph = document.getElementById('prop04');
var prop04 = `Animalele mele s-au nascut ${2020 - person.pets[0].age}, ${
  2020 - person.pets[1].age
} respectiv ${2020 - person.pets[2].age}.`;

prop04Paragraph.textContent = prop04;
