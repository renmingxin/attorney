<template>
  <div>
    <el-container style="position: absolute;left: 160px;top:100px;right: 0px;bottom:0px">
      <el-aside width="300px" style="border-right:1px solid #C0C4CC;font-size: 14px">
          <el-row style="width: 100%;height: 60px;border-bottom:1px solid #C0C4CC;padding-top: 20px">
            <el-col :span="6" style="text-align: center;">
              <font-awesome-icon :icon="['fas','plus-circle']" style="color: #690F1C;margin-right: 5px;"/>
              <span>新建</span>
            </el-col>
            <el-col :span="6" :offset="2">
              <font-awesome-icon :icon="['fas','cloud-download-alt']" style="color: #690F1C;margin-right: 5px;"/>
              <span>上传</span></el-col>
            <el-col :span="6" :offset="4">
              <font-awesome-icon :icon="['fas','clipboard-list']" style="color: #690F1C;margin-right: 5px;"/>
              <span>批量</span></el-col>
          </el-row>
        <ul>
          <li>
            <a href="javascript:void(0);" style="color:#000000">
              <el-row>
                <el-col :span="3">
                  <img src="../assets/index/doc.png" style="width: 36px;height: 36px">
                </el-col>
                <el-col :span="14" :offset="2">
                    <div>新手指南</div>
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
                <img src="../assets/index/doc.png" style="width: 36px;height: 36px">
              </el-col>
              <el-col :span="14" :offset="2">
                <div>挖掘机师傅风险告知卡</div>
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
        <el-row
          style="width: 100%;height: 60px;border-bottom:1px solid #C0C4CC;color: #909399; font-size: 14px;padding-top: 20px">
          <el-col :span="4">
            <span>挖掘机师傅风险告知卡</span>
          </el-col>
          <el-col :span="4" :offset="4">
            <i class="el-icon-zoom-out"></i>
            <span>100%</span>
            <i class="el-icon-zoom-in"></i>
          </el-col>
          <el-col :span="6" :offset="4">
            <font-awesome-icon :icon="['fas','cloud-download-alt']" class="icon"/>
            <font-awesome-icon :icon="['fas','comment-dots']" class="icon"/>
            <font-awesome-icon :icon="['fas','edit']" class="icon"/>
            <font-awesome-icon :icon="['fas','star']" class="icon"/>
            <font-awesome-icon :icon="['fas','share-alt']" class="icon"/>
            <font-awesome-icon :icon="['fas','ellipsis-h']" class="icon"/>
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "controlFile",
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
