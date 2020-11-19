let Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 100,
  topReverseSpeed: -50,
  displaySpeed: function () {
    console.log(
      `Vehiculul ${this.make} se deplasa cu viteza ${this.speed} km/h.`,
    );
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
    this.displaySpeed();
  },
  flasLights: function () {
    this.turnLightsOn();
    setTimeout(turnLightsOff, 3000);
  },
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;

// Pct 1 Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed
// si implementeaza protectiile deja cunoscute.
// Pct 2 Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed()
// pentru a face viteza curenta 140.
// Pct 3 Ruleaza metoda accelerate().

// Pct 6 Adauga o metoda numita flashLights() care sa apeleze cele doua
// metode in succesiune, folosind metoda window.setTimeout().

audi.setSpeed(140);
audi.accelerate();
