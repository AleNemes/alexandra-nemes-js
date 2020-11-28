class Car {
  topReverseSpeed = -50;
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.topSpeed = 160;
    this.isTrunkOpen = false;
    this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
    //this.speed = this.speed +1;
    //this.speed += 1
  }

  decelerate() {
    this.speed--;
    //this.speed = this.speed -1;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    console.log(this.areLightsOn);

    window.setTimeout(() => {
      this.turnLightsOff();
      console.log(this.areLightsOn);
    }, 2000);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }
}

//new Date()
let audi = new Car('Audi', 'black', 4, 50);

console.warn(`
Pct 1 Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
O poti salva intr-o variabila numita opel.
`);
let opel = new Car('Opel', 'red', 4, 3);

console.warn(`
Pct 2 Adauga o metoda numita stop() care sa faca proprietatea speed 0,
apoi afiseaza viteza.
`);

console.warn(`
Pct 3 Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
Pct 4 Adauga o proprietate numita topReverseSpeed si asgineaza-i valoarea -50.
`);

console.warn(`
Pct 5 Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare,
caz in care se folosesc proprietatile topSpeed si topReverseSpeed
`);

// Pct 6 Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// Pct 7 Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea
//  isTrunkOpen pe true, respectiv false.
// Pct 8 Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Pct  9 Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Pct 10 Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune,
//  folosind metoda window.setTimeout().
// Pct 11 Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])
// Pct 12 Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
// a. “Masina era marca make si se deplasa cu speed km/h”
// b. In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza:
// “Viteza noua este speed km/h” (setSpeed(car.speed - 5))

const cars = [audi, opel];
cars.forEach((car) => {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h`,
  );

  let newSpeed = car.speed - 5;

  console.log(`Viteza noua este de ${newSpeed} km/h`);
});
