<template>
  <div>
    <div class="header"></div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
      <!-- <router-view class="child-view" @to-parent="getChild"></router-view> -->
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    methods:{
    	// getChild(msg){
    	// 	this.$emit("to-parent",msg)
    	// }
    },
    // beforeRouteUpdate (to, from, next) {
    //   let isBack = this.$router.isBack
    //   if (isBack) {
    //     this.transitionName = 'slide-right'
    //   } else {
    //     this.transitionName = 'slide-left'
    //   }
    //   this.$router.isBack = false
    //   next()
    // }
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if(toDepth < fromDepth){
          this.transitionName = 'slide-right'
        }else if(toDepth > fromDepth){
          this.transitionName = 'slide-left'
        }else{
          this.transitionName = ''
        }
        // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }

  }
</script>

<style scoped>
  /* .child-view {
  position: absolute;
  width:100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  } */
  .slide-left-enter, .slide-right-leave-active {
    /* opacity: 0; */
    -webkit-transform: translate(7rem, 0);
    transform: translate(7rem, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    /* opacity: 0; */
    -webkit-transform: translate(-7rem, 0);
    transform: translate(-7rem, 0);
  }
  .header {
    position:absolute;
    height:44px;
    width:100%
  }
</style>
