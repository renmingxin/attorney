<template>
  <div>
    <el-container style="position: absolute;left: 160px;top:100px;right: 0px;bottom:0px">
      <el-aside width="300px" style="border-right:1px solid #C0C4CC;font-size: 14px">
          <el-row style="width: 100%;height: 60px;border-bottom:1px solid #C0C4CC;padding-top: 20px">
            <el-col :span="7" style="text-align: center;">
              <font-awesome-icon :icon="['fas','plus-circle']" style="color: #690F1C;margin-right: 5px;"/>
              <span>团队申请</span>
            </el-col>
            <el-col :span="6" :offset="3">
              <font-awesome-icon :icon="['fas','clipboard-list']" style="color: #690F1C;margin-right: 5px;"/>
              <span>批量</span></el-col>
            <el-col :span="6" :offset="2">
              <font-awesome-icon :icon="['fas','cloud-download-alt']" style="color: #690F1C;margin-right: 5px;"/>
              <span>删除</span></el-col>
          </el-row>
          <ul>
            <li>
                <a href="javascript:void(0);" style="color:#000000">
                <el-row>
                    <el-col :span="3">
                    <img src="../assets/logo.png" style="width: 36px;height: 36px">
                    </el-col>
                    <el-col :span="14" :offset="2">
                        <div>团队1</div>
                        <div class="dateCss">2019.08.08</div>
                    </el-col>
                    <el-col :span="3" :offset="2">
                    <font-awesome-icon :icon="['fas','ellipsis-h']" style="margin-top: 10px"/>
                    </el-col>
                </el-row>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" style="color:#000000">
                <el-row>
                <el-col :span="3">
                    <img src="../assets/logo.png" style="width: 36px;height: 36px">
                </el-col>
                <el-col :span="14" :offset="2">
                    <div>团队2</div>
                    <div class="dateCss">2019.08.08</div>
                </el-col>
                <el-col :span="3" :offset="2">
                    <font-awesome-icon :icon="['fas','ellipsis-h']" style="margin-top: 10px"/>
                </el-col>
                </el-row>
                </a>
            </li>
            </ul>
      </el-aside>
      <el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Team",
  }
</script>

<style scoped>
  ul {
    padding-inline-start: 0px;
  }

  ul li {
    list-style: none;
    text-align: left;
    margin-left: 20px;
    margin-top: 5px
  }

  .dateCss {
    font-size: 12px;
    color: #909399;
  }
  .icon{
    margin-left: 5px;
  }
</style>
