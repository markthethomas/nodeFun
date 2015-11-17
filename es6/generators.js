'use strict';

function* generator() {
  yield 1;
  yield 2;
  yield 6;
  return;
}

const myGen = generator();

for (let value of myGen) {
  console.log(value);
}
