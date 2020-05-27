<template>
    <div id="app law-fluid" style="height:100%">
        <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>-->
        <!-- </div> -->
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    height: 100%;
    font-family: "PingFangSC-Regular";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.law-fluid {
    width: 100%;
    height: 100%;
    min-width: 1200px;
}
</style>
