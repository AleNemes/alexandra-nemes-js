let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
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
};

// Pct 1 Adauga o proprietate booleana
// numita isTrunkOpen si asigneaza-i valoarea false.
// Pct 2 Adauga metode numite openTrunk() si closeTrunk()
// care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Pct 3 Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Pct 4 Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Pct 5 Adauga o metoda numita flashLights() care sa apeleze cele doua
//  metode in succesiune, folosind metoda window.setTimeout().

// Pct 6 Afiseaza propozitia: "Masina era marca make si se deplasa cu
//  speed km/h".
