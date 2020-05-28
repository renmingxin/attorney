var express = require('express');
var router = express.Router();
let {
    login,
    register
} = require('../controller/user')
/* GET users listing. */
router.post('/login', function(req, res, next) {
    let { username, password} = req.body;
    let lastData = login(username,password);
    lastData.then(response=>{
        res.json({
            msg:response
        })
    }).catch(rej=>{
        res.json({
            msg:rej
        })
    })
});

router.post('/register', function(req, res, next) {
    let { nickname,username, password} = req.body;
    let lastData = register(nickname,username,password);
    lastData.then(response=>{
        res.json({
            msg:response
        })
    }).catch(rej=>{
        res.json({
            msg:rej
        })
    })
});

module.exports = router;