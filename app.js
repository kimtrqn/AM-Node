const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

//put it on top so he can parse all the body
//urlencoded is a miggleware it will call next() too
//mainly parse body from a form
app.use(bodyParser.urlencoded());


app.use('admin', adminRoutes)
app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not Found</h1>')
})

//create and return server

//listen start a process keep it running for incoming
//request
app.listen(3000);










