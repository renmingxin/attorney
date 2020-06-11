<template>
    <div class="container-user">
        <div class="container-user-head"></div>
        <div class="container-user-header">
            <div>
                <div class="touxiang">
                    <img src="@/images/u1.jpg" alt />
                </div>
                <div class="name">{{userMessage.name}}</div>
                <div class="call">
                    <span>联系方式：{{userMessage.phone}}</span>
                    <span>职称：{{tags.length}}级律师</span>
                </div>
                <div class="classes">
                    <div v-for="(item,index) in tags" :key="index">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="container-user-body">
            <div class="container-user-body-left">
                <div class="nav">
                    <span :class="{active:activeNav === 1}" @click="activeNav = 1">回答</span>
                </div>
                <div class="content">
                    <div class="body-list">
                        <!-- <ul>
                            <li v-for="(item,index) in questionList2" :key="index">
                                <div class="question-list-content">
                                    <div class="title" @click="goQuestionDetailsPage(item)">{{item.title}}</div>
                                    <div
                                        class="content"
                                        @click="goQuestionDetailsPage(item)"
                                    >{{item.content}}</div>
                                </div>

                                <div class="question-list-right">
                                    <span>{{item.create_time}}</span>
                                </div>
                            </li>
                        </ul> -->
                        
                    </div>
                </div>
            </div>
            <div class="container-user-body-right">
                <div class="article">
                    <div class="title">最新文章</div>
                    <div class="article-list">
                        <ul>
                            <li v-for="(item,index) in articleList" :key="index">
                                <div class="article-list-left">
                                    <img src="@/images/t1.jpg" alt />
                                </div>
                                <div class="article-list-right">
                                    <div>
                                        <div class="title2">#{{item.title}}#</div>
                                        <div>{{item.read}}亿阅读 {{item.taolun}}亿讨论</div>
                                    </div>
                                    <div class="date">{{item.date}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="comment">
                    <div class="title">最新评论</div>
                    <div class="comment-list">
                        <ul>
                            <li v-for="(item,index) in commentList" :key="index">
                                <div class="comment-list-left">
                                    <img src="@/images/u1.jpg" alt />
                                </div>
                                <div class="comment-list-right">
                                    <div>
                                        <span style="color:#751a29">{{userMessage.name}}：</span>
                                        <span>{{item.comment}}</span>
                                    </div>
                                    <div>
                                        <div>
                                            <span class="iconfont icon-qipao"></span>
                                            <span>回复</span>
                                        </div>
                                        <div style="margin-left:30px">
                                            <span class="iconfont icon-zan1"></span>
                                            <span>赞</span>
                                        </div>
                                    </div>
                                    <div class="time" style="color:#aaa">{{item.date}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            activeNav: 1,
            articleList: [
                {
                    id: 1,
                    img: '',
                    title: '新生向父母讨要4000生活费遭拒',
                    read: '4.5',
                    taolun: 2,
                    date: '2019年09月01日'
                },
                {
                    id: 2,
                    img: '',
                    title: '新生向父母讨要4000生活费遭拒',
                    read: '4.5',
                    taolun: 2,
                    date: '2019年09月01日'
                },
                {
                    id: 3,
                    img: '',
                    title: '新生向父母讨要4000生活费遭拒',
                    read: '4.5',
                    taolun: 2,
                    date: '2019年09月01日'
                },
                {
                    id: 4,
                    img: '',
                    title: '新生向父母讨要4000生活费遭拒',
                    read: '4.5',
                    taolun: 2,
                    date: '2019年09月01日'
                },
                {
                    id: 5,
                    img: '',
                    title: '新生向父母讨要4000生活费遭拒',
                    read: '4.5',
                    taolun: 2,
                    date: '2019年09月01日'
                }

            ],
            commentList: [
                {
                    id: 1,
                    img: '',
                    name: '泰和泰之星',
                    comment: '相信',
                    date: '40分钟之前'
                },
                {
                    id: 2,
                    img: '',
                    name: '泰和泰之星',
                    comment: '是的',
                    date: '40分钟之前'
                },
                {
                    id: 3,
                    img: '',
                    name: '泰和泰之星',
                    comment: '没错',
                    date: '40分钟之前'
                },
            ],
            userMessage: {},
            tags: [],
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.getUserDetails();
        this.getIssueList();
    },
    methods: {
        getUserDetails() {
            let userId = this.$route.params.userId;
            let msg = {
                userId
            }
            let callback = {
                onOk: (data) => {
                    if (!data.errno) {
                        this.userMessage = data;
                        this.tags = JSON.parse(data.tags);
                    }
                },
                onError: (error) => {
                    console.log(error)
                }
            }
            this.$Http.post('/users/getUserDetails', msg, callback)
        },
        getIssueList(){
            let userId = this.$route.params.userId;
            let msg = {
                userId
            }
            let callback = {
                onOk: (data) => {
                   if(!data.errno){
                       if (!data.errno) {
                            console.log(data);
                        }
                   }
                },
                onError: (error) => {
                    console.log(error)
                }
            }
            this.$Http.post('/issue/selectAnswerByUserid', msg, callback)
        },
    }
}
</script>

<style lang="less" scoped>
.test-border {
    border: 1px solid red;
}
.row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.container-user {
    &-head {
        height: 150px;
        width: 100%;
        background: url("../../images/head2.jpg");
        background-size: 100%;
    }
    &-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            .touxiang {
                border-radius: 50%;
                width: 120px;
                height: 120px;
                border: 10px solid rgba(255, 255, 255, 0.7);
                overflow: hidden;
                margin-top: -50px;
                img {
                    width: 120px;
                    height: 120px;
                }
            }
            .name {
                font-size: 24px;
                margin: 10px 0 10px 0;
            }
            .call {
                margin: 10px 0 20px 0;
                > span {
                    &:nth-child(1) {
                        margin-right: 80px;
                    }
                }
            }
            .classes {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                > div {
                    border-radius: 20px;
                    border: 1px solid #aaa;
                    color: #aaa;
                    padding: 3px 15px;
                    margin-right: 20px;
                }
            }
        }
    }
    &-body {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        margin-top: 70px;
        &-left {
            // .test-border();
            width: 65%;
            .nav {
                border-bottom: 1px solid #aaa;
                font-size: 20px;
                padding-bottom: 5px;
                > span {
                    padding: 0 20px;
                    cursor: pointer;
                    &:nth-child(1) {
                        border-right: 1px solid #aaa;
                    }
                }
                .active {
                    color: #751a29;
                    border-bottom: 3px solid #751a29;
                }
            }
            .content {
                text-align: center;
                padding-top: 90px;
                p {
                    font-size: 25px;
                    color: #aaa;
                }
            }
        }
        &-right {
            width: 35%;
            .article {
                .title {
                    font-size: 22px;
                    color: #751a29;
                    border-left: 8px solid #751a29;
                    padding: 5px 0 5px 15px;
                    margin-bottom: 10px;
                }
                &-list {
                    padding-left: 15px;
                    border-bottom: 1px solid #aaa;
                    ul > li {
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 20px;
                    }
                    &-left {
                        margin-right: 20px;
                        img {
                            width: 105px;
                            height: 105px;
                        }
                    }
                    &-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .title2 {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                        .date {
                            color: #aaa;
                        }
                    }
                }
            }
            .comment {
                margin-top: 20px;
                .title {
                    font-size: 22px;
                    color: #751a29;
                    border-left: 8px solid #751a29;
                    padding: 5px 0 5px 15px;
                    margin-bottom: 10px;
                }
                &-list {
                    ul > li {
                        margin-bottom: 10px;
                    }
                    &-left {
                        margin-right: 20px;
                        img {
                            border-radius: 50%;
                            width: 80px;
                            height: 80px;
                        }
                    }
                    &-right {
                        flex: 1;
                        > div {
                            margin-bottom: 15px;
                            &:nth-child(1) {
                                font-size: 20px;
                            }
                            &:nth-child(2) {
                                font-size: 18px;
                                display: flex;
                                flex-direction: row;
                                justify-content: flex-end;
                                .iconfont {
                                    font-size: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
