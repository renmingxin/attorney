const{ exec } = require('../conf/db');

const selectIssueList = ()=>{
    const sql = `
        SELECT * FROM question;
    `;
    return exec(sql).then(rows=>{
        return rows || null
    })

};

//根据回答者的userid来找问题列表
const selectAnswerByUserid = (userid)=>{
    const sql = `
        SELECT * FROM answer WHERE user_id = '${userid}';
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

//提出问题后扣掉你的钱
const lessMoney = (userid,money)=>{
    const sql = `
        update user set money = money - '${money}' where id = '${userid}';
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

// 搜索问题
const selectIssue = (title)=>{
    const sql = `
        select * from question where title like '%${title}%';
    `;
    return exec(sql).then(rows=>{
        return rows || null
    })

};

// 采纳回答
const zainaAnswer = (id)=>{
    const sql = `
        update answer set zan = 1 where id = '${id}';
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};
// 采纳回答后给用户加钱
const zainaAnswerAddMoney = (userid,money)=>{
    const sql = `
        update user set money = money + '${money}' where id = '${userid}';
    `;
    return exec(sql).then(rows=>{
        return rows[0] || null
    })

};

module.exports = {
    selectIssueList,
    getIssueAnswerList,
    answerIssue,
    selectIssue,
    putIssue,
    zainaAnswer,
    zainaAnswerAddMoney,
    lessMoney,
    selectAnswerByUserid
};