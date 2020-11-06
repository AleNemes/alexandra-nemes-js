// Pct 1 Creeaza o functie overloaded pentru calcularea suprafetelor.
// Daca primeste un parametru, sa calculeze suprafata unui patrat.
// Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze
// suprafata totala a paralelipipedului. Foloseste structura switch.
// Pct 2 Creeaza o functie numita calculateCircleArea() si afiseaza
// suprafata unor cercuri cu raza de 2, 20 si 16.
// Pct 3 Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
//   a. Folosind metodele obiectului pet afiseaza propozitia:
//      “nnnn este ssss si are aaaa ani”
//   b. Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge
//     varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
function calculateSurface() {
  switch (surface) {
    case calculateSquareSurface(L):
      console.log(calculateSquareSurface);
      break;

    case calculateRectangleSurface(L, l):
      console.log(calculateRectangleSurface);
      break;

    // case calculateRectangleSurface(L, l, h)
    // console.log(calculateRectangleSurface);
  }
}

function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

let pet = {
  getName: function () {
    return 'Tasha';
  },
  getSpecies: function () {
    return 'caine';
  },
  getAge: function () {
    return '6';
  },
};
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

let petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
