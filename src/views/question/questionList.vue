<template>
    <div class="container">
        <div class="container-head" @click="goUserPage"></div>
        <div class="container-main">
            <div class="container-header">
                <div class="header-top">
                    <span>全部问题</span>
                    <span>共{{questionCount}}问题</span>
                </div>
                <div class="header-main">
                    <ul>
                        <li v-for="(item,index) in formatLaw.slice(0,3)" :key="index"><span>{{item}}</span></li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in formatLaw.slice(3,6)" :key="index"><span>{{item}}</span></li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in formatLaw.slice(6,9)" :key="index"><span>{{item}}</span></li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in formatLaw.slice(9,12)" :key="index"><span>{{item}}</span></li>
                    </ul>
                    <ul>
                        <li v-for="(item,index) in formatLaw.slice(12,15)" :key="index"><span>{{item}}</span></li>
                    </ul>
                </div>
            </div>
            <div class="container-body">
                <div class="body-nav">
                    <div class="body-nav-left">
                        <div :class="{navActive:navActive === 'navActive1'}" @click="changePage('navActive1')">新提问</div>
                        <div :class="{navActive:navActive === 'navActive2'}" @click="changePage('navActive2')">高悬赏问题</div>
                    </div>
                    <div class="body-nav-right">
                        <div @click="goIssue">
                            <span class="iconfont icon-fabu"></span>
                            <span>发布</span>
                        </div>
                    </div>
                </div>
                <div class="body-list">
                    <ul v-if="navActive === 'navActive1'">
                        <li v-for="(item,index) in questionList" :key="index">
                            <!-- <div class="question-list-money" >
                                <span class="iconfont icon-money2"> </span>
                                <span class="money">{{item.money}}</span>
                            </div> -->
                            <div class="question-list-content">
                                <div class="title" @click="goQuestionDetailsPage(item)">{{item.title}}</div>
                                <div class="pay">
                                    <span class="iconfont icon-biaoqian"></span>
                                    <span>支付宝</span>
                                    <span>信用卡</span>
                                    <span>支付平台</span>
                                </div>
                                <div class="content" @click="goQuestionDetailsPage(item)">{{item.content}}</div>
                            </div>
                           
                            <div class="question-list-right">
                                <span>{{item.answer}}回答</span>
                                <!-- <span>{{item.date}}</span> -->
                            </div>
                        </li> 
                    </ul>
                    <ul v-if="navActive === 'navActive2'">
                        <li v-for="(item,index) in questionList" :key="index">
                            <div class="question-list-money">
                                <span class="iconfont icon-money2"> </span>
                                <span class="money">{{item.money}}</span>
                            </div>
                            <div class="question-list-content">
                                <div class="title" @click="goQuestionDetailsPage(item)">{{item.title}}</div>
                                <div class="pay">
                                    <i class="iconfont icon-biaoqian"></i>
                                    <span>支付宝</span>
                                    <span>信用卡</span>
                                    <span>支付平台</span>
                                </div>
                                <div class="content" @click="goQuestionDetailsPage(item)">{{item.content}}</div>
                            </div>
                           
                            <div class="question-list-right">
                                <span>{{item.answer+3}}回答</span>
                                <span>{{item.date}}</span>
                            </div>
                        </li> 
                    </ul>
                    <div class="page">
                        <Page :total="questionList.length" size="small" show-total />
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
  
<script>
// import { Button } from 'iview';
export default {
    
  	data () {
		return {
            questionCount:760,
            lawList:[
                '婚姻法','合同法','价格法',
                '审计法','刑事诉讼法','民事诉讼法',
                '拍卖法','未成年人保护法','广告法',
                '总裁法','行政复议法','行政处罚法',
                '会计法','诉讼法','婚姻法15',
                '婚姻法16',
                '婚姻法17',
            ],
            questionList:[
                {
                    money:100,
                    title:'我女儿半岁的时候我老公跟我闹离婚我家婆把孩子就抱回去老家带只给我老公发孩子的视频。还教我女儿喊我疯',
                    content:'子，还让教我女儿打人。女儿他们带了两年多。这两年我也有给孩子买奶粉看孩子把孩子接出来。可是孩子还是跟他奶奶亲。我老公跟我和好了他们就开始各种抱怨抱怨。我就把孩子接回家来了。孩子三岁了。太多缺点跟坏习惯都是他们带的。我不8怪他们。现在孩子接回来了。自己带着。我女儿只要太调皮我一说她或是凶她打她。她见了她爷爷奶奶都会去告状。他爷爷奶奶就会说我。给她长志不把孩子带去他家里他爸爸就说我把孩子带走了也不带来他家里。他爸不愿意来我家意思就是他想孙子我还得带回去。可是我女儿一看到他们就不愿意回家。现在两三个月了。回来。女儿打架抢小朋友玩具。吃饭几个钟。以前她奶奶带的时候正吃饭的时候不吃饭。过后就给他买零食吃。人不大脾气大得很。我头疼得很。现在很不想让孩子去见他爷爷奶奶了。他奶奶说她带两年都舍不得摸一下她。我这次回来就打她。反正喊我哄。我女儿我怎么说她都不会去理睬你的那种。我也不想发她凶她。我也不是天天打她。实在是说不听了才会打她。现在搞的我里外都不是人。今天去市场他不愿意回家。他爷爷就恶狠狠的瞪我。就差打人了。我现在真的不知道如何是好。我让他们带孩子。他们不让。想让我带。又不想让我管教孩子。我特别的恨那一家人我现在该不该让孩子继续见她爷爷奶奶。我女儿最喜欢打人耳光。在他爷爷面前直接敢打我耳光的那种。我肯定不会让我女儿发我耳光啊？他爷爷还一脸不高兴的恨我。气人%第二月22号发放，另外30%在3个月后发放。离职后，没有出具任何书面通知，原本延迟发放的3个月工资，答复是公司刚出的规定，离职人员提成再多延期3个月，即扣押6个月后发放。已打过秦淮区劳动监察大队举报投诉电话，但过程复杂。请问大家有什么更好的办法？',
                    type:'审计法、广告法',
                    answer:5,
                    date:'12分钟之前',
                    discuss:[
                        {
                            id:1,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'其实孩子的教育不能离开父母，不能交给家里的老人带，父母的管教才是最重要的，老人只会溺爱孩子，反而会害了孩子，让孩子养成很多不好的习惯，将来上了学，上了社会别人都会反感这样的人，因为别人可不会惯他们。到那时候吃亏的，可是孩子自己你最好以后都不要把孩子送回老家，就算自己再辛苦也要自己带交给他正确的与人相处的方式交给他正确的三观，用你自己的一言一行给她做榜样，好好的给她扳过来。',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                        {
                            id:2,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'孩子的启蒙老师是家长，家长在孩子的日常生活中起关键作用！因为你们不负责任的原因，导致了孩子如今的生活习惯！家长可以有错，但是不要影响到孩子，因为孩子是无辜的！现在孩子的一些问题只有作父母把责任担当起来！改掉孩子的一些问题，还给她一个美好的未来！',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                    ]
                },
                {
                    money:100,
                    title:'你好我支付宝花呗是自动还款的但我根据我的消费账单计算还款金额时发现多扣了我一百多块钱我该怎么追回来？',
                    content:'今天我联系那支付宝的两个客服开始第一个客服让我截图验证后来他给我发了我的那消费记录的账单我让他人工算一算他说是人工算的是那么多钱，然后巴拉巴拉然后巴拉巴拉然后巴拉巴拉然后巴拉巴拉然后巴拉巴拉',
                    type:'审计法、广告法',
                    answer:5,
                    date:'12分钟之前',
                    discuss:[
                        {
                            id:1,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'你好，这种情况只能是你来举证了，建议你把所有账单列清楚，然后把计算过程列出来，全部提供给客服核实，不过我感觉不一定是系统算错了，因为系统是计算机算到，就一个加减法计算机没有理由会错。',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                    ]
                },
                {
                    money:100,
                    title:'外遇出轨的男人和蟑螂的区别是什么？',
                    content:'外遇出轨的男人和蟑螂的区别是什么？',
                    type:'审计法、广告法',
                    answer:5,
                    date:'12分钟之前',
                    discuss:[
                        {
                            id:1,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'虽然说外遇出轨的男人和蟑螂都很令人讨厌，但是还是有区别的，遇到外遇出轨的男人，你想把他弄死，那你是犯法的，但是你要是想踩死一只蟑螂，那是非常正常的，这就是区别',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                        {
                            id:2,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'他们的区别是出轨的男人你不能踩死他，而你可以随意把讨厌的蟑螂踩死。',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                    ]
                },
                {
                    money:100,
                    title:'施工总承包将桥梁预制预应力板委托给厂家制作，是否属于违法分包呢？',
                    content:'施工总承包将桥梁预制预应力板委托给厂家制作，是否属于违法分包呢？',
                    type:'审计法、广告法',
                    answer:5,
                    date:'12分钟之前',
                    discuss:[
                        {
                            id:1,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'预应力楼板是指在生产过程中对受力钢筋施加张拉应力，以防止此板在工作时受拉部位的混凝土出现开裂，同时也充分发挥受拉钢筋的作用，节约钢材。',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                        {
                            id:2,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'那就看合同有问题没',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                    ]
                },
                {
                    money:100,
                    title:'在地铁站被骗去一个美容店做项目（那人最开始说是帮他们刷销量人气啥的）我以为给我做检查什么的',
                    content:'然后在我脸上抹洗脸的东西 然后给我说项目 我说不用了 她说那就做个消毒洗脸的清洁套餐 然后说原价98 我这是体验48就可以了 我说不用了 她说我这样出去皮肤会烂啊 然后就刷我的支付宝 最后又说3块的啥费用 然后我走了感觉被骗了 然后我就去找地铁里的协警 他们说不是他们管的 然后要我报警 我准备报警他们老板突然出现 说可以给我退钱 然后我就走了 我看到他们还在拉别人 我这么拿钱走了是不是不道德，',
                    type:'审计法、广告法',
                    answer:5,
                    date:'12分钟之前',
                    discuss:[
                        {
                            id:1,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'地铁站被骗去一个美容店做项目，最开始说是帮他们刷人气啥的，我觉得想贪小便宜的人，被骗是早晚的事，你如果没这想法，人家就不会有机可乘了，所以还是要靠自己的努力改变生活。',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                        {
                            id:2,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'朋友你一定要记住了！天下没有免费的午餐！类似的事情一定不要动心，不去赚小便宜就不会上当受骗了。OK',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                    ]
                },
                {
                    money:100,
                    title:'刚刚进职业大学私立，可以退学吗',
                    content:'私立职业学校，才进几天刚刚开始军训，不是很满意想退学可以退学费吗',
                    type:'审计法、广告法',
                    answer:5,
                    date:'12分钟之前',
                    discuss:[
                        {
                            id:1,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'我看是可以退学的因为现在的私乏职业大学大多了如果有不相当的情况我看是可以另选别的学校所以我看是可以退学的',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                        {
                            id:2,
                            img:'',
                            name:'Jack Lee',
                            date:'2019-09-01',
                            content:'退学是自愿的，自己想退学打申请就可以了，至于学费，还是要资询一下学校有关部门，退学是有一定风险的，自己一定要考虑清楚，把一切后果都要想到，自己是否可以承担的起。',
                            zan:123,
                            cai:8,
                            accept:false,
                            zanUi:0,
                        },
                    ]
                },
            ],
            formatLaw:[],

            navActive:'navActive1'
		}
	},
	computed:{

	},
	created(){

	},
	mounted(){
        this.get15question();
	},
	methods:{
		get15question(){
            let arr = [],
                lastArr = [];
            for (let i = 0; i < 14; i++) {
                arr.push(this.lawList[i]);
            }
            this.formatLaw = [...arr,'更多热门问题']
        },
        changePage(page){
            this.navActive = page;
            console.log(this.navActive)
        },
        goQuestionDetailsPage(data){
            this.$router.push({name:'questionDetails',params:{...data}})
        },
        goUserPage(){
            this.$router.push({name:'helpList'});
        },
        goIssue(){
            this.$router.push({name:'issue'})
        }
	}
}
</script>

<style scoped lang="scss">
    .container {
        cursor: default;
        width: 1200px;
        margin: 0 auto;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
    }
    .container-head {
        height: 400px;
        width: 100%;
        background: url('../../images/head.png') no-repeat;
        background-size:100% 100%;
    }
    .container-main {
        // margin: 0 auto;
        // width: 70%;
        /* height: 100px; */
    }
    .container-header {
    }
    .header-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: #aaa;
        padding: 15px 0 15px 0;
        background: white;
        margin: 10px 0;
        color: #741928;
    }
    .header-top >span:nth-child(1){
        border-left: 8px solid #741928;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
    }
    .header-top >span:nth-child(2){
        
    }
    .header-main {
        height: 130px;
        display: flex;
        flex-direction: row;
        padding: 20px 5px;
        background: white;
    }
    .header-main >ul{
        flex:1;
        padding: 5px 0 5px 30px;
        border:1px solid #aaa;
        border-style:dashed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .header-main >ul:last-child{
        // border: none;
    }
    .header-main>ul>li{
        display: inline-block;
    }
    .header-main>ul>li>span:hover{
        color: #aaa;
        cursor: pointer;
    }
    .container-body {
        margin-top: 15px;
        /* background: white; */
    }
    .body-nav {
        background: white;
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .body-nav-left>div {
        display: inline-block;
        line-height:30px;
        height: 30px;
        width: 120px;
        text-align: center;
        font-size: 18px;
        cursor: default;
    }
    .body-nav-left>div:nth-child(1){
        border-left: 8px solid #741928;
        /* border-right: 2px solid #741928; */
        padding-left: 10px;
    }
    .body-nav-left>div:nth-child(2){
        border-left: 2px solid #741928;
        padding-left: 10px;
        height: 18px;
        line-height: 18px;
    }
    .body-nav-right{
        cursor: pointer;
    }
    .body-nav-right>div{
        background: #741928;
        color: white;
        padding: 10px 12px;
    }
    .body-nav-right>div>span:nth-child(1){
        margin-right: 3px;
    }
    .body-list {
        padding: 10px 20px;
        background: white;
        font-size: 14px;
    }
    .body-nav .navActive{
        background: white;
        color: #7c4b4b;
    }
    .body-list>ul>li{
        height: 140px;
        padding: 20px 0 15px 0;
        border-bottom: 1px solid;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .body-list>ul>li>div{
        /* border: 1px solid red; */
    }
    .question-list-money {
        width: 7%;
        font-size:18px;
        color: orange;
    }
    .question-list-money .iconfont {
        font-size: 32px;
    }
    .question-list-money .money {
    }
    .question-list-content {
        padding-top: 13px;
        padding-left: 10px;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 18px;
    }
    .question-list-content div{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .question-list-content .pay {
        color: #aaa;
    }
    .question-list-content .iconfont{
        font-size: 30px;
        vertical-align: -2px;
    }
    .question-list-content .title:hover,.content:hover{
        opacity: .8;
        cursor: pointer;
    }
    .question-list-content .title {
        font-weight: bold;
        color:#7c4b4b;
    }
    .question-list-type {
        width: 15%;
    }
    .question-list-type .iconfont {
        font-size: 28px;
        color:#aaa;
    }
    .question-list-type >span:nth-child(2){
    }
    .question-list-right {
        padding-top: 13px;
        color: #aaa;
        width: 13%;
        min-width: 140px;
        text-align: right;
    }
    .question-list-right span:hover {
       /* opacity: .8; */
    }
    .question-list-right>span:nth-child(1){
        // border-right: 1px solid;
        padding-right: 3px;
        /* line-height: 60px; */
    }
    .body-list .page{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
