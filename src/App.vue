<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/HelloFromVux"

export default {
  name: 'app',
  components:{
    Home
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
body {
  background-color: #fbf9fe;
}
</style>
