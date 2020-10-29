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
