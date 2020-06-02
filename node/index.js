const http = require('http');

console.log('Running node server');


http
  .createServer((req, res) => {
    res.write('Hello world from node js');
    res.end();
  })
  .listen(3000);
