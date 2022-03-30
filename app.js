const http = require('http');
const fs = require('fs');

//create and return server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    //form
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    // on => allow to listen to certain event, listening 
    // to 'data' event
    req.on('data', (chunk) => {
        //chuck is in binary form => number code
      console.log('chuck', chunk);
      body.push(chunk);
    });
    //to buffer or interact with the body
    // buffer allocate raw binary data
    req.on('end', () => {
      //data is a text in binary form and convert into a string
      const parsedBody = Buffer.concat(body).toString();
      console.log('buffer', parsedBody);
      // message=dfas => [message, dfas]
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

//listen start a process keep it running for incoming
//request
server.listen(3000);







