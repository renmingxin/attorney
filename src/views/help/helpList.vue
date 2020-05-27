<template>
    <div class="container-help">
        <div class="container-help-nav">
			<div class="container-help-nav-shaixuan">
				<div>筛选：</div>
				<div class="kuang" v-for="(item,index) in shaixuanList" :key="index">{{item}}</div>
				<div class="kuang" @click="addshaixuan">+</div>
			</div>
		</div>
		<div class="container-help-body">
			<div class="container-help-body-left">
				<div class="container-help-body-left-header">
					<span class="iconfont icon-yonghuzu"></span>
					<span>用户推荐</span>
				</div>
				<div class="user-list">
					<ul>
						<li v-for="(item,index) in userList" :key="index">
							<div class="user-list-left">
								<span 
								class="iconfont icon-jiaobiao"
								:class="{
									r1:item.rank==1,
									r2:item.rank==2,
									r3:item.rank==3,
								}"
								>
									<span>{{item.rank}}</span>
								</span>
								<img @click="goUserDetailsPage(item.name)" src="@/images/u1.jpg" alt="">
							</div>
							<div class="user-list-right">
								<div @click="goUserDetailsPage(item.name)" style="cursor: pointer;">{{item.name}}</div>
								<div>
									<div>
										<span class="iconfont icon-qian" style="font-size:20px"></span>
										<span>积分	{{item.jifen}}</span>
									</div>
									<div>
										<span class="iconfont icon-zan1" style="font-size:20px"></span>
										<span>赞同	{{item.zan}}</span>
									</div>
									<div>
										<span class="iconfont icon-xin"></span>
										<span>采纳	{{item.caina}}</span>
									</div>
								</div>
								<div>
									<span>擅长话题：</span>
									<span style="color:#751a29">{{item.adept}}</span>
								</div>
							</div>
						</li>
					</ul>
					 <div class="page">
                        <Page :total="userList.length" size="small" show-total />
                    </div>
				</div>
			</div>
			<div class="container-help-body-right">
				<div class="container-help-body-right-header">
					<span>相关大牛推荐</span>
				</div>
				<div class="recommend-list">
					<ul>
						<li v-for="(item,index) in recommendList" :key="index">
							<div class="rank">{{item.rank}}</div>
							<div class="touxiang">
								<span 
								v-if="item.rank < 4"
								class="iconfont icon-huangguan"
								:class="{
									r1i:item.rank == 1,
									r2i:item.rank == 2,
									r3i:item.rank == 3,
								}"
								></span>
								<div
								:class="{
									r1d:item.rank == 1,
									r2d:item.rank == 2,
									r3d:item.rank == 3,
								}"
								>
									<img @click="goUserDetailsPage(item.name)" src="@/images/u1.jpg" alt="">
								</div>
							</div>
							<div class="details">
								<div @click="goUserDetailsPage(item.name)" style="cursor: pointer;">{{item.name}}</div>
								<div>
									<span>{{item.huida}}w回答</span>
									<span>·</span>
									<span>{{item.zan}}w+点赞</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </div> 
</template>

<script>
import {Page} from 'iview'
export default {
	components:{
		Page
	},
  	data () {
		return {
			shaixuanList:['刑法','婚姻法','合同法'],
			userList:[
				{
					rank:1,
					img:'',
					name:'泰和泰之星',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'刑法、婚姻法、刑事诉讼法',
				},
				{
					rank:2,
					img:'',
					name:'爱好和平的小学生',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'未成年人保护法',
				},
				{
					rank:3,
					img:'',
					name:'pop.rich',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'刑事诉讼法',
				},
				{
					rank:4,
					img:'',
					name:'无人问津的小律师',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'刑法、婚姻法、未成年人保护法、合同法、刑事诉讼法',
				},
				{
					rank:5,
					img:'',
					name:'泰和泰之星2',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'刑法、婚姻法、未成年人保护法、合同法、刑事诉讼法',
				},
				{
					rank:6,
					img:'',
					name:'热心网友',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'刑法、婚姻法、未成年人保护法、合同法、刑事诉讼法',
				},
				{
					rank:7,
					img:'',
					name:'我得意的笑松哥',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'刑法、婚姻法、未成年人保护法、合同法、刑事诉讼法',
				},
				{
					rank:8,
					img:'',
					name:'追梦人',
					jifen:2000,
					zan:200,
					caina:18,
					adept:'合同法、刑事诉讼法',
				},
				
			],
			recommendList:[
				{
					rank:1,
					img:'',
					name:'泰和泰之星',
					huida:'3',
					zan:12,
				},
				{
					rank:2,
					img:'',
					name:'追梦人',
					huida:'3',
					zan:12,
				},
				{
					rank:3,
					img:'',
					name:'我得意的笑松哥',
					huida:'3',
					zan:12,
				},
				{
					rank:4,
					img:'',
					name:'泰和泰之星',
					huida:'3',
					zan:12,
				},
				{
					rank:5,
					img:'',
					name:'泰和泰之星',
					huida:'3',
					zan:12,
				},
			]
		}
	},
	computed:{

	},
	created(){

	},
	mounted(){

	},
	methods:{
		addshaixuan(){
			let item = window.prompt('添加筛选的的类别：');
			this.shaixuanList.push(item);
		},
		goUserDetailsPage(name){
			this.$router.push({name:'userDetails',params:{name:name}})
		}
	}
}
</script>

<style lang="scss" scoped>
	.test-border{
		border: 1px solid red;
	}
	.row-center{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.container-help{
		&-nav{
			background: #751a29;
			height: 90px;
			width: 100%;
			display: flex;
		flex-direction: row;
		align-items: center;
			&-shaixuan{
				// .test-border();
				display: flex;
		flex-direction: row;
		align-items: center;
				width: 70%;
				margin: 0 auto;
				color: white;
				height: 35px;
				font-size: 16px;
				>div{
					
					&:nth-child(1){
						height: 35px;
						line-height: 35px;
						border-left: 10px solid #fff;
						font-size: 18px;
						padding: 0 10px;
					}
				}
				.kuang{
					padding: 3px 8px;
					border: 1px solid #fff;
					margin-right: 10px;
					min-width: 60px;
					text-align: center;
					cursor: pointer;
				}
			}
		}
		&-body{
			width: 70%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			margin-top: 20px;
			&-left{
				width: 65%;
				height: 100px;
				// .test-border();
				padding-right: 30px;
				&-header{
					padding-left: 7px;
					color: #751a29;
					font-size: 22px;
					border-bottom: 1px solid rgb(138, 126, 126);
					padding-bottom: 25px;
					.iconfont{
						font-size: 22px;
						margin-right: 15px;
					}
				}
				.user-list{
					ul>li{
						// .test-border();
						display: flex;
						flex-direction: row;
						padding:20px 0;
						border-bottom: 1px solid #aaa;
					}
					&-left{
						// .test-border();
						// width: 150px;
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						img{
							border-radius: 50%;
							width: 50px;
							height: 50px;
							cursor: pointer;
						}
						.icon-jiaobiao{
							font-size: 35px;
							color: #ccc;
							position: relative;
							>span{
								position: absolute;
								color: white;
								top:5px;
								left: 12px;
								font-size: 18px;
							}
						}
						.r1{
							color: #751a29;
						}
						.r2{
							color: #88e066;
						}
						.r3{
							color: #ffd75e;
						}
					}
					&-right{
						// .test-border();
						margin-left: 10px;
						>div{
							line-height: 30px;
							&:nth-child(1){
								font-size: 20px;
							}
							&:nth-child(2){
								display: flex;
								flex-direction: row;
								align-items: center;
								>div{
									margin-right: 15px;
								}
							}
						}
					}
				}
				.page{
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			&-right{
				width:35%;
				height: 100px;
				// .test-border();
				&-header{
					font-size: 22px;
					color: #751a29;
					border-left: 10px solid #751a29;
					padding: 5px 0 5px 15px;
					margin-bottom: 20px;
				}
				.recommend-list{
					ul>li{
						display: flex;
		flex-direction: row;
		align-items: center;
						// .test-border();
						height: 70px;
						padding-left: 25px;
						margin-bottom: 30px;
						>div{
							margin-right: 20px;
						}
						.touxiang{
							position: relative;
							.iconfont{
								font-size: 30px;
								
								position: absolute;
								top:-20px;
								left: 10px;
							}
							>div{
								border-radius: 50%;
								width: 50px;
								height: 50px;
								overflow: hidden;
								img{
									cursor: pointer;
									// border-radius: 50%;
									width: 50px;
									height: 50px;
								}
							}
						}
						.details{
							>div{
								line-height: 30px;
								&:nth-child(1){
									font-size: 20px;
								}
								&:nth-child(2){
									color: #aaa;
								}
							}
						}
						.r1d{
							border: 4px solid #fdca00;

						}
						.r2d{
							border: 4px solid #edbf9d;

						}
						.r3d{
							border: 4px solid #c2dcff;

						}
						.r1i{
							color: #fdca00;
						}
						.r2i{
							color: #edbf9d;
						}
						.r3i{
							color: #c2dcff;
						}
					}
				}
			}
		}
	}
</style>
