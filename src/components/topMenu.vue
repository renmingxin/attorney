<template>
  <div class="panel">
    <el-row>
      <el-col :span="6">
        <img src="../assets/index/logo.png" class="logo">
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','cloud-download-alt']" class="icon"/>
        <span>下载</span>
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','copy']" class="icon"/>
        <span>复制</span>
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','square']" class="icon"/>
        <span>移动</span>
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','trash']" class="icon"/>
        <span>删除</span>
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','sitemap']" class="icon"/>
        <span>版本</span>
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','share-alt']" class="icon"/>
        <span>分享</span>
      </el-col>
      <el-col :span="1" style="text-align:center">
        <font-awesome-icon :icon="['fas','qrcode']" class="icon"/>
        <span>二维码</span>
      </el-col>
      <el-col :span="7" :offset="2" style="text-align:center">

        <div class="el-input el-input-group el-input-group--append el-input--prefix">
          <input type="text" autocomplete="off" placeholder="律师、资料、文档" class="el-input__inner"><span
          class="el-input__prefix"><i class="el-input__icon el-icon-search"></i></span>
          <div class="el-input-group__append">搜索</div>
        </div>

      </el-col>
      <el-col :span="2">
        <img src="../assets/index/img.png" class="login">
        <font-awesome-icon :icon="['fas','caret-down']" style="width: 14px;height: 14px;margin-bottom: 9px"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'topMenu',
    data() {
      return {
        input4: ""
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 100%;
    height: 40px;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.20);
    left: 0px;
    top: 0px;
    padding: 30px 0px;
  }

  .logo {
    width: 156px;
    height: 40px;

  }

  .icon {
    width: 100%;
    color: #690F1C
  }

  span {
    font-size: 14px;
  }

  .el-input-group__append {
    color: #ffffff;
    background-color: #741B29;
    font-size: 14px;
    border: 1px solid rgba(105,15,28,1);
    border-radius: 0px;
  }

  .el-input-group{
    border: 1px solid rgba(105,15,28,1);
  }
  .el-input__inner{
    border-radius: 0px;
  }
  .login{
    border: 1px solid rgb(0, 0, 0);
    border-radius: 90px;
    width: 32px;
    height: 32px;
  }
</style>
