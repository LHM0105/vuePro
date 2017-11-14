<template>
<div>
  <swiper loop auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center">
       <swiper-item class="black"><img src="http://temp.im/640x320/ff00aa/fff"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/22aa44/fff"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/aabbaa/fff"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/33ddaa/fff"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/ff55aa/fff"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/3300aa/fff"/></swiper-item>
  </swiper>
	<h2>首页</h2>
	<v-footer></v-footer>
</div>
</template>

<script>
import { Swiper,SwiperItem } from 'vux'
import vFooter from '@/components/Footer'
export default {
  name: 'vHome',
  components:{
    vFooter,Swiper,SwiperItem,
  }
}
</script>

<style scoped>
  div{
    font-size: 16px;
  }
</style>