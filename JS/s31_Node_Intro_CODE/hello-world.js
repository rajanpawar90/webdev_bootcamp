const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// var http = require('http');

// var server = http.createServer(function (req, res) {
//     res.end('test');
// });

// server.on('listening', function () {
//     console.log('ok, server is running');
// });

// server.listen(80);