<template>
<!-- <transition name="slide"> -->
<div style="background:#eee;">
  <!-- 轮播图 -->
  <swiper loop auto style="width:100%;margin:0 auto;" height="3.75rem" dots-position="center">
      <swiper-item class="black"><img src="http://temp.im/640x320/ff00aa/fff" width="100%"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/22aa44/fff" width="100%"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/aabbaa/fff" width="100%"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/33ddaa/fff" width="100%"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/ff55aa/fff" width="100%"/></swiper-item>
      <swiper-item class="black"><img src="http://temp.im/640x320/3300aa/fff" width="100%"/></swiper-item>
  </swiper>
  <!-- 信息显示 -->
  <div class="touzi">
    <ul>
      <li class="first">
        <p>累计投资(元)</p>
        <span>{{userNum}}亿</span>
      </li>
      <li>
        <p>平台用户(人)</p>
        <span>{{jiaoyiNum}}万</span>
      </li>
    </ul>
  </div>
  <!-- 路由选项 -->
  <div class="iconbtn">
    <ul>
      <router-link tag="li" to="/help">
        <img src="../../static/yqhy_icon.png" />
        <i>邀请好友</i>  
      </router-link>
      <router-link tag="li" to="/help">
        <img src="../../static/xsgl_icon.png" />
        <i>新手攻略</i>  
      </router-link>
      <router-link tag="li" to="/help">
        <img src="../../static/safety_icon.png" />
        <i>安全保障</i>  
      </router-link>
      <router-link tag="li" to="/help">
        <img src="../../static/bzzxin_icon.png" />
        <i>帮助中心</i>  
      </router-link>
    </ul>
  </div>
  <div class="exampleList">
    <div class="example">
      <h4><span>新手体验标</span><i>超高收益快来抢</i></h4>
      <div class="content">
        <h3>16.00%</h3>
        <p>投资期1天</p>
        <router-link to="/home/try" tag="div" class="link">立即体验</router-link>
      </div>
    </div>
    <div class="example">
      <h4><span>新手标NO.482</span><i>新用户首投专享</i></h4>
      <div class="content">
        <h3>18.00%</h3>
        <p>投资期16天</p>
        <router-link to="/home/newtry" tag="div" class="link">立即投资</router-link>
      </div>
    </div>
  </div>
  <div class="bottomCon">
    <p><i></i>银行资金存管系统对接中</p>
  </div>
  <!-- 双十一活动 -->
  <router-link to="/home/activity" tag="div" :class="{H_activeity:true}"></router-link>
	<!-- 底部按钮 -->
	<v-footer></v-footer>
</div>
<!-- </transition> -->
</template>

<script>
import { Swiper,SwiperItem,Grid, GridItem } from 'vux'
import vFooter from '@/components/Footer'
export default {
  name: 'vHome',
  components:{
    vFooter,Swiper,SwiperItem,Grid, GridItem
  },
  data(){
    return{
      jiaoyiNum:0,
      userNum:0
    }
  },
  mounted(){
    //数据请求
    this.$http({
      url:"http://home.num.cn",
      method:"get"
    }).then((data) => {
        console.log(data)
        let thisdata = data.data.num;
        this.jiaoyiNum = thisdata.jiaoyi;
        this.userNum = thisdata.userNum;
    })
  }
}


</script>

<style lang="less">
.H_activeity{
  position: fixed;
  right: 0.4rem;
  bottom: 1.7rem;
  width: 1.32rem;
  height: 1.32rem;
  background:url(../../static/double_11_button.png) no-repeat center;
  background-size: 100%;
}
  div{
    font-size: 16px;
  }
  // 试图改变样式
// .vux-slider > .vux-indicator > a > .vux-icon-dot{
//   background-color: #fff;
// }
// .vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
//   background-color: yellow;
// }
.touzi{
  width: 100%;
  height: 1.9rem;
  background: #fff;
  margin: 0.26rem 0;
  position: relative;
  ul{
    height: 1.24rem;
    width: 100%;
    position: absolute;
    margin-top: -0.62rem;
    top: 50%;
    li{
      float: left;
      width:49%; 
      height: 100%;
      text-align: center;
      p{
        font-size: 0.28rem;
        color: #b8b8b8;
        margin-bottom: 0.3rem;
      }
      span{
        font-size: 0.34rem;
        color: #fb6b42;
      }
    }
    .first{
      border-right: 0.01rem solid #ccc;
    }
  }
}
.iconbtn{
  height: 2.22rem;
  background-color: #ffffff;
  ul{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 0.8rem;
        height: 0.8rem;
        margin-bottom: 0.2rem;
      }
      i{
        font-style: normal;
        font-size: 0.28rem;
      }
    }
  }
}
.exampleList{
  overflow: hidden;
  .example{
    background-color: #fff;
    margin: 0.2rem 0;
    overflow: hidden;
    h4{
      height: 1.06rem;
      border-bottom: 0.01rem solid #eee;
      line-height: 1.06rem;
      padding-left: 0.26rem;
      sapn{
        font-size: 0.28rem;
        float: left;
      }
      i{
        font-style: normal;
        font-weight: 300;
        font-size: 0.22rem;
        color: #fb6b42;
        border: 0.01rem solid #fb6b42;
        height: 0.3rem;
        line-height: 0.3rem;
        border-radius: 0.15rem;
        padding:0.02rem 0.1rem;
        margin: 0 0.1rem;
      }
    }
    .content{
      h3{
        text-align: center;
        height: 1.9rem;
        line-height: 1.9rem;
        font-size: 0.7rem;
        font-weight: 500;
        color: #fb6b42;
      }
      p{
        text-align: center;
        font-size: 0.26rem;
      }
      .link{
        width: 5rem;
        height: 0.7rem;
        border-radius: 0.35rem;
        background: #fb6b42;
        color: #ffffff;
        margin: 0.4rem auto;
        text-align: center;
        font-size: 0.28rem;
        line-height: 0.7rem;
      }
    }
  }
}
.bottomCon{
  height: 1.8rem;
  p{
    text-align: center;
    font-size: 0.24rem;
    overflow: hidden;
    color: #555;
    i{
      display: inline-block;
      margin: 0.05rem 0.15rem 0 0;
      width: 0.24rem;
      height: 0.24rem;
      background:url(../../static/anc_yhcg_icon.png) no-repeat center;
      background-size: 100%;
    }
  }
}
</style>