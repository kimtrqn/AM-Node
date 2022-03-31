const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/shop', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;

