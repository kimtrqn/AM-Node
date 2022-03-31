const express = require('express');

const router = express.Router();

router.use('add-product', (req,res,next) => {
    res.send(
        '<form action="product" method="POST></form>'
    )
})
module.exports = router;