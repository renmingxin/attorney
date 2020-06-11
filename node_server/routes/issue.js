var express = require('express');
var router = express.Router();
let {
    selectIssueList,
    putIssue,
    answerIssue,
    selectIssue,
    getIssueAnswerList,
    zainaAnswer,
    zainaAnswerAddMoney,
    lessMoney,
    selectAnswerByUserid,
} = require('../controller/issue')
/* GET users listing. */

router.post('/selectIssueList', function(req, res, next) {
    // let { id,title, payMoney, issueDetails,createTime} = req.body;
    let lastData = selectIssueList();
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
router.post('/selectIssueAnswerList', function(req, res, next) {
    let { question_id} = req.body;
    let lastData = getIssueAnswerList(question_id * 1);
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

router.post('/putIssue', function(req, res, next) {
    let { id,title, payMoney, issueDetails,createTime} = req.body;
    let lastData = putIssue(id * 1,title, payMoney * 1, issueDetails,createTime);
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

router.post('/answerIssue', function(req, res, next) {
    let { question_id,user_id, content, create_time} = req.body;
    let lastData = answerIssue(question_id * 1,user_id * 1, content, create_time);
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

router.post('/selectIssue', function(req, res, next) {
    let { title} = req.body;
    let lastData = selectIssue(title);
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
router.post('/zainaAnswer', function(req, res, next) {
    let { id} = req.body;
    let lastData = zainaAnswer(id * 1);
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
router.post('/zainaAnswerAddMoney', function(req, res, next) {
    let { userId,money} = req.body;
    let lastData = zainaAnswerAddMoney(userId * 1, money * 1);
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
router.post('/lessMoney', function(req, res, next) {
    let { userId,money} = req.body;
    let lastData = lessMoney(userId * 1, money * 1);
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

router.post('/selectAnswerByUserid', function(req, res, next) {
    let { userId } = req.body;
    let lastData = selectAnswerByUserid(userId * 1);
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