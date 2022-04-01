const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');
const adminRouter = require('./admin')

router.get('/shop', (req, res, next) => {
    console.log(adminRouter.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.pug'))
    res.render('shop')
});

router.get('/', (req, res, next) => {

    res.redirect('/shop')
})

module.exports = router;

