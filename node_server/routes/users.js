// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.post('/login', function(req, res, next) {
//     console.log(req)
//     res.json({
//         msg:[1,2,3]
//     })
// });

// module.exports = router;
const{ exec } = require('../db/mysql');

const login = (username,password)=>{
    const sql = `
        select username,realname from users 
        where username='${username}' and password='${password}'
    `;
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })

};
module.exports = {
    login,
};