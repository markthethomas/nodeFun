'use strict';
const test = require('tape');

// Set ~ Array
test('Sets', t => {
  const set = new Set();

  // Sets force unique items
  set.add(1);
  set.add(1);

  t.assert(set.size, 1);

  // You add items in with #add(arg);
  set.add(2);
  set.add(3);

  // You can check to see if it has something using #has(arg)
  t.assert(set.has(1));

  // The set size is accessed with #size;
  t.equal(set.size, 3);

  // You can remove items using #delete(arg)
  set.delete(2);
  t.equal(set.size, 2);

  // Clear all using #clear()
  set.clear();
  t.equal(set.size, 0);

  // No typecasting for uniqueness
  set.add(1);
  t.notEqual(set.has(1), set.has('1'));

  const newSet = new Set([1, 2, 3]);
  let emptySet = new Set();
  for (let setItem of newSet) {
    emptySet.add(setItem);
  }
  t.equal(newSet.size, emptySet.size);
  t.end();
});

// Map ~ key-value object
test('maps', t => {
  let map = new Map();
  map.set(1, true);

  t.assert(map.has(1));
  // Get stuff out with #get()
  t.assert(map.get(1), true);
  t.end();
});


// Weakmap ~ Map
test('weak maps', t => {
  let weak = new WeakMap();
  weak.set('hi', {});
  console.log(weak);
  t.end();
});
