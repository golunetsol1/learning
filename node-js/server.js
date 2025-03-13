const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello GS</h1>');
        res.end();
    }else if (req.url === "/index") {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.write("<h1>Internal Server Error</h1>");
                res.end();
                return;
            }
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        });
    }
     else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});







const port = 3000;
server.listen(port, () => {
    console.log(`listening a port ${port}`);
})