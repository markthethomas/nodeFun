const test = require('tape');

function spyOn(func) {
  // let count;
  // let calledWith;
  const spyFunc = func;

  this.callCount = function callCount() {};
  this.wasCalledWith = function wasCalledWith() {};
  this.returned = function returned() {
    return func();
  };
  // I spy with my little eye… your code here
}

function returns1() {
  return 1;
}

const spy = spyOn(returns1);

// test(t => {
//   t.equals(spy.returned(1), false);
//   t.end();
// });
//
// test(t => {
//   t.equals(spy.callCount(), 0);
//   t.end();
// });
//
// test(t => {
//   t.equals(spy.wasCalledWith('hello'), false);
//   t.end();
// });
//
// spy('hello', 'hi', 'howdy');
// spy('goodbye', 'bye', 'see ya');
//
//
// test(t => {
//   t.equals(spy.callCount(), 2);
//   t.end();
// });
//
// test(t => {
//   t.equals(spy.wasCalledWith('bye'), true);
//   t.end();
// });
//
// test(t => {
//   t.equals(spy.wasCalledWith('hi'), true);
//   t.end();
// });
//
// test(t => {
//   t.equals(spy.returned(1), true);
//   t.end();
// });