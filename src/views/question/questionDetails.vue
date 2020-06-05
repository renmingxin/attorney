<template>
    <div class="container-main">
		<div class="container-main-header">
			<div>
				<div>全部问题</div>
				<div>共760问题</div>
			</div>
		</div>
		<div class="container-main-body">
			<div>
				<div class="container-main-body-left">
					<div class="quesion">
						<div class="quesion-title">
							<span>{{questionMsg.title}}</span>
							<i class="iconfont icon-money2"><span>50</span></i>
						</div>
						<div class="quesion-content">
							<span>{{fliterContent}}</span>
							<span v-show="smallContent" class="quesion-content-icon" @click="showMoreContent">
								<span>展开</span>
								<span class="iconfont icon-xiangxia"></span>
							</span>
						</div>
						<div class="quesion-answer-btn">
							<span class="iconfont icon-fabu"></span>
							<span>我来回答</span>
						</div>
						<div class="quesion-richtext">
							<div class="edit_container">
								<quill-editor 
									v-model="richcContent" 
									ref="myQuillEditor" 
									:options="editorOption" 
									@blur="onEditorBlur($event)" 
									@focus="onEditorFocus($event)"
									@change="onEditorChange($event)">
								</quill-editor>
							</div>
						</div>
						<div class="quesion-sumbit" >
							<span v-on:click="saveHtml">提交回答</span>
						</div>
					</div>
					<div class="comment">
						<!-- <div v-html="myComment"></div> -->
						<div class="comment-header">
							<div class="count">{{answerCount}}个回答</div>
							<div class="line"></div>
						</div>
						<div class="comment-body">
							<ul>
								<li v-for="(item,index) in commentList" :key="index">
									<div class="comment-body-head">
										<div @click="goUserDetailsPage(item.user_id)">
											<img src="@/images/u1.jpg" alt="">
										</div>
										<div>
											<div class="name">{{item.name}}</div>
											<div class="date">{{item.create_time}}</div>
										</div>
									</div>
									<div class="comment-body-content" v-html="item.content"></div>
									<div class="comment-body-footer">
										<div class="comment-body-footer-left">
											<!-- <div class="zan-div">
												<div @click="zan(item.id)">
                                                    <span v-if="item.zanUi === 1" class="iconfont icon-zan2"></span>
                                                    <span v-if="item.zanUi === 0 || item.zanUi===2" class="iconfont icon-zan1"></span>
													<span >{{item.zan}}</span>
												</div>
												<div @click="cai(item.id)">
                                                    <span v-if="item.zanUi === 2" class="iconfont icon-daozan2"></span>
                                                    <span v-if="item.zanUi === 0 || item.zanUi === 1" class="iconfont icon-daozan1"></span>
													<span>{{item.cai}}</span>
												</div>
											</div>
											<div class="qipao">
												<span class="iconfont icon-qipao"></span>
												<span>评论</span>
											</div> -->
										</div>
										<div class="comment-body-footer-right" @click="caina(item.id)">
											<span v-if="item.accept === false" class="iconfont icon-xin"></span>
											<span v-if="item.accept" class="iconfont icon-xin2"></span>
                                            <span class="caina">采纳</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="comment-footer"></div>
					</div>
				</div>
				<div class="container-main-body-right">
					<div class="recommend">
						<div class="recommend-title">
							<span>特别推荐</span>
						</div>
						<div class="recommend-img">
							<Carousel autoplay :autoplay-speed="speed"  loop>
								<CarouselItem>
									<div class="demo-carousel">
										<img src="@/images/1.jpg" alt="">
									</div>
								</CarouselItem>
								<CarouselItem>
									<div class="demo-carousel">
										<img src="@/images/2.jpg" alt="">
									</div>
								</CarouselItem>
								<CarouselItem>
									<div class="demo-carousel">
										<img src="@/images/3.jpg" alt="">
									</div>
								</CarouselItem>
								<CarouselItem>
									<div class="demo-carousel">
										<img src="@/images/4.jpg" alt="">
									</div>
								</CarouselItem>
							</Carousel>
						</div>
						<div class="recommend-list">
							<ul>
								<li v-for="(item,index) in recommendList" :key="index">
									{{item.title}}
								</li>
							</ul>
						</div>
					</div>
					<div class="answer-list">
						<div class="answer-list-title">
							<div>
								<div>等你来答</div>
								<div style="cursor: pointer;">换一换</div>
							</div>
						</div>
						<div class="answer-list-list">
							<ul>
								<li v-for="(item,index) in answerList" :key="index">
									<div class="top">{{item.title}}</div>
									<div class="bottom">
										<div>
											<img src="@/images/u1.jpg" alt="">
											<span>等{{item.ask}}人想问</span>
										</div>
										<div>
											<span class="iconfont icon-fabu"></span>
											<span>我来答</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="help">
							<span>帮助更多人</span>
							<span class="iconfont icon-xiangyou-copy"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div> 
</template>

<script>
import { Carousel,CarouselItem } from 'iview';
export default {
	components:{
		Carousel,
		CarouselItem
	},
  	data () {
		return {
			questionMsg:{},
			fliterContent:'',
			smallContent:true,
			default:0,
			speed:3000,
			recommendList:[
				{title:'学知识产权法才能考知识产权管理师？'},
				{title:'赌资在100元以内请问这违纪违法吗'},
				{title:'知识产权的未来前景怎么样？'},
				{title:'典当车库期限满后卖给别人需本人同意？'},
			],
			answerList:[
				{
					title:'施工总承包将桥梁预制预应力板委托给厂家制作，是否属于违法分包呢？',
					ask:10000,
					user:'',
				},
				{
					title:'50离婚了，小儿子归我，六个多月了目前我妈在带，感觉离婚了过得很自在，大女儿一岁半给前妻，我不用付抚养',
					ask:13121,
					user:'',
				},
				{
					title:'在地铁站被骗去一个美容店做项目（那人最开始说是帮他们刷销量人气啥的）我以为给我做检查什么的',
					ask:15441,
					user:'',
				},
				{
					title:'我去，这是违规操作吗？这个号上面有一层银色的包裹的。求解这是违反《食品安全法》。违规操作。吗',
					ask:1141,
					user:'',
				},
				{
					title:'经济法里的销售免税药品怎么计算？',
					ask:345,
					user:'',
				},
				{
					title:'2019年8月玖富万卡会不会上征信报告，显示借款记录？',
					ask:10000,
					user:'',
				},
			],
			richcContent:'这个问题你有什么看法，展开来讲讲...',
			editorOption: {},
			commentList:[
			],
			myComment:'',
			answerCount:2,
		}
	},
	computed:{
		editor() {
            return this.$refs.myQuillEditor.quill;
        },
	},
	created(){

	},
	mounted(){
        this.getIssueAnswerList();
        this.questionMsg = this.$route.params;
        console.log(this.$route.params)
        // this.commentList = this.$route.params.discuss;
		this.fliterContent = this.questionMsg.content.substring(0,70) + '...';
	},
	methods:{
        getIssueAnswerList(){
            let msg = {
                question_id:this.$route.params.id,
            };
            console.log(msg)
            let callback = {
                onOk: (data) => {
                   if(!data.errno){
                       this.commentList = data;
                       console.log(data)
                   }
                },
                onError: (error) => {
                    console.log(error)
                }
            }
            this.$Http.post('/issue/selectIssueAnswerList', msg, callback)
        },

		showMoreContent(){
			this.smallContent = false;
			this.fliterContent = this.questionMsg.content;
		},
		onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        saveHtml(){
			let msg = {
                question_id:this.$route.params.id,
                user_id:sessionStorage.getItem('userId'),
                content:this.richcContent,
                create_time:new Date().toLocaleString()
            };
            console.log(msg)
            let callback = {
                onOk: (data) => {
                   if(data === null){
                       this.getIssueAnswerList();
                   }
                },
                onError: (error) => {
                    console.log(error)
                }
            }
            this.$Http.post('/issue/answerIssue', msg, callback)
        },
        caina(id){
            for (let i = 0; i < this.commentList.length; i++) {
                if(id === this.commentList[i].id){
                    this.commentList[i].accept = true;
                }else{
                    this.commentList[i].accept = false;
                }
            }
        },
        zan(id){
            for (let i = 0; i < this.commentList.length; i++) {
                if(id === this.commentList[i].id){
                    this.commentList[i].zan++;
                    this.commentList[i].zanUi = 1;
                }
            }
        },
        cai(id){
            for (let i = 0; i < this.commentList.length; i++) {
                if(id === this.commentList[i].id){
                    this.commentList[i].cai++;
                    this.commentList[i].zanUi = 2;
                }
            }
		},
        goUserDetailsPage(name){
			this.$router.push({name:'userDetails',params:{name:name}})
		}
	}
}
</script>

<style lang="less" scoped>
	.test-border{
		border: 1px solid red;
	}
	.container-main{
		width: 1200px;
        margin: 0 auto;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
		&-header{
			background: #751a29;
			color: white;
			height: 100px;
			display: flex;
			font-size: 18px;
			>div{
				width: 70%;
				margin: 0 auto;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				>div{
					padding: 5px 0 5px 10px;
					&:nth-child(1){
						border-left: 10px solid #fff;
					}
				}
			}
		}
		&-body{
			background: #fff;
			margin-top: 30px;
			padding-top: 15px;
			>div{
				// margin: 30px auto 0 auto;
				// width: 70%;
				display: flex;
				flex-direction: row;
				.container-main-body-left{
					width: 65%;
					padding-right: 30px;
					border-right: 1px solid #aaa;
					.quesion {
						&-title{
							font-size: 22px;
							line-height: 40px;
							i{
								font-size:35px;
								color: orange;
								>span{
									font-size: 20px;
								}
							}
						}
						&-content{
							color: #676767;
							position: relative;
							line-height: 30px;
							&-icon{
								font-size: 20px;
								position: absolute;
								right: 5px;
								bottom: 0;
								cursor: pointer;
							}
						}
						&-answer-btn{
							cursor: pointer;
							background: #751a29;
							padding: 15px 10px;
							color: white;
							display: inline-block;
							margin: 10px 0 30px 0;
							.iconfont{
								font-size: 20px;
								margin-right: 3px;
							}
							span:nth-child(2){
								font-size: 18px;
							}
						}
						&-richtext {
							// .test-border();
							height: 400px;
							.quill-editor{
								height: 320px;
								
							}
						}
						&-sumbit {
							display: flex;
							flex-direction: row-reverse;
							margin: 20px 0 30px 0;
							>span{
                                cursor: pointer;
								display: inline-block;
								background: #751a29;
								padding: 15px 20px;
                                color: white;
                                font-size: 18px;
								span{
									
								}	
							}
							
						}
					}
					.comment{
						&-header{
							display: flex;
							flex-direction: row;
							align-items: center;
							.count{
                                // width: 20%;
                                min-width: 100px;
								font-size:20px; 
							}
							.line{
								width: 90%;
								// height: 1px;
            					border-top: solid #ACC0D8 1px;
							}
						}
						&-body{
							ul>li{
								// .test-border();
								padding: 50px 0;
								border-bottom: 1px solid #aaa;
							}
							&-head{
								display: flex;
								flex-direction: row;
								align-items: center;
								img{
									border-radius: 50%;
									width: 40px;
									height: 40px;
									margin-right:15px;
								}
								.name{
									font-size:18px;
								}
								.date{
									font-size: 12px;
								}
							}
							&-content{
								line-height: 20px;
							}
							&-footer{
								margin-top:15px;
								display: flex;
								flex-direction: row;
								align-items: center;
								justify-content: space-between;
								&-left{
									display: flex;
									flex-direction: row;
									.zan-div{
										display: flex;
										flex-direction: row;
										align-items: center;
										justify-content: center;
										border: 1px solid #666;
										width: 165px;
										height: 40px;
										border-radius: 20px;
										padding: 10px 0;
										font-size: 20px;
										>div{
                                            cursor: pointer;
											>span{
												padding: 0 5px;
											}
											&:nth-child(1){
												border-right: 1px solid #666;
											}
											.iconfont{
												font-size:25px;
											}
										}
									}
									.qipao{
										display: flex;
										flex-direction: row;
										// align-items:flex-end;
										line-height: 50px;
										.iconfont{
											font-size: 20px;
											margin-left: 30px;
											margin-right:6px;
										}
									}
								}
								&-right{
									background: #751a29;
									color: white;
									padding: 10px 25px;
									font-size: 20px;
                                    border-radius: 20px;
                                    cursor: pointer;
                                    .caina{
                                        &:active{
                                            // color: red;
                                        }
                                    }
									.iconfont{
                                        font-size: 20px;
                                        
                                    }
                                    .icon-xin2{
                                        color: red;
                                    }
								}
							}
						}
					}
				}
				.container-main-body-right{
					padding-left: 35px;
					width: 35%;
					.recommend {
						&-title{
							font-size: 22px;
							color: #751a29;
							border-left: 10px solid #751a29;
							padding: 5px 0 5px 15px;
							margin-bottom: 10px;
						}
						&-img{
							height: 250px;
							.demo-carousel {
								height: 250px;
								>img{
									height: 100%;
									width: 100%;
								}
							}
						}
						&-list{
							margin-top: 15px;
							padding-bottom: 20px;
							border-bottom: 1px solid #aaa;
							ul{
								padding-left:16px;
								li{
									cursor: pointer;
									font-size: 18px;
									
									line-height: 35px;
									list-style-type: circle;
									&:hover{
										opacity: .8;
									}
								}
							}
							
						}
					}
					.answer-list{
						&-title{
							>div{
								margin: 30px 0;
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
								>div:nth-child(1){
									border-left: 10px solid #751a29;
									padding: 5px 0 5px 15px;
									color: #751a29;
									font-size: 22px;
								}
								>div:nth-child(2){
									font-size:18px;
									color: #666666;
								}
							}
						}
						&-list {
							color: #8c8c8c;
							line-height: 30px;
							.top{
                                font-size: 18px;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
							}
							.bottom{
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
								font-size: 16px;
								>div:nth-child(1){
									display: flex;
									align-items: center;
									img{
										border-radius: 50%;
										width: 25px;
										height: 25px;
										margin-right:3px;
									}
								}
								>div:nth-child(2){
									cursor: pointer;
									color: #751a29;
								}
							}
						}
						.help{
							margin-top: 40px;
							color:#751a29;
							font-size:20px;
							border-bottom: 1px solid #aaa;
							padding-bottom: 35px;
						}
					}
				}
			}
		}
	}
</style>
