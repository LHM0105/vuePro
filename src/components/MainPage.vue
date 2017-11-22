<template>
<div>
    <!-- <h1>主页面</h1> -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <v-footer v-if="isFooter"></v-footer>
</div>
</template>

<script>
import vFooter from '@/components/Footer'
export default {
  name: 'mainpage',
  data(){
    return {
      transitionName:"slide-left",
       isFooter:false
    }
  },
  components:{
    vFooter
  },
  mounted(){
    console.log(this.transitionName);
    this.isFooter = true;
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  updated(){
    console.log(this.$route.path);
    if(this.$route.path == "/home" || this.$route.path == "/youxuan" || this.$route.path == "/my" || this.$route.path =="/more" || this.$route.path == "/"){
      this.isFooter = true;
    }else{
      this.isFooter = false;
    }
    console.log(this.isFooter)
  }
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

.child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .header {
    position:absolute;
    height:44px;
    width:100%
  }
</style>
