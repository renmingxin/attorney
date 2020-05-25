<template>
  <div>
    <topMenu></topMenu>
    <leftMenu></leftMenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import topMenu from '../components/topMenu.vue'
  import leftMenu from '../components/leftMenu.vue'

  export default {
    name: "control",
    components: {
      topMenu,
      leftMenu
    }
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
