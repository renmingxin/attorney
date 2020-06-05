<template>
    <div class="container-issue">
        <div class="issue-title">
            <!-- <input type="textarea" placeholder="一句话完整的描述你的问题" name="" id=""> -->
            <textarea placeholder="一句话完整的描述你的问题" v-model="issueParams.title"></textarea>
        </div>
        <div class="body-nav-right">
            <div>
                <span class="iconfont icon-fabu"></span>
                <span>设置悬赏</span>
            </div>
        </div>
        <div class="money-div">
            <div class="money-div-top">
                <div>添加悬赏会更快获得答案</div>
                <!-- <div>你有{{money}}财富值</div> -->
                <div class="question-list-money">
                    <span class="iconfont icon-money2"> </span>
                    <span class="money">你有{{money}}财富值</span>
                </div>
            </div>
            <div class="money-div-bottom">
                <Button 
                size="large" 
                style="margin-right: 10px;margin-bottom: 10px;"
                v-for="(item,index) in moneyList" 
                :key="index" 
                :disabled="item > money "
                @click="issueParams.payMoney = item">{{item}}财富值</Button>
            </div>
            <div class="sure-money">
                支付<strong style="color:orange">{{issueParams.payMoney}}</strong>悬赏
            </div>
        </div>
        <div class="issue-details">
            <textarea placeholder="详细的说明问题，以便更好的获得回答" v-model="issueParams.issueDetails"></textarea>
        </div>
        <div class="issue-sumbit">
            <div class="body-nav-right" style="float:right" @click="sumbit">
                <div style="text-align:center;font-size:18px">
                    <span >提交</span>
                </div>
            </div>
        </div>
    </div> 
</template>
  
<script>
export default {
    components:{
    },
  	data () {
		return {
            money:sessionStorage.getItem('money'),
            payMoney:0,
            moneyList:[5,10,20,30,50,80,100,150,200,250,300],
            issueParams:{
                title:'',
                payMoney:0,
                issueDetails:''
            }
        }
	},
	computed:{

	},
	created(){

	},
	mounted(){
	},
	methods:{
        sumbit(){
            let msg = {
                id:sessionStorage.getItem('userId') * 1,
                title: this.issueParams.title, 
                payMoney: this.issueParams.payMoney,
                issueDetails:this.issueParams.issueDetails,
                createTime:new Date().toLocaleString()
            };
            console.log(msg)
            let callback = {
                onOk: (data) => {
                   if(data === null){
                        this.$Message.success('提交成功');
                        this.$router.push({name:'main'});
                   }
                },
                onError: (error) => {
                    console.log(error)
                }
            }
            this.$Http.post('/issue/putIssue', msg, callback)
        }
    }
}
</script>

<style lang="scss" scoped>

   .container-issue{
        cursor: default;
        width: 1200px;
        margin: 0 auto;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
    }
    .issue-title{
        height: 80px;
        width: 100%;
        textarea{
            width: 100%;
            height: 100%;
            border: 1px solid #aaa;
            padding: 0;
            font-size: 20px;
        }
    }
    .body-nav-right{
        margin: 20px 0;
        cursor: pointer;
        width: 100px;
    }
    .body-nav-right>div{
        background: #741928;
        color: white;
        padding: 10px 12px;
    }
    .body-nav-right>div>span:nth-child(1){
        margin-right: 3px;
    }
    .money-div{
        // height: 100px;
        width: 100%;
        background: #f9fbfa;
        padding: 10px;
        border: 1px solid #ccc;
        .money-div-top{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .money-div-bottom{
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            font-size: 20px;
            >div{
                margin-right: 10px;
                margin-bottom: 10px;
                border: 1px solid;
                text-align: center;
                padding: 5px 30px;
                border-radius: 3px;
                cursor: pointer;
            }
            >div:hover{
                background: orange;
                color: white;
                border:1px solid;
            }
        }
        .sure-money{
            text-align: right;
            font-size: 20px;
        }
    }
    .question-list-money {
        font-size:18px;
        color: orange;
    }
    .question-list-money .iconfont {
        font-size: 32px;
    }
    .issue-details{
        widows: 100%;
        height: 130px;
        margin-top: 80px;
        textarea{
            width: 100%;
            height: 100%;
            border: 1px solid #aaa;
            padding: 0;
            font-size: 20px;
        }
    }
</style>
