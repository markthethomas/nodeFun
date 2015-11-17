'use strict';

function* myGen() {
  var foo = (yield);
  return foo;
}

let aGen = myGen();
console.log(aGen.next(10));