<template>
    <!-- <h1>主页面</h1> -->
    <!-- 添加路由过渡动效 没效果-->
    <!-- <transition :name="transitionName"> -->
      <router-view></router-view>
    <!-- </transition> -->
</template>

<script>
import vFooter from '@/components/Footer'
export default {
  name: 'mainpage',
  data(){
    return {
      transitionName:"slide-left"
    }
  },
  components:{
    vFooter
  },
  mounted(){
    console.log(this.transitionName);
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
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
