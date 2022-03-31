const http = require('http');

const routes = require('./routes');


//create and return server
const server = http.createServer(routes.requestHandler)

//listen start a process keep it running for incoming
//request
server.listen(3000);










