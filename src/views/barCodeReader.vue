<template>
        <el-container style="position: absolute;left: 160px;top:100px;right: 0px;bottom:0px">
            <div class="barCodeReader">
                <div class="top">
                    <p class="top-t1">文件二维码</p>
                    <p class="top-t2">上传一个或多个文件，生成二维码快速分享</p>
                </div>
                <div class="upload-text">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            <p class="el-upload__text-p1">拖动文件到此</p>
                            <p class="el-upload__text-p2">或</p>
                        </div>
                        <el-button>选择文件</el-button>
                    </el-upload>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name:'BarCodeReader'
        
    }
</script>

<style lang="scss" scoped>
.barCodeReader{
    .top{
        margin-top: 30px;
        margin-bottom: 47px;
        .top-t1{
            margin: 0px 540px;
            margin-bottom: 20px;
            color: #303133;
            font-size: 40px; 
        }
        .top-t2{
            margin: 0px 507px;
            color: #606266;
            font-size: 14px;
        }
    }
    .upload-text{
        margin: 0px 300px 311px;
        .el-upload__text{
            margin-bottom: 30px;
            .el-upload__text-p1{
                margin-top: 15px;
                margin-bottom: 20px;
            }
        }
    }
}
</style>