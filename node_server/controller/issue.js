const{ exec } = require('../conf/db');

const selectIssueList = ()=>{
    const sql = `
        SELECT * FROM question;
    `;
    return exec(sql).then(rows=>{
        return rows || null
    })

};

//用问题id去查answer表 问答的回答页面
const getIssueAnswerList = (id)=>{
    const sql = `
        SELECT a.*, u.name FROM  answer a 
        join user u on a.user_id = u.id 
        where question_id = '${id}';
    `;
    return exec(sql).then(rows=>{
        return rows || null
    })

};
//提出问题
const putIssue = (id,title, payMoney, issueDetails,createTime)=>{
    const sql = `
        INSERT INTO question (user_id,title,content,create_time,money)
        VALUES ('${id}','${title}','${issueDetails}','${createTime}','${payMoney}');
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};

//回答问题
const answerIssue = (question_id,user_id, content, create_time)=>{
    const sql = `
        INSERT INTO answer (question_id,user_id,content,create_time)
        VALUES ('${question_id}','${user_id}','${content}','${create_time}');
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};

module.exports = {
    selectIssueList,
    getIssueAnswerList,
    answerIssue,
    putIssue,
};