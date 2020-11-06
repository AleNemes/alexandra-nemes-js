let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    console.log(this);
    this.speed++;
  },
  decelerate: function () {
    console.log(this);
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    console.log(this.areLightsOn);

    setTimeout(() => {
      this.turnLightsOff();
      console.log(this.areLightsOn);
    }, 3000);
  },
  stop: function () {
    return '0';
  },
  setSpeed: function () {
    if () {

    }
  }
};

// Pct 1 Adauga o proprietate booleana
// numita isTrunkOpen si asigneaza-i valoarea false.
// Pct 2 Adauga metode numite openTrunk() si closeTrunk()
// care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Pct 3 Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Pct 4 Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Pct 5 Adauga o metoda numita flashLights() care sa apeleze cele doua
//  metode in succesiune, folosind metoda window.setTimeout().

console.warn(`
// Pct 6 Afiseaza propozitia: "Masina era marca make si se deplasa cu
//  speed km/h".
`);
console.log(
  `Masina este marca ${car.make} si se deplaseaza cu ${car.speed} km/h.`,
);

console.warn(`
Pct 7 Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
`);
let newspeed = car.speed - 5;
console.log(`Viteza noua este ${newspeed} km/h.`);

// Pct 8 Adauga o metoda numita stop() care sa faca proprietatea speed 0,
//  apoi afiseaza viteza in corpul functiei.

// Pct 9 Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
// Pct 10 Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.

// Pct 11 Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix
// pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare
//  si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
