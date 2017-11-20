<template>
  <div>
      <x-header :left-options="{showBack:false}" class="head">
        <i slot="overwrite-left" @click="closeBack" class="L_closeBtn"><img src="../../static/clos_icon.png" width="100%" alt="" /></i>
        登录
      </x-header>
      <div :class="{registBox:true}">
        <form action="post">
          <label for="userId">
            <input v-model="userIdIpt" @input="userIdchange" :class="{userId_icon:true}" type="text" name="userId" id="userId" placeholder="手机号/用户名">
            <i :class="{closeIcon:isClear}" @click="clearId"></i>
          </label>
          <label for="psw">
            <input v-model="userPswIpt" @input="pswchange"  :class="{user_psw:true}" type="password" name="psw" id="psw" placeholder="请输入登录密码">
            <i :class="{closeIcon:isClear0}" @click="clearPsw"></i>
          </label>
          <input type="button" value="确认登录" @click="loginTo" :class="{loginBtn:true,isLogin:isOk}" />
        </form>
      </div>
      <div :class="{botBox:true}">
        <router-link to="/my/register" :class="{registNew:true}">注册新用户</router-link>
        <router-link to="/my/forget" :class="{forget:true}">忘记密码</router-link>
      </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name:"Login",
  components:{
     XHeader
  }, 
  data(){
    return {
      // 按钮颜色
      isOk:false,
      isClear:false,
      isClear0:false,
      userIdIpt:'',
      userPswIpt:'',
      isDisable:"",
      userIdTrue:false
    }
  },                                                               
  methods:{
    // 用户输入密码时
    pswchange(){
      console.log(this.userPswIpt)
      // 根据输入框是否有内容决定清除按钮是否显示
      if(this.userPswIpt || this.userPswIpt.length>0){
        this.isClear0 = true;
      }else{
        this.isClear0 = false;
      }
// 如果用户输入了符合格式的的电话号，而且输入的密码长度>6
      if(this.userIdTrue && this.userPswIpt.length>6){
        this.isOk = true;
        console.log(this.isOk)
      }
    },
    // 用户输入用户名时
    userIdchange(){
      console.log(this.userIdIpt)
      // 根据输入框是否有内容决定清除按钮是否显示
      if(this.userIdIpt || this.userIdIpt.length>0){
        this.isClear = true;
      }else{
        this.isClear = false;
      }
      // 正则表达式验证用户输入的是不是手机号码
      let reg = new RegExp(/^1\d{10}$/);
      this.userIdTrue = reg.test(this.userIdIpt);
      // 如果用户输入了符合格式的的电话号，而且输入的密码长度>6
      if(this.userIdTrue && this.userPswIpt.length>6){
        this.isOk = true;
        // console.log(this.isOk)
      }
    },
    // 点击输入框的清除按钮
    clearId(){
      this.userIdIpt = ""
    },
    clearPsw(){
      this.userPswIpt = ""
    },

     //封装过期控制代码
    set(key,value){
        var curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
    },
    
    // 登录判断
    loginTo(){
    //   console.log("点击登录");
      this.$http({
        url:"http://datainfo.duapp.com/shopdata/userinfo.php",
        method:"get",
        // emulateJSON:true,
        params:{
          status:"login",
          userID:this.userIdIpt,
          password:this.userPswIpt
        },
      }).then((data) => {
          // console.log(data.data)
          let thisdata = data.data;
          if(thisdata==0 || thisdata==2){
            alert("请检查用户名或密码是否正确")
          }else if(thisdata instanceof Object){
            // 如果返回值是对象，说明登录成功，把用户名存储到本地
            // 这里用上面封装好的函数
            this.set("ACLC_userID",this.userIdIpt)
            //转到上一页
            this.$router.back(-1)
          }
      })
     
    },
    closeBack(){
      console.log("关闭本页面,回到上一个页面")
      // this.$router.back(-1)
      this.$router.push("/my")
    }
  }
}
</script>

<style lang="less">
.L_closeBtn{
  float: left;
  width: 0.8rem;
  height: 0.8rem;
}
.head{
  background:#fff !important;
}
.vux-header .vux-header-left{
  left: 0 !important;
  top:50%;
  margin-top: -0.4rem;
}
.registBox{
  // position: absolute;
  // top: 1rem;
  margin-top: 1rem;
  overflow: hidden;
  padding: 1rem 0.94rem;
  background:#fff;
  label{
    width: 100%;
    border-bottom: 0.01rem solid #aaa;
    height: 0.9rem;
    float: left;
    position: relative;
    input{
      border: 0;
      float: left;
      height: 0.9rem;
      line-height: 0.9rem;
      text-indent: 0.7rem;
      width: 100%;
      font-size: 0.3rem;
      outline: none;
    }
    .user_psw{
      background: url(../../static/dlumima_icon.png) no-repeat left;
      background-size: 0.4rem;
    }
    .userId_icon{
      background: url(../../static/dlzhao_icon.png) no-repeat left;
      background-size: 0.4rem;
    }
    .closeIcon{
      float: right;
      position: absolute;
      right: 0;
      width: 0.88rem;
      height: 0.88rem;
      background: url(../../static/chacha_icon.png) no-repeat center;
      background-size: 100%;
    }
  }
  .loginBtn{
      margin: 0.8rem auto;
      width: 100%;
      height: 1rem;
      color: #fff;
      background: #f2f2f2;
      border-radius: 0.5rem;
      border: 0;
      font-size: 0.34rem;
    }
  .isLogin{
     background:#fb6b42;
  }
}
.botBox{
  padding: 4.6rem 0 1.2rem;
  width: 100%;
  // position: fixed;
  // bottom: 0;
  display: flex;
  background: #ffffff;
  a{
    float: left;
    width: 3.73rem;
    text-align: center;
    color: #aaaaaa;
    font-size: 0.28rem;
  }
  .registNew{
    border-right: 0.01rem solid #aaaaaa;
  }
}

</style>

</style>
