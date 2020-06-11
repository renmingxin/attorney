const{ exec } = require('../conf/db');

const login = (username,password)=>{
    const sql = `
        select * from user 
        where username='${username}' and password='${password}'
    `;
    return exec(sql).then(rows=>{
        console.log(rows[0])
        return rows[0] || null
    })

};
const register = (nickname,username,password,roleType,phone='',tags='')=>{
    const sql = `
        INSERT INTO user (name,username,password,role_type,phone,tags) 
        VALUES ('${nickname}','${username}','${password}','${roleType}','${phone}','${tags}');
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};
const getUserDetails = (userId)=>{
    const sql = `
        select * from user where id='${userId}'
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};
module.exports = {
    login,
    register,
    getUserDetails
};