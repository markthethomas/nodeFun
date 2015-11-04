const fs = require('fs');
const test = require('tape');

test('readdir', t => {
  t.plan(2);
  fs.readdir('./', (err, dir) => {
    if (err) {
      t.fail(err);
    }
    t.ok(dir instanceof Array);
    t.equal(dir.length, 3);
  });
});
