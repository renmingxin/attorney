<template>
  <div class="contain">
    <ul role="menubar" class="el-menu">
      <li role="menuitem" tabindex="-1" class="el-menu-item">
        <a href="/control/controlFile">
          <font-awesome-icon :icon="['fas','folder']" class="icon"/> <span>文件</span>
        </a>
      </li>
      <li role="menuitem" tabindex="-1" class="el-menu-item">
        <a href="/control/order">
          <font-awesome-icon :icon="['fas','star']" class="icon"/><span>购买</span>
        </a>
      </li>
      <li role="menuitem" tabindex="-1" class="el-menu-item">
        <a href="/control/notice">
          <font-awesome-icon :icon="['fas','bell']" class="icon"/><span>通知</span>
        </a>
      </li>
      <li role="menuitem" tabindex="-1" class="el-menu-item">
        <a href="/control/team">
          <font-awesome-icon :icon="['fas','user-friends']" class="icon"/><span>团队</span>
        </a>
      </li>
      <li role="menuitem" tabindex="-1" class="el-menu-item">
        <a href="/control/barCodeReader">
          <font-awesome-icon :icon="['fas','qrcode']" class="icon"/> <span>文件二维码</span>
        </a>
      </li>
      <li role="menuitem" tabindex="-1" class="el-menu-item">
        <a href="/control/rubbish">
          <font-awesome-icon :icon="['fas','trash']" class="icon"/><span>回收站</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "leftMenu"
  }
</script>

<style scoped lang="scss">
  .contain {
    position: absolute;
    width: 160px;
    float: left;
    top: 100px;
    left: 0px;
    bottom: 0px;
    background: rgba(48, 49, 51, 0.05);
    border: 1px solid rgba(220, 223, 230, 1);
    height: 1200px;
  }

  .el-menu {
    padding-top: 25px;
    background-color: #00000000;
  }

  .el-menu-item {
    width: 140px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #909399;
    margin: 10px 10px;
    text-align: left;
    a{
      color:#690F1C;
      text-decoration: none;
    }
  }

  .el-menu-item:hover {
    outline: 0;
    background: rgba(105, 15, 28, 0.05);
  }
  .icon{
    margin-right: 10px;
  }
</style>
