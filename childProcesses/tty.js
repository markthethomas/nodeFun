const exec = require('child_process').exec;
const fork = require('child_process').fork;
const spawn = require('child_process').spawn;
const test = require('tape');

process.chdir(__dirname);

test('using spawn', t => {
  t.plan(1);
  const cli = spawn('node', ['./dummy.js']);
  cli.stdout.setEncoding('utf8');
  cli.stdout.on('data', (data) => {
    t.equal(data.trim(), 'hi!');
  });
  cli.on('close', (code) => {
    console.log('child process exited with code ' + code);
  });
});

test('using exec', t => {
  t.plan(1);
  // Exec doesn't take an args array as the second argument
  // It also defaults to an encoding of utf8
  const cli = exec('node ./dummy.js');
  cli.stdout.on('data', (data) => {
    t.equal(data.trim(), 'hi!');
  });
});

test('using fork', t => {
  const cli = fork('./dummy.js');
  t.assert(cli);
  t.end();
});
