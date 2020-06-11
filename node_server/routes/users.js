var express = require('express');
var router = express.Router();
let {
    login,
    register,
    getUserDetails
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
    let { nickname,username, password, roleType,phone,tags} = req.body;
    let lastData = register(nickname,username,password,roleType*1,phone*1,tags);
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
router.post('/getUserDetails', function(req, res, next) {
    let { userId } = req.body;
    let lastData = getUserDetails(userId*1);
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