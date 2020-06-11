<template>
    <div class="law-fluid">
        <div class="law-header-fluid law-fluid">
            <div class="law-header-container law-container">
                    <div class="logo" >
                        <span>你好！{{nickname}}{{roleType}}</span>
                        <!-- <img src="../assets/index/logo.png" alt=""> -->
                    </div>
                    <div class="tab-search">
                         <el-tabs v-model="activeName" >
                             <el-tab-pane label="问题" name="first" :key="2">
                                <el-input placeholder="请输入问题" v-model="input2" class="input-with-select"  prefix-icon="el-icon-search" size="medium">
                                    <el-button slot="append" @click="handleClick">搜索</el-button>
                                </el-input>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="nav-bar">
                        <ul>
                            <router-link tag="li" class="frist li-a" to="/question">问答</router-link>
                            <router-link tag="li" class="li-a" to="/homepage2">文档</router-link>
                            <router-link tag="li" class="li-a" to="/helpList">律师</router-link>
                            <div class="clear"></div>
                        </ul>
                        <div class="login">
                             <el-button size="medium" @click="goUserDetails">用户中心</el-button>
                        </div>
                    </div>
            </div>
        </div>
        <div>
            <router-view class="index-content-fluid law-fluid" />
        </div>
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'; 
    import bus from '@/script/bus'
    export default {
    name: 'homePage',
    components: {
        // HelloWorld,
    },
    mounted () {
        window.addEventListener("scroll", this.handleScroll, true);
    },
    data() {
        return {
            activeName: 'first',
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            nickname:sessionStorage.getItem('nickname'),
            roleType:sessionStorage.getItem('roleType') === '2' ? '律师':'用户',
            tableData: [{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'11分钟前'
                },{
                name: '挖掘机师傅风险告知卡（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'昨天'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'一周前'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'2019.08.08'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'11分钟前'
                },{
                name: '挖掘机师傅风险告知卡（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'昨天'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'一周前'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'2019.08.08'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'2019.08.08'
            }],
            tableData1: [{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'11分钟前'
                },{
                name: '挖掘机师傅风险告知卡（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'昨天'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'一周前'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'2019.08.08'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'11分钟前'
                },{
                name: '挖掘机师傅风险告知卡（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'昨天'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'一周前'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'2019.08.08'
                },{
                name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                score: '200',
                updater: '血色离殇',
                download:'999',
                time:'2019.08.08'
            }],
            topRegulations:[
                {index:'1',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'2',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'3',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'4',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'5',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'6',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'7',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'8',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'9',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'10',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
            ],
            topModules:[
                {index:'1',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'2',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'3',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'4',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'5',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'6',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'7',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'8',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'9',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                {index:'10',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
            ],
            count:0,
            count1:0,
            see1:false,
            see2:false,
            see3:false,
            see4:false,
            see5:false
        }
    },
    methods: {
        handleClick() {
            this.getIssueList(this.input2)
        },
        getIssueList(title){
            let msg = {
                title:title
            };
            let callback = {
                onOk: (data) => {
                   if(!data.errno){
                       bus.$emit('getIssueList',data);
                   }
                },
                onError: (error) => {
                    console.log(error)
                }
            }
            this.$Http.post('/issue/selectIssue', msg, callback)
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 ===0) {
            return 'odd-row';
            } else if (rowIndex%2=== 1) {
            return 'even-row';
            }
            return '';
        },
        changeSection(){
            if(this.count ==0){
                this.tableData = [
                    {
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'11分钟前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                }]
                this.topRegulations=[
                    {index:'1',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'2',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'3',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'4',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'5',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'6',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'7',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'8',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'9',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'10',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                ],
                this.count =1;
            }else if(this.count ==1){
                this.tableData = [{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                }]
                this.topRegulations=[
                    {index:'1',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'2',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'3',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'4',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'5',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'6',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'7',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'8',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'9',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'10',value:'挖掘机师傅风险告知卡机师傅机师'},
                ],
                this.count =2;
            }else if(this.count ==2){
                this.tableData = [{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'11分钟前'
                    },{
                    name: '挖掘机师傅风险告知卡（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'昨天'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                }]
                this.topRegulations=[
                    {index:'1',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'2',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'3',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'4',value:'挖掘机师傅风险告知卡机师傅机师'}
                ],
                this.count =0;
            }
        },
        changeSection1(){
            if(this.count1 ==0){
                this.tableData1 = [
                    {
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'11分钟前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                }]
                this.topModules=[
                    {index:'1',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'2',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'3',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'4',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'5',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'6',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'7',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'8',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'9',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'10',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                ],
                this.count1 =1;
            }else if(this.count1 ==1){
                this.tableData1 = [{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                }]
                this.topModules=[
                    {index:'1',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'2',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'3',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'4',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'5',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'6',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'7',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'8',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'9',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'10',value:'挖掘机师傅风险告知卡机师傅机师'},
                ],
                this.count1 =2;
            }else if(this.count1 ==2){
                this.tableData1 = [{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'11分钟前'
                    },{
                    name: '挖掘机师傅风险告知卡（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'昨天'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'一周前'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                    },{
                    name: '挖掘机师傅风险告知卡机师傅机师…（3页）',
                    score: '200',
                    updater: '血色离殇',
                    download:'999',
                    time:'2019.08.08'
                }]
                this.topModules=[
                    {index:'1',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'2',value:'挖掘机师傅风险告知卡机师傅机师'},
                    {index:'3',value:'挖掘机风险告知卡 挖掘机风险告知卡'},
                    {index:'4',value:'挖掘机师傅风险告知卡机师傅机师'}
                ],
                this.count1 =0;
            }
        },
        seeMoreSchoolList(){
           if(this.see1== false){
               this.see1= true;
               return;
           }
            if(this.see1== true){
                this.see2= true;
                  return;
            }
            if(his.see2== true){
                this.see3= true;
                return;
            }
            if(his.see3== true){
                this.see4= true;
                return;
            }
            if(his.see4== true){
                this.see5= true;
                return;
            }
        },
        goUserDetails(){
            this.$router.push({name:'userDetails',params:{userId:sessionStorage.getItem('userId')}});
        },
        handleScroll(){
            var scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
                var windowHeight =
                document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
                var scrollHeight =
                document.documentElement.scrollHeight || document.body.scrollHeight;
                if (scrollTop + windowHeight == scrollHeight) {
                    this.seeMoreSchoolList();
                return false;
                }
        },
    }
    }
</script>

<style lang="scss" scoped>
@import '../common/styles/variables.scss';
.law-header-fluid{
    background-color: $bg-color-white;
    height: 5rem;

}
.law-header-container{
    height: 5rem;
    .logo{
        width: 10rem;
        height: 5rem;
        padding-top: 1.5rem;
        box-sizing: border-box;
        float: left;
        // border:1px solid;
        font-size: 20px;
        color:#741b29;
        img{
            width: 100%;
            height: 2rem;
        }
    }
    .tab-search{
        padding-top: 0.5rem;
        margin-left: 3rem;
        display: inline-block;
    }
    .nav-bar{
        float: right;
        height: 1.8rem;
        vertical-align: top;
        padding-top: 1.6rem;
        .li-a {
            text-decoration: none;
            font-size: 0.8rem;
            color: $color1;
            margin-right: 2rem;
            line-height: 1.9rem;
            &:hover{
                color: $themeColor;
            }
        }
        ul{
            display: inline-block;
            vertical-align: top;
            li{
                list-style: none;
                float: left;
                cursor: pointer;
                a{
                    text-decoration: none;
                    font-size: 0.8rem;
                    color: $color1;
                    margin-right: 2rem;
                    line-height: 1.9rem;
                }
                a:hover{
                    color: $themeColor;
                }
            }
            li.first{
                a{
                    color: $themeColor;
                }
            }
        }
        .login{
            display: inline-block; 
            vertical-align: top;     

        }
    }
}
.index-content-fluid{
    // border:1px solid red;
    // background-color: $bg-color-gray;
    padding-bottom: 2rem;
    .index-content-container{
        display: flex;
        display: -webkit-flex; 
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        padding-top: 20px;

        .aside{
            // flex-grow: 1;
            width: 12rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch;
            .block{
                background-color: $bg-color-white;
                .top{
                    .title{
                        height: 1.5rem;
                        line-height: 1.5rem;
                        color: $bg-color-white;
                        font-size: 0.7rem;
                        text-align: center;
                        background-color: $themeColor;
                    }
                }
            }
            .block1{
                .cont{
                    .inner{
                      margin-left: 1rem; 
                      margin-right: 1rem;
                      padding-top: 1rem;
                       padding-bottom: 1rem;
                       border-bottom: 1px solid #eaeaea;
                        p{
                            font-size: 0.7rem;
                           
                            color: $color3;
                        }
                        span{
                            display: inline-block;
                            font-size: 0.6rem;
                            color: $color4;
                            margin-right: 0.5rem;
                            
                        }
                    }
                    .more{
                        text-align: center;
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                        a{
                            font-size: 0.8rem;
                            color: $themeColor;
                            text-decoration: none;
                        }
                    }
                }
            }
            .block2{
                .cont{
                    .inner{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                        margin: 0 1rem;
                        height: 2.2rem;
                        line-height: 2.2rem;
                         border-bottom: 1px solid #eaeaea;
                        .left{
                            font-size: 0.7rem;
                            color: #303133;
                        }
                        .right{

                        }
                    }
                    .inner.last{
                         border-bottom: 0px;
                    }

                }
            }
        }
        .section{
            width: 47rem;
            .block{
                width: 100%;
                height: 16rem;
                .small{
                    height: 16rem;
                    width: 100%;
                    img{
                        height: 16rem;
                        width: 100%;
                    }
                }
            }
            .bottom{
                margin-top: 1rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: nowrap;
                .left{
                    background: $bg-color-white;
                    padding: 1rem;
                    width: 34rem;
                    box-sizing: border-box;
                    .top{
                        .tit{
                            color: $color3;
                            padding-left: 0.5rem;
                            border-left: 4px solid $themeColor;
                            line-height: 0.8rem;
                            font-size: 0.8rem;
                        }
                        .more{
                            float: right;
                            font-size: 0.7rem;
                            color: $color4;
                            line-height: 0.8rem;
                            text-decoration: none;
                        }
                        margin-bottom: 1rem;
                    }
                    .cont{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        align-items: flex-start;
                        .block{
                            background-color: $bg-color-gray2;
                            box-sizing: border-box;
                            padding: 1rem 1.6rem;
                            height: 9.5rem;
                            width: 7.6rem;
                            .img{
                                margin: 0 auto;
                                height: 4rem;
                                width: 4rem;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .cont2{
                                .tit{
                                    font-size: 0.7rem;
                                    color: $color3;
                                    line-height: 1rem;
                                    margin-top: 0.6rem;
                                }
                                .tip{
                                    display: block;
                                    text-align: center;
                                    font-size: 0.7rem;
                                    color: $color4;
                                    .strong{
                                        font-size: 0.7rem;
                                        color: $themeColor;
                                    }
                                }
                            }
                        }
                    }
                }
                .rightp{
                    width: 12rem;
                    box-sizing: border-box;
                    
                    padding: 1rem;
                    background-color: $bg-color-white;
                    .top{
                        .tit{
                            color: $color3;
                            padding-left: 0.5rem;
                            border-left: 4px solid $themeColor;
                            line-height: 0.8rem;
                            font-size: 0.8rem;
                        }
                        margin-bottom: 1rem;
                    }
                    .cont{
                        position: relative;
                        .block1{
                            h6{ 
                                font-size: 0.7rem;
                                color: $color4;
                            }
                            .tip{
                                display: block;
                                font-size: 0.7rem;
                                color: $color4;
                                 line-height: 1.4rem;
                                 margin-bottom: 1rem;
                                .strong{
                                    font-size: 1rem;
                                     line-height: 1.4rem;
                                    color: $themeColor;
                                }
                            }
                        }
                        .right-img{
                            position: absolute;
                            right: 0px;
                            bottom: 0px;
                        }
                    }
                }
            }
        }
    }
    .regulations-container{
        .top{
            margin-top: 1rem;
            margin-bottom: 1rem;
            .left{
                .tit{
                    display: inline-block;
                    font-size: 1.1rem;
                    color: $color3;
                    line-height: 1.5rem;
                }
                .total{
                    display: inline-block;
                    font-size: 0.7rem;
                    color: $color4;
                    line-height: 1.5rem;
                    margin-left: 1rem;
                    margin-right: 1rem;
                    .strong{
                        color: $color5;
                        display: inline-block;
                         line-height: 1.5rem;
                    }
                }
            }
            .right{
                float: right;
            }
        }
        .content{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            .table-left{
                width: 41rem;
            }
            .top-right{
                width: 18rem;
                box-sizing: border-box;
                height: 19.5rem;
                background-color: $bg-color-white;
                .top{
                    padding: 0 1rem;
                    height: 1.5rem;
                    background-color: $themeColor;
                    color: $bg-color-white;
                    margin: 0px;
                    line-height: 1.5rem;
                    .right{
                        float: right;
                        font-size: 0.7rem;
                    }
                    .tit{
                        display: inline-block;
                         font-size: 0.7rem;
                    }   
                }
                .inner{
                    padding: 0 1rem;
                    ul{
                        li{
                            margin-top: 0.6rem;
                            list-style: none;
                           
                            span.score{
                                display: inline-block;
                                font-size: 0.6rem;
                                line-height: 0.7rem;
                                text-align: center;
                                color: $bg-color-white;
                                border-radius: 0.7rem;
                                background-color: $themeColor;
                                width: 0.7rem;
                                height: 0.7rem;
                                margin-right: 0.5rem;
                            }
                            span.score2{
                                background-color: #000000;
                            }
                            span.des{
                                font-size: 0.7rem;
                                color: $color3;
                            }
                        }
                    }
                }
            }
        }
    }
}


</style>