'use strict';

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < 20; i++) {
    cluster.fork();
  }

  cluster.on('exit', function exit(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });

  cluster.on('online', function(worker) {
    console.log(`worker ${worker.process.pid} is online`);
});
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer(function createServer(req, res) {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
