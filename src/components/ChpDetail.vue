<template>
  <div>
    <!-- <div style="overflow-y:scroll"> -->
      <h4><i></i>承兑银行</h4>
      <p>从后台获取数据</p>
      <h4><i></i>项目信息</h4>
      <p>后台获取数据后台获取数据</p>
      <h4><i></i>还款保障</h4>
      <p>后台数据后台获取数据后台获取数据</p>
      <h4><i></i>风控措施</h4>
       <p>后获取台获取数取数据</p>
      <h4><i></i>相关图片展示</h4>
  
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" style="height:4rem;margin-bottom:1rem;">
          <!-- slides -->
          <swiper-slide><img src="http://temp.im/640x320/ff00ff/fff" alt="" width="100%" height="100%"></swiper-slide>
          <swiper-slide><img src="http://temp.im/640x320/0000ff/fff" alt="" width="100%" height="100%"></swiper-slide>
          <swiper-slide><img src="http://temp.im/640x320/00ffff/fff" alt="" width="100%" height="100%"></swiper-slide>
          <swiper-slide><img src="http://temp.im/640x320/aaeeff/fff" alt="" width="100%" height="100%"></swiper-slide>
          <swiper-slide><img src="http://temp.im/640x320/eeddff/fff" alt="" width="100%" height="100%"></swiper-slide>
          <swiper-slide><img src="http://temp.im/640x320/2233ff/fff" alt="" width="100%" height="100%"></swiper-slide>
        </swiper>
      <!-- </div> -->

  </div>
</template>

<script>

// starting with version 2.6.0, you need to manually introduce swiper's css
require('swiper/dist/css/swiper.css')
 
// import
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {Scroller} from 'vux'
export default {
  name:"ChpDetail",
  components:{
    swiper, swiperSlide,Scroller,
  },
  data() {
      return {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          // autoplay: 3000,
          // grabCursor: true,
          // setWrapperSize: true,
          // autoHeight: true,
          // pagination: '.swiper-pagination',
          // paginationClickable: true,
          // prevButton: false,
          // nextButton: '.swiper-button-next',
          effect:'coverflow',//走马灯形式
          slidesPerView:3,
          loop:true,
          coverflow: {
                  rotate: 0,
                  stretch: -20,
  		            depth: 60,
              },
          // scrollbar: '.swiper-scrollbar',
          // mousewheelControl: true,
          // observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}

</script>
<style lang="less" scoped>
.swiper-container{
  z-index: 0;
}
h4{
  padding: 0.2rem;
  font-family:'yahei';
  i{
    float: left;
    width: 0.4rem;
    height: 0.4rem;
    background: url("../../static/gsxq_icon1.png") no-repeat center;
    background-size: 100%;
    margin: 0.1rem;
  }
  
}
p{
  padding: 0 0.8rem;
  font-family: "yahei";
  color: #666;
}
</style>
