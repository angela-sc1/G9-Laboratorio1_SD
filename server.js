const http = require('http');

const port = 0 - 65535;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Grupo 9 - Laboratorio 1');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
