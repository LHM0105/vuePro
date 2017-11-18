<template>
<div>
	<x-header :left-options="{showBack: false}">我的</x-header>
  <div :class="{My_content:true}">
    <router-link to="/my/detail" tag="div" :class="{userInfo:true}">
      <img src="../../static/home_icon_user.png" alt="">
      <div :class="{userInfoTxt:true}">
        <h4>{{usermsg}}</h4>  
        <p>未绑定银行卡</p>
      </div>
      <span :class="{moreIcon:true}"></span>
    </router-link> 
    <ul :class="{btnList:true}">
      <router-link tag="li" to="/my/kaquan"><i class="one"></i><span>卡券</span></router-link>
      <router-link tag="li" to="/my/kaquan"><i class="two"></i><span>充值</span></router-link>
      <router-link tag="li" to="/my/kaquan"><i></i><span>提现</span></router-link>
    </ul>
<!-- 资产余额 -->
    <div :class="{zichan:true}">
      <p>总资产（元）<span>0.00</span><i class="eyeIcon"></i></p>
      <p>余额（元）<i> 0.00</i><i class="moreIcon"></i></p>
    </div>
    <group title="">
      <cell title="我的投资" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../static/touzi_icon.png">
      </cell>
      <cell title="交易明细" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../static/detail_icon.png">
      </cell>
    </group>
    <group title="">
      <cell title="同款日历" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../static/calendar_icon.png">
      </cell>
      <cell title="VIP等级" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../static/vip_icon.png">
      </cell>
    </group>
<!-- v-model控制是否显示 -->
    <popup v-model="show" :hide-on-blur="false" on-show="onShow">
      <div :class="{popup0:true}">
          <router-link :class="{registBtn:true}" tag="div" to="/my/register">注册</router-link>
          <router-link :class="{loginBtn:true}" tag="div" to="/my/login">登录</router-link>
      </div>
    </popup>

  </div>
	<v-footer></v-footer>
</div>
</template>

<script>
// 引入遮罩组件
import { Popup,XSwitch, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
// import { Actionsheet } from 'vux'
import { XHeader } from 'vux'
import vFooter from '@/components/Footer'
export default {
  name: 'My',
  components:{
    vFooter,
    XHeader,XSwitch,Cell, CellBox, CellFormPreview, Group, Badge,
    // Actionsheet
    Popup
  },
  data(){
    return {
      show:true,
      usermsg:'请先登录'
    }
  },
  methods:{
    onShow(){
      console.log("显示")
    },
    // 获取localStorage信息并判断是否过期，这里设置过期时间
    get(key,exp){
        var data = localStorage.getItem(key);
        var dataObj = JSON.parse(data);
        if (new Date().getTime() - dataObj.time > exp) {
            console.log('信息已过期');
        }else{
            var dataObjDatatoJson = JSON.parse(dataObj.data)
            // 返回存入的值
            return dataObjDatatoJson;
            // return dataObj;
        }
    }
  },
  // 组件渲染后执行的第一个函数
  mounted(){
    // 组件渲染之后执行的第一个函数，在这里判断用户是否已经登录，
    // 未登录的话显示登录注册按钮，this.show = true;显示遮罩
    // 未登录的话this.usermsg = "用户id"

    // 获取用户登陆信息
    var localUserID= this.get('ACLC_userID',1000*60*60*24);//过期时间为1天
    // console.log(localUserID || null);
    if (localUserID!="" && localUserID!=null) {
      // 用户登陆未过期，自动从远程获取用户信息并显示
      this.show = false//隐藏遮罩
      this.usermsg = localUserID;//显示用户信息
    }else{
      // 显示遮罩，让用户去登陆或者注册
      
      //     alert("获取的信息已经过期");
    } 
  },
}
</script>

<style lang="less">
.My_content{
  .weui-cell{
    padding: 0.35rem 0.45rem;
  }
  margin-top: 1rem;
  .userInfo{
    background:#fb7650;
    height: 1.66rem;
    padding: 0 0.26rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
      float: left;
      width: 1.1rem;
      height: 1.1rem;
    }
    .userInfoTxt{
      float: left;
      color: #ffffff;
      padding-left: 0.26rem;
      width: 5.3rem;
      h3{
        font-size: 0.28rem;
        font-style: normal;
      }
      p{
        font-size: 0.24rem;
        height: 0.36rem;
        margin-top: 0.2rem;
        width:1.66rem;
        border:0.01rem solid #ffffff;
        line-height: 0.36rem;
        border-radius: 0.16rem;
        text-align: center;
      }
    }
    .moreIcon{
      float: right;
      background:url(../../static/more_icon.png) no-repeat center;
      background-size: 100%;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .btnList{
    height: 1.7rem;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.2rem;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.26rem;
      span{
        line-height: 0.8rem;
        color: #6e6e6e;
      }
      i{
        display: block;
        width: 0.44rem;
        height: 0.44rem;
        background:url(../../static/anc_txian_icon.png) no-repeat center;
        background-size: 100%;
      }
      .two{
        background:url(../../static/anc_czhi_icon.png) no-repeat center;
        background-size: 100%;
      }
      .one{
        background:url(../../static/anc_kquan_icon.png) no-repeat center;
        background-size: 100%;
      }
    }
  }
  .zichan{
    height: 2.22rem;
    background: #ffffff;
    padding: 0 0.26rem;
    p{
      height: 1.1rem;
      line-height: 1.1rem;
      font-size: 0.3rem;
      position: relative;
      span{
        color: #fb7650;
        font-size: 0.36rem;
      }
      i{
        font-style: normal;
      }
      .eyeIcon{
        width: 0.4rem;
        height: 0.4rem;
        display: block;
        background:url(../../static/dl_eye_1.png) no-repeat center;
        background-size: 100%;
        position: absolute;
        top: 50%;
        right: 0.6rem;
        margin-top: -0.2rem;
      }
      .moreIcon{
        width: 0.16rem;
        height: 0.3rem;
        display: block;
        background: url(../../static/right_icon.png) no-repeat center;
        background-size: 100%;
        position: absolute;
        top: 50%;
        right: 0.24rem;
        margin-top: -0.2rem;
      }
    }
  }
  // 遮罩层样式
  .popup0{
    height: 3rem;
    background:#fff;
    display: flex;
    justify-content: space-around;
    padding-top: 0.5rem;
    .registBtn{
      float: left;
      height: 0.7rem;
      width: 2.6rem;
      background: #ffffff;
      border-radius: 0.35rem;
      border: 0.01rem solid #fb7650 !important;
      color: #fb7650;
      text-align: center;
      line-height: 0.7rem;
      // border-radius:0.02rem solid #fb7650;
    }
    .loginBtn{
      float: left;
      height: 0.7rem;
      width: 2.6rem;
      line-height: 0.7rem;
      background: #fb7650;
      border-radius: 0.35rem;
      color: #fff;
      text-align: center;
    }
  }
  
}
</style>