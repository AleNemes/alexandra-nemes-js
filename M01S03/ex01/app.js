console.log(object.age);
console.log(object.surname);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' de ani',
);

// Afiseaza anul in care aveai jumatate din varsta pe
// care ai trecut-o in obiect scazand din anul curent
// (un proces numit hardcodare)
console.log(2020 - object.age / 2);

// Afiseaza fraza “xxx yyy are xx ani.” in
// consola folosind operatorul de concatenare
console.log(
  object.name + ' ' + object.surname + ' are' + ' ' + object.age + ' de ani',
);

// Afiseaza anul in care te-ai nascut scazand varsta din anul curent
console.log(2020 - 31);
