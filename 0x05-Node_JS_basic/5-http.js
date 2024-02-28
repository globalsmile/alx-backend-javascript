const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) {
            res.end(err.message);
        } else {
            res.end(data);
        }
        });
    }
    }
);
app.listen(1245);
module.exports = app;

