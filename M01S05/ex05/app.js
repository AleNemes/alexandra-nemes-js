let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};

console.warn(`
Pct 1 Afiseaza primul nume al persoanei folosind metoda getName()
`);

let firstName = person.getName();
console.log(firstName.split(' ')[0]);

// console.log(`${person.getName().split(' ')[0]}`);

console.warn(`
Afiseaza diferenta de varsta dintre  persoana si varsta ta
folosind metoda getAge().
`);
console.log(Math.abs(person.getAge() - 31));

console.warn(`
Afiseaza ultimele doua cifre al anului de nastere al persoanei,
folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);
let year = new Date().getFullYear();
let age = person.getAge();
console.log(`‘${(year - age).toString().slice(-2)}`);

console.warn(`
Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} de ani.`);

console.warn(`
Pct 5 Afiseaza numele intreg al persoanei folosind metoda getName()
`);
console.log(person.getName());

console.warn(`
Pct 6 Afiseaza varsta persoanei folosind metoda getAge()
`);
console.log(person.getAge());

console.warn(`
Pct 7 Afiseaza anul de nastere al persoanei, folosind anul curent si metoda getAge()
`);
console.log(2020 - person.getAge());

console.warn(`
Pct 8 Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} in anul ${
    2020 - person.getAge()
  }`,
);
