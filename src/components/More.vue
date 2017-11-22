<template>
<div>
	 <x-header :left-options="{showBack: false}">更多</x-header>
   <div :class="{M_con:true}">
    <div :class="{M_nav:true}">
      <ul>
        <router-link tag="li" to="/more/activity"><img src="../../static/gyuwom_icon.png" alt=""><span>关于我们</span></router-link>
        <router-link tag="li" to="/more/activity"><img src="../../static/fkong_icon.png" alt=""><span>风控流程</span></router-link>
        <router-link tag="li" to="/more/activity"><img src="../../static/yijfkui_icon.png" alt=""><span>意见反馈</span></router-link>
        <router-link tag="li" to="/more/activity"><img src="../../static/bbzhzxin_icon.png" alt=""><span>帮助中心</span></router-link>
        <router-link tag="li" to="/more/activity"><img src="../../static/lixinwm_icon.png" alt=""><span>联系我们</span></router-link>
      </ul>
    </div>
    <router-link tag="div" to="/more/yq" :class="{yaoqing:true}">
      <h3>邀请好友<span>拿佣金</span></h3>
      <p>好友拿5000，奖励10%收益返现</p>
      <img src="../../static/anc_yqhyou_img.png" alt="" />
    </router-link>
    <div :class="{zxBox:true}">
      <cell title="理财咨询" value="查看更多" is-link></cell>
      <div :class="{conItem:true}">
        <img src="http://temp.im/190x150/aacc33/fff" alt="">
        <div :class="{txt:true}">
          <h4>咨询标题只显示两条固定的选择显示更多进入显示从数据库获取的</h4>
          <p><span>11-09</span><i>14:30</i></p>
        </div>
      </div>
    </div>
    <div :class="{zxBox:true}">
      <cell title="理财咨询" value="查看更多" is-link></cell>
      <div :class="{conItem:true}">
        <img src="http://temp.im/190x150/aacc33/fff" alt="">
        <div :class="{txt:true}">
          <h4>咨询标题只显示两条固定的选择显示更多进入显示从数据库获取的</h4>
          <p><span>11-09</span><i>14:30</i></p>
        </div>
      </div>
    </div>
    <div :class="{footBack:true}"></div>
   </div>
   
	<!-- <v-footer></v-footer> -->
</div>
</template>

<script>

import { XHeader,Cell } from 'vux'
import vFooter from '@/components/Footer'
export default {
  name: 'More',
  components:{
    vFooter,
    XHeader,Cell
  }
}
</script>

<style lang="less">
.M_con{
  margin-top: 1rem;
  .M_nav{
    
    height: 4.75rem;
    background: #ffffff;
    ul{
      li{
        float: left;
        width:2.5rem;
        height: 2.375rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.28rem;
        img{
          width: 1.1rem;
        }
        span{
          line-height: 0.8rem;
        }
      }
    }
  }
  .yaoqing{
    height: 2.1rem;
    background: #ffffff;
    margin: 0.22rem 0;
    padding:0.5rem 0 0 0.3rem !important; 
    position: relative;
    h3{
      line-height: 0.8rem;
      font-size: 0.4rem;
      // font-family: "Microsoft YaHei";
      span{
        color: #fa6337;
      }
    }
    p{
      font-size: 0.3rem;
      color: #aaaaaa;
    }
    img{
      position: absolute;
      right:0.8rem ;
      width: 1.9rem;
      height: 1.3rem;
      top: 50%;
      margin-top: -0.65rem;
    }
  }
  // 底部无内容区域
  .footBack{
    height: 1.4rem;
  }
}
.zxBox{
  background: #fff;
  .weui-cell{
    height: 1.1rem;
    padding: 0 0.3rem;
  }
  .conItem{
    background:#fff;
    overflow: hidden;
    border-top: 0.01rem solid #ccc;
    padding: 0.26rem;
    img{
      width: 1.9rem;
      height: 1.5rem;
      float: left;
    }
    .txt{
      float: left;
      margin-left: 0.3rem;
      width: 4.6rem;
      h4{
        font-size: 0.3rem;
        height: 1.2rem;
      }
      p{
        color: #aaaaaa;
        font-size: 0.24rem;
        i{
          margin-left: 0.3rem;
          font-style: normal;
        }
      }
    }
  }
}
</style>