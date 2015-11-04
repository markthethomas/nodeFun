'use strict';
const test = require('tape');
const healthSymbol = Symbol();

class Monster {
  constructor(name, health) {
    this.name = name;
    this[healthSymbol] = health;
  }
  get isAlive() {
    return this[health] > 0;
  }
  set alive(alive) {
    if (!alive) {
      this[health] = 0;
    }
  }
}

const monster = new Monster('mark', 100);

class Sully extends Monster {
  constructor(name, health) {
    super(name, health);
  }
  attack(target) {
    console.log(`Attacking ${target}`);
  }
}

const sully = new Sully();
console.log(sully);
sully.attack('HI');
