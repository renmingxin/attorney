const{ exec } = require('../conf/db');

const login = (username,password)=>{
    const sql = `
        select name from common_user 
        where username='${username}' and password='${password}'
    `;
    return exec(sql).then(rows=>{
        console.log(rows[0])
        return rows[0] || null
    })

};
const register = (nickname,username,password)=>{
    const sql = `
        INSERT INTO common_user (name,username,password) 
        VALUES ('${nickname}','${username}','${password}');
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};
module.exports = {
    login,
    register
};