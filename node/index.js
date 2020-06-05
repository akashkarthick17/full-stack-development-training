const http = require('http');
const express = require('express');

const app = express();

app.get('/',(req, res) => {
  res.json({title: 'Hello world from express'});
  res.end();
});

app.get('/text',(req, res) => {
  res.json({title: 'Sample text from express - Get'});
  res.end();
});

app.post('/text',(req, res) => {
  res.json({title: 'Sample text from express - Post'});
  res.end();
});




app.listen(3000, () => {
  console.log('Server started...');
});

// http
//   .createServer((req, res) => {
//     res.writeHead(200, '', { 'Content-Type': 'application/json' });

//     if (req.url === '/text' && req.method === 'POST') {
//       res.write(JSON.stringify({ title: 'Sample text' }));
//     } else {
//       res.write(JSON.stringify({ title: 'Hello world' }));
//     }

//     res.end();
//   })
//   .listen(3000);
