const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head>Assignment</head>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>')

        return res.end()
    }

    if (url === '/users') {
        res.write('<ul><li>User1</li></ul>')
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        res.on('data', chuck => {
            body.push(chuck)
        })

        return res.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
        })
        res.statusCode = 302
    }
})

server.listener(3000)