var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
    console.log(req)
    res.json({
        msg:[1,2,3]
    })
});

module.exports = router;
