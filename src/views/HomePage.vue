<template>
    <div class="law-fluid">
        <div class="law-header-fluid law-fluid">
            <div class="law-header-container law-container">
                    <div class="logo">
                        <img src="../assets/index/logo.png" alt="">
                    </div>
                    <div class="tab-search">
                         <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="文档" name="first" :key="1">
                                <el-input placeholder="请输入文档" v-model="input1" class="input-with-select"  prefix-icon="el-icon-search" size="medium">
                                        <el-button slot="append"> 搜索</el-button>
                                </el-input>
                            </el-tab-pane>
                            <el-tab-pane label="问题" name="second" :key="2">
                                <el-input placeholder="请输入问题" v-model="input2" class="input-with-select"  prefix-icon="el-icon-search" size="medium">
                                        <el-button slot="append"> 搜索</el-button>
                                </el-input>
                            </el-tab-pane>
                            <el-tab-pane label="律师" name="third" :key="3">
                                <el-input placeholder="请输入律师" v-model="input3" class="input-with-select"  prefix-icon="el-icon-search" size="medium">
                                        <el-button slot="append"> 搜索</el-button>
                                </el-input>
                            </el-tab-pane>
                            <el-tab-pane label="模版" name="fourth" :key="4">
                                <el-input placeholder="请输入模版" v-model="input4" class="input-with-select"  prefix-icon="el-icon-search" size="medium">
                                        <el-button slot="append"> 搜索</el-button>
                                </el-input>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="nav-bar">
                        <ul>
                            <router-link tag="li" class="frist li-a" to="/homepage2">首页</router-link>
                            <router-link tag="li" class="li-a" to="/question">问答</router-link>
                            <li><a class="li-a" href="javascript:void(0);">求助</a></li>
                            <li><a class="li-a" href="javascript:void(0);">控制台</a></li>
                            <div class="clear"></div>
                        </ul>
                        <div class="login">
                             <el-button size="medium">登录 | 注册</el-button>
                        </div>
                    </div>
            </div>
        </div>
        <div>
            <router-view class="index-content-fluid law-fluid" />
            <!-- <div class="law-container index-content-container">
                <div class="aside">
                    <div class="block block1">
                        <div class="top">
                            <h4 class="title">
                                文档分类
                            </h4>
                        </div>
                        <div class="cont">
                            <div class="inner">
                                <p>模版 <el-button type="text" class="right"><i class="el-icon-arrow-right"></i></el-button></p>
                                <span>文书</span><span>|</span><span>投标书</span>
                            </div>
                            <div class="inner">
                                <p>热门<el-button type="text" class="right"><i class="el-icon-arrow-right"></i></el-button></p>
                                    <span>民事</span><span>|</span><span>刑事</span><span>|</span><span>非诉讼</span>
                            </div>
                            <div class="inner">
                                <p>其它 <el-button type="text" class="right"><i class="el-icon-arrow-right"></i></el-button></p>
                                    <span>经典案例</span><span>|</span><span>共享资源</span>
                            </div>
                            <div class="more">
                                <a href="javascript:void(0)">查看全部</a>
                            </div>
                        </div>
                    </div>
                    <div class="block block2">
                        <div class="top">
                            <h4 class="title">
                                热门搜索
                            </h4>
                        </div>
                        <div class="cont">
                            <div class="inner">
                                <p class="left">工程合同</p>
                                <a href="javascript:void(0);" class="right"><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="inner">
                                <p class="left">借贷合同</p>
                                <a href="javascript:void(0);" class="right"><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="inner">
                                <p class="left">交通肇事</p>
                                <a href="javascript:void(0);" class="right"><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="inner">
                                <p class="left">劳动纠纷</p>
                                <a href="javascript:void(0);" class="right"><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="inner last">
                                <p class="left">婚姻法</p>
                                <a href="javascript:void(0);" class="right"><i class="el-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="block">
                        <el-carousel height="320px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small">
                                    <img src="../assets/index/banner.png" alt="">
                                </h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <div class="top">
                                <a href="javascript:void(0)" class="right more">查看全部</a>
                                <h4 class="tit">
                                    规章制度
                                </h4>
                            </div>
                            <div class="cont">
                                <div class="block">
                                    <div class="img">
                                        <img src="../assets/index/img.png" alt="">
                                    </div>
                                    <div class="cont2">
                                        <h5 class="tit">
                                            快乐养狗妙招
                                        </h5>
                                        <span class="download tip">
                                            <span class="strong">1055</span>
                                            下载
                                        </span>
                                        <span class="score tip">
                                            <span class="strong">0</span>
                                            积分
                                        </span>
                                    </div>
                                </div>
                                <div class="block">
                                    <div class="img">
                                        <img src="../assets/index/img.png" alt="">
                                    </div>
                                    <div class="cont2">
                                        <h5 class="tit">
                                            快乐养狗妙招
                                        </h5>
                                        <span class="download tip">
                                            <span class="strong">1055</span>
                                            下载
                                        </span>
                                        <span class="score tip">
                                            <span class="strong">0</span>
                                            积分
                                        </span>
                                    </div>
                                </div>
                                <div class="block">
                                    <div class="img">
                                        <img src="../assets/index/img.png" alt="">
                                    </div>
                                    <div class="cont2">
                                        <h5 class="tit">
                                            快乐养狗妙招
                                        </h5>
                                        <span class="download tip">
                                            <span class="strong">1055</span>
                                            下载
                                        </span>
                                        <span class="score tip">
                                            <span class="strong">0</span>
                                            积分
                                        </span>
                                    </div>
                                </div>
                                <div class="block">
                                    <div class="img">
                                        <img src="../assets/index/img.png" alt="">
                                    </div>
                                    <div class="cont2">
                                        <h5 class="tit">
                                            快乐养狗妙招
                                        </h5>
                                        <span class="download tip">
                                            <span class="strong">1055</span>
                                            下载
                                        </span>
                                        <span class="score tip">
                                            <span class="strong">0</span>
                                            积分
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rightp">
                            <div class="top">
                                <h4 class="tit">
                                    数据显示
                                </h4>
                            </div>
                            <div class="cont">
                                <div class="block1">
                                    <h6> 优秀律师分享文档</h6>
                                    <span class="tip">
                                        <span class="strong">138873</span>
                                        篇
                                    </span>
                                </div>
                                <div class="block1">
                                    <h6>合同模版</h6>
                                    <span class="tip">
                                        <span class="strong">132</span>
                                        篇
                                    </span>
                                </div>
                                <div class="block1">
                                    <h6>答疑解惑</h6>
                                    <span class="tip">
                                        <span class="strong">1083</span>
                                        次
                                    </span>
                                </div>
                                <div class="right-img">
                                    <img src="../assets/index/icon.png" alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="law-container regulations-container">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click="changeSection()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            规章制度
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topRegulations" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
            <div class="law-container regulations-container">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click.native="changeSection1()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            文书模版
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData1"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topModules" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="law-container regulations-container" v-if="see1">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click.native="changeSection1()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            投标书模版
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData1"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topModules" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="law-container regulations-container" v-if="see2">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click.native="changeSection1()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            共享资源
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData1"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topModules" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="law-container regulations-container" v-if="see3">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click.native="changeSection1()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            民事模版
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData1"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topModules" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="law-container regulations-container" v-if="see4">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click.native="changeSection1()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            民事模版
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData1"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topModules" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="law-container regulations-container" v-if="see5">
                <div class="top">
                    <div class="right">
                        <el-button size="mini" @click.native="changeSection1()">换一批<i class="el-icon-refresh"></i></el-button>
                        <el-button size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                    <div class="left">
                        <h3 class="tit">
                            经典案例
                        </h3>
                        <span class="total">
                            共
                            <span class="strong">1000</span>
                            篇
                        </span> 
                        <el-button size="mini">排序设置<i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
                <div class="content">
                    <div class="table-left">
                        <el-table
                            :data="tableData1"
                            style="width: 100%"
                            :row-class-name="tableRowClassName"
                            :header-cell-style="{backgroundColor:'#741B29',color:'#ffffff',fontSize:'14px;',fontWeight:'normal'}"
                            >
                            <el-table-column
                            label="格式"
                            width="60">
                                <template slot-scope="scope">
                                    <img src="../assets/index/word.png" alt="" :data-item="scope" style="width:18px;height:18px;">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="文档名称"
                            width="300"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="score"
                            label="积分">
                            </el-table-column>
                            <el-table-column
                            prop="updater"
                            label="上传者">
                            </el-table-column>
                            <el-table-column
                            prop="download"
                            label="下载量">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="上传时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="top-right">
                        <div class="top">
                            <span class="right">Top 10</span>
                            <h4 class="tit">  热门榜</h4>
                            <div class="clear"></div>
                        </div>
                        <div class="inner">
                            <ul>
                                <li v-for="(item,index) in topModules" :key="index">
                                    <span class="score" v-if="(0+item.index) <=3">
                                        {{item.index}}
                                    </span>
                                    <span class="score score2" v-else>
                                         {{item.index}}
                                    </span>
                                    <span class="des">
                                       {{item.value}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'; 
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
        width: 7.8rem;
        height: 5rem;
        padding-top: 1.5rem;
        box-sizing: border-box;
        float: left;
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
    background-color: $bg-color-gray;
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