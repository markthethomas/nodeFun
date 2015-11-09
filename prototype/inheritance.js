'use strict';

const test = require('tape');

function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function identify() {
  console.log(`I am ${this.me}`);
};

const a1 = new Foo('a1');
const a2 = new Foo('a2');

a2.speak = function speak() {
  console.log(`Hello, ${this.identify()}.`);
};

a1.identify = function identify() {
  console.log(`I am ${this.me}!`);
};
a2.speak();

a1.identify(); // with !, because it's now pointing at


// Object.prototype.constructor:
// Returns a reference to the Object function that created
// the instance's prototype. Note that the value of this property
// is a reference to the function itself, not a string containing the
// function's name. The value is only read-only for primitive values
// such as 1, true and "test".

const obj1 = {
  foo: 1,
  bar: 2,
};

const obj2 = Object.create(obj1);
console.log(obj1.foo); // 1
console.log(obj2.foo); // because it's delegated to the prototype chain for lookup
try {
  console.log(obj2 instanceof obj1); // doesn't check the constructor
} catch (err) {
  console.error(err);
}
