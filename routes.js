  const fs = require('fs');

  const requestHandler = (req, res) => {
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
        // 'end' it will fire at the end after the request is done parsing
        //to buffer or interact with the body
        // buffer allocate raw binary data
        return req.on('end', () => {
          //data is a text in binary form and convert into a string
          const parsedBody = Buffer.concat(body).toString();
          console.log('buffer', parsedBody);
          // message=dfas => [message, dfas]
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message, (err) => {
            //status 302 is a redirect status so it can redirect to anthoer page  
            res.statusCode = 302;
            res.setHeader('Location', '/');
            //always res.end() to return and end the fuction
            return res.end();
          });
        });
      }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title><head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
  }

module.exports = { requestHandler };
  