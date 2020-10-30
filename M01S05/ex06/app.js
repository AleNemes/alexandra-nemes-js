let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};

let accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName]();
};
console.log(accessor('Name'));

console.warn(`
Pct 1 Folosind accesorul salveaza numele mic al persoanei
intr-o variabila si foloseste-l in propoztia: “Eu sunt xxx.”
`);
let fullName = accessor('Name');
let name = fullName.split(' ')[0];
console.log(`Eu sunt ${name}.`);

console.warn(`
Pct 2 Afiseaza diferenta de varsta dintre tine si persoana.
`);
console.log(`Diferenta de varsta este ${Math.abs(31 - accessor('Age'))}`);

console.warn(`
Pct 3 Afiseaza anul de nastere al persoanei folosind anul curent.
`);
console.log(2020 - person.getAge());

console.warn(`
Pct 4 Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”
`);
console.log(
  `Ma numesc ${person.getName()} si am ${person.getAge()} si m-am nascut acum ${person.getAge()} de ani.`,
);

console.warn(`
Pct 6 Folosind accesorul afiseaza numele persoanei.
`);
// let accessor = (methodSuffix) => {
//   let methodName = `get${methodSuffix}`;

//   return person[methodName]();
// };
// console.log(accessor('Name'));

console.warn(`
Pct 7 Afiseaza varsta persoanei.
`);
console.log(person.getAge());

console.warn(`
Pct 8 Afiseaza anul de nastere al persoanei folosind anul curent.
`);
console.log(2020 - person.getAge());

console.warn(`
Pct 9 Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);
