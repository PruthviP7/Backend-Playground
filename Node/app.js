const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server =  http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log("req ", req.url,'methodd', req.method,' headerr ');

    if(url === '/') {
        res.write('<html><head><title>Enter Text</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body></html>')
        return res.end();
    }

    if(url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log("chunk ", chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parser Body ", parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302; //302 Stataus Code is used for redirection(google it);
        res.setHeader('Location', '/');
        return res.end();
    }
    // console.log("req ", req.url,'methodd', req.method,' headerr ', req.headers);
    // process.exit();  //to quit/exit server;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My First Page</title></head><body><h1>Hello from my Node.js Server</h1></body></html>')
    res.end();
});

server.listen(3000);