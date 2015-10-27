const fs = require('fs');
const path = require('path');

// read a file and log out the data
// fs.readFile('example.txt', 'utf8', (data, err) => {
//   if (err) {
//     console.log(err);
//   }
//   // a null terminator will be logged out last if we don't truthy-check data
//   if (data) {
//     console.log('We got some data back!');
//   }
// });


// Using fs.read();

// Use streams to read data
const readStream = fs.createReadStream('./src/example.txt', {
  encoding: 'utf8',
});

// We can listen for tons of events!

// the open event is only for a readStream
readStream.on('open', () => {
  console.log('Opened file!');
});

readStream.on('data', () => {
  console.log("we're getting some data!");
});

readStream.on('error', (err) => {
  if (err) {
    console.error(err);
  }
});

readStream.on('close', () => {
  console.log("We're done with this file!");
});

// const src = fs.createReadStream('example.txt', {
//   encoding: 'utf8',
// });
//
// const dest = fs.createWriteStream('example-copy.txt', {
//   encoding: 'utf8',
// });

// Using streams to read and write files
// src.pipe(dest);

// maybe we can create a file copy method?

function copy(source, destination, encoding) {
  const fileEncoding = encoding || null;
  fs.createReadStream(source, {
    encoding: fileEncoding,
  })
  .pipe(
    fs.createWriteStream(destination, {
      encoding: fileEncoding,
    })
  );
}


copy('./src/example.txt', './dest/example-copy.txt', 'utf8');
copy('./src/bigImage.jpeg', './dest/bigImage.jpeg');


function copyMany(source, destination, encoding) {
  const fileEncoding = encoding || null;
  fs.readdir(source, (err, files) => {
    files
    .filter((file) => path.extname(file) === '.jpeg')
    .forEach((file) => {
      copy(path.join(source, file), './' + path.join(destination, file), fileEncoding);
    });
  });
}

copyMany('./src', './dest');
