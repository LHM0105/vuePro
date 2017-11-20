<template>
  <div>
    <x-header :left-options="{backText: ''}">
      <i slot="overwrite-left" class="backIcon" @click="goback"></i>
      个人中心
    </x-header>
    <div class="MyD_content">
      <router-link tag="div" class="userInfo" to="/my/userInfo">
        <div class="photo">
          <img src="../../static/home_icon_user.png" width="100%" height="100%" alt="">
        </div>
        <div class="infoTxt">
          <div class="info">
            <h3>未验证</h3>
            <p>用户id24343</p>
          </div>
          <span>更换头像<i></i></span>
        </div>
      </router-link>

      <router-link tag="div" class="cell myCard" to="/">
        <p>我的银行卡<i></i></p>
      </router-link>
      <router-link tag="div" class="cell password1" to="/">
        <p>登录密码<i></i></p>
      </router-link>
      <router-link tag="div" class="cell password2" to="/">
        <p>交易密码<i></i></p>
      </router-link>
      <group class="gesturePsw">
        <x-switch title="手势密码" v-model="isGesturePswOn"></x-switch>
      </group>
      <router-link tag="div" class="cell aboutAC" to="/">
        <p>关于安创理财<i></i></p>
      </router-link>
      <!-- </div> -->
      <p class="logoutBtn" @click="logout">退出登录</p>

    </div>
  </div>
</template>

<script>
import { XHeader, XSwitch,Group } from 'vux'
export default {
  name:"Detail",
  components:{
    XHeader, XSwitch,Group
  },
  data(){
    return {
      isGesturePswOn:false
    }
  },
  mounted(){

  },
  methods:{
    // 返回上个页面
    goback(){
      this.$router.go(-1);
    },

    logout(){
      console.log("退出登陆")
      // 删除localStorage中的信息
      localStorage.removeItem('ACLC_userID');
      // 转到首页(push和replace的区别是replace不会向路由history中添加记录)
      this.$router.push({ path: `/home` })
    }
  }
}
</script>

<style lang="less">
.userInfo{
  height: 1.5rem;
  background:#fff;
  position: relative;
  .photo{
    width: 1.1rem;
    height: 1.1rem;
    position: absolute;
    left: 0.26rem;
    top: 50%;
    margin-top: -0.55rem;
  }
  .infoTxt{
    float: left;
    height: 100%;
    margin-left: 1.52rem;
    width: 5.98rem;
    .info{
      float: left;
      margin-top: 0.3rem;
      h3{
        height: 0.55rem;
        font-size: 0.36rem;
      }
      p{
        color: #aaaaaa;
        font-size: 0.28rem;
        line-height: 0.4rem;
      }
    }
    span{
      float: right;
      line-height: 1.5rem;
      position: relative;
      padding-right: 0.6rem;
      color: #aaaaaa;
      font-size: 0.28rem;
      i{
        position: absolute;
        right: 0.3rem;
        top: 50%;
        margin-top: -0.15rem;
      }
    }
  }
}
.backIcon{
  float: left;
  width: 0.88rem;
  height: 0.88rem;
  background:url(../../static/back_icon.png) no-repeat center;
  background-size: 100%;
}
.MyD_content{
  margin-top: 1rem;
  i{
    float: right;
    width: 0.16rem;
    height: 0.3rem;
    background:url(../../static/right_icon.png) no-repeat center;
    background-size: 100%;
  }
  .cell{
    background: #fff;
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.34rem;
    padding: 0 0.3rem;
    p{
      position: relative;
      i{
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -0.15rem;
      }
    }
  }
  .myCard{
    margin: 0.3rem 0;
  }
  .password1{
    border-bottom: 0.01rem solid #ccc;
  }
  .gesturePsw{
    background:#fff;
  }
  .logoutBtn{
    width: 5.5rem;
    height: 0.82rem;
    background: #fb7650;
    border-radius: 0.41rem;
    margin: 1.8rem auto;
    text-align: center;
    color: #ffffff;
    line-height: 0.82rem;
    font-size: 0.32rem;
  }
}
</style>
