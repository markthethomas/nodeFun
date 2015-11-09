'use strict';

// synchronous thunk
function add(x, y) {
  return x + y;
}

// the thunk is the container wrapper for the value
const syncThunk = () => {
  return add(10, 15);
};

syncThunk(); // 25

// async thunk
function addAsync(x, y, cb) {
  setTimeout(() => {
    return cb(x + y);
  }, 1000);
}

const asyncThunk = function thunk(cb) {
  console.log('evaluating inside def');
  addAsync(10, 15, cb);
};

asyncThunk((sum) => {
  console.log(sum);
});
