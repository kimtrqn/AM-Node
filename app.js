const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//set thing globally
//use template to for views;
app.set('view engine', 'pug');
app.set('views', 'views');

//put it on top so he can parse all the body
//urlencoded is a miggleware it will call next() too
//mainly parse body from a form
app.use(bodyParser.urlencoded());

//to access public folder
app.use(express.static(path.join(__dirname, 'public')))




app.use('/admin', adminRoutes.router)
app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

//create and return server

//listen start a process keep it running for incoming
//request
app.listen(3000);










