let dateBuilder = [
  () => {
    return '2019';
  },

  () => {
    return 'Februarie';
  },
  () => {
    return '24';
  },
];

dateBuilder[3] = () => {
  return 'Duminica';
};

console.warn(`
Pct 1 Folosind arrayul dateBuilder. Afiseaza luna curenta.
`);
console.log(dateBuilder[1]());

console.warn(`
Pct 2 Afiseaza propozitia: “Suntem in anul an.”.
`);
console.log(`Suntem in anul ${dateBuilder[0]()}`);

console.warn(`
Pct 3 Afiseaza propozitia: “Suntem in luna ll in anul aa.”.
`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}`);

console.warn(`
Pct 4 Afiseaza propozitia: “Astazi este zz”.
`);
console.log(`Astazi este ${dateBuilder[3]()}`);

console.warn(`
Pct 5 Folosind arrayul dateBuilder. Afiseaza anul curent.
`);
console.log(dateBuilder[0]());

console.warn(`
Pct 6 Afiseaza propozitia: “Suntem in luna an”.
`);
console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}`);

console.warn(`
Pct 7 Afiseaza propozitia: “Astazi este zi, data”.
`);
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.warn(`
Pct 8 Afiseaza propozitia: “Data curenta este zi luna an”.
`);
console.log(
  `Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}`,
);
