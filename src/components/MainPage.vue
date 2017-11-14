<template>
    <!-- <h1>主页面</h1> -->
    <router-view></router-view>
</template>

<script>
import vFooter from '@/components/Footer'
export default {
  name: 'mainpage',
  components:{
    vFooter
  }
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
