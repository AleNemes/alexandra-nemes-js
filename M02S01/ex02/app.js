class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSeep) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSeep = topReverseSeep;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}`);
  }

  getSpeed(format) {
    let speed = format === true ? `${this.speed} km/h` : this.speed;
    return speed;
  }

  accelerate() {
    // this.speed++;
    let newSpeed = this.speed + 1;
    this.setSpeed(newSpeed);
  }

  decelerate() {
    // this.speed--;
    let newSpeed = this.speed - 1;
    this.setSpeed(newSpeed);
  }

  stop() {
    this.setSpeed(0);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    if (speed < this.topReverseSeep) {
      this.speed = this.topReverseSeep;
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSeep) {
    super(make, color, 4, speed, topSpeed, topReverseSeep);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  // decelerate() {
  //   //let speed = this.speed--;
  //   // if (speed < 0) {}
  //   if (--this.speed < this.topReverseSeep) {
  //     this.speed = this.topReverseSeep;
  //   }

  //   this.displaySpeed();
  // }
}

// Pct 1 Instantiaza o bicicleta (marca Pegas, culoare red, viteza curenta 8,
//   si viteza maxima 20). O poti stoca intr-o variabila numita bike.
// Pct 2 Seteaza viteza instantei bike la 2
// Pct 3 Foloseste metoda decelerate() de trei ori, ce observi?
// Pct 4 Seteaza viteza instantei bike la -10, ce observi?
let bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();
bike.setSpeed(-10);

// Pct 5 Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle,
// numita Tricycle. Diferenta fiind ca o tricicleta are trei roti.
// Pct 6 Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2,
//    viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike.
// Pct 7 Seteaza viteza instantei trike la 0
// Pct 8 Foloseste metoda decelerate() de trei ori, ce observi?
// pct 9 Seteaza viteza instantei trike la -10, ce observi?
class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSeep) {
    super(make, color, 3, speed, topSpeed, topReverseSeep);
  }
}
let trike = new Tricycle('Tryke', 'red', 2, 9, -2);
trike.setSpeed(0);
trike.decelerate();
trike.decelerate();
trike.decelerate();
trike.setSpeed(-10);

// Pct 3 Creeaza o masina noua (marca Audi, culoare blue, viteza
//    curenta 3, viteza maxima 140, viteza minima -50).
// Pct 4 Seteaza viteza noii instante la 140, apoi ruleaza
//  metoda accelerate(), ce observi?
let audi = new Car('Audi', 'blue', 3, 140, -50);
audi.setSpeed(140);
audi.accelerate();
