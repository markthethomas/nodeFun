'use strict';

const test = require('tape');

function Counter() {
  let count = 0;
  this.check = () => count;
  this.increment = () => (count++);
}

const myCounter = new Counter();

test('Check incrementation', t => {
  t.plan(2);
  myCounter.increment();
  myCounter.increment();
  t.equals(myCounter.check(), 2, '2');
  myCounter.increment();
  t.equals(myCounter.check(), 3, '3');
  t.end();
});
