<template>
  <div style="background:#fff;height:100%">
      <x-header :left-options="{showBack:false}" class="head">
        <i slot="overwrite-left" @click="closeBack" class="L_closeBtn"><img src="../../static/clos_icon.png" width="100%" alt="" /></i>
        注册
      </x-header>
      <div :class="{registBox:true}">
        <form action="post">
          <label for="userId">
            <input v-model="userIdIpt" @input="userIdchange" :class="{userId_icon:true}" type="text" name="userId" id="userId" placeholder="输入手机号">
            <i :class="{closeIcon:isClear}" @click="clearId"></i>
          </label>
          <label for="yzmImg">
            <input type="text" name="yzmImg" :class="{yzmImg:true}" id="yzmImg" placeholder="图片验证码" v-model="yzmImgIpt"  @input="yzmImgChange"/>
            <div class="yzmBox">
              <!-- <canvas id="yzmCanvas"></canvas> -->
              <span class="yzm" style="font-style:Italic;line-height:1rem">{{yzm}}</span>
              <i class="updateIcon" @click="updateYzm"></i>
            </div>
          </label>
          <label for="yzm">
            <input type="text" name="yzm" id="yzm" class="yzmIcon" placeholder="验证码" />
            <i :class="{getyzm:true,getyzmActive:isCangetYzm}" @click="getYzm">获取验证码</i>
          </label>
          <label for="psw">
            <input v-model="userPswIpt" @input="pswchange"  :class="{user_psw:true}" type="password" name="psw" id="psw" placeholder="设置密码">
            <i :class="{closeIcon:isClear0}" @click="clearPsw"></i>
          </label>
          <input type="button" value="注册" @click="registPost" :class="{registBtn:true,isRegist:isOk}" />
        </form>
      </div>

      <div :class="{R_botBox:true}">
        <p>注册即为<span>《安创理财服务协议》</span></p>
        <p class="botP">已有账号?
          <router-link to="/my/login" :class="{loginNow:true}">现在登录</router-link>
        </p>
      </div>
  </div>
</template>
<style lang="less">
.R_botBox{
  background: #ffffff;
  overflow: hidden;
  p{
    text-align: center;
    color: #aaaaaa;
    span{
      color: #fb7954;
      text-decoration: underline;
    }
    .loginNow{
      color: #fb7954;
    }
  }
  .botP{
    margin: 3.5rem 0 0 0;
  }
}
.registBox{
  padding-bottom: 0;
  .yzmImg{
    background: url(../../static/tpyzm_icon.png) no-repeat left center;
    background-size: 0.4rem 0.4rem;
    width: 3.6rem;
  }
  .yzmBox{
      float: right;
      width: 1.9rem;
      height: 100%;
      #yzmCanvas{
        width: 1.1rem;
        height: 0.7rem;
        float: left;
        margin-top: 0.1rem;

      }
      .updateIcon{
        float: right;
        width: 0.32rem;
        height: 0.32rem;
        margin-top: 0.3rem;
        background: url(../../static/shuaxin_icon.png) no-repeat center;
        background-size: 100%;
      }
    }
  .yzmIcon{
    width: 3.4rem;
    background:url(../../static/dxyzma_icon.png) no-repeat left center;
    background-size: 0.4rem 0.4rem;
  }
 .getyzm{
   float: right;
   width: 1.93rem;
   height: 0.6rem;
   background:#f0ebeb;
   color: #ffffff;
   border-radius: 0.3rem;
   margin-top: 0.15rem;
   font-size: 0.26rem;
   font-style: normal;
   text-align: center;
   line-height: 0.6rem;
 }
 .getyzmActive{
   background:#fb7954;
 }
 .registBtn{
   margin: 0.8rem auto 0.3rem;
    width: 100%;
    height: 1rem;
    color: #fff;
    background: #f2f2f2;
    border-radius: 0.5rem;
    border: 0;
    font-size: 0.34rem;
 }
 .isRegist{
   background:#fb7954;
 }
}
</style>
<script>
import { XHeader } from 'vux'

export default {
  name:"Register",
  data(){
    return {
      // 按钮颜色
      isOk:false,
      isClear:false,
      isClear0:false,
      userIdIpt:'',
      userPswIpt:'',
      isDisable:"",
      userIdTrue:false,
      yzmImgIpt:'',
      // ctx:null,
      yzm:"",
      bgcolor:"",
      isCangetYzm:false,
    }
  },
  components:{
     XHeader
  },
  methods:{
    // 更新验证码
    updateYzm(){
      console.log("更新验证码")
      // this.change(this.ctx)
      // console.log(this.yzmImgIpt)
      this.yzm = Math.floor(Math.random()*8999+1000);
      this.bgcolor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
    },
    // 确认注册
    registPost(){
      console.log("确认注册");
      // 发送请求给后台
      this.$http({
        url:"http://datainfo.duapp.com/shopdata/userinfo.php",
        method:"get",
        // emulateJSON:true,
        params:{
          status:"register",
          userID:this.userIdIpt,
          password:this.userPswIpt
        }
      }).then((data) => {
        console.log(data);
        if(data.data == 1){
          alert("恭喜您，注册成功")
          // 跳转登陆页
          this.$router.push("/my/login")
        }else if(data.data == 0){
          alert("该号码已注册")
        }else{
          alert("由于一股神秘力量，您未注册成功 稍后再试吧")
        }
      })
    },
        // 获取验证码
    getYzm(){
      console.log("获取短信验证码")
    },    
    yzmImgChange(){
      
    },
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
//     change(ctx){
// 				//清除画布
// 				ctx.clearRect(0,0,110,70);
// //				设置渐变
// 				var lg = ctx.createLinearGradient(0,0,110,70);
// 				lg.addColorStop(0,"yellow");
// 				lg.addColorStop(0.3,"orange");
// 				lg.addColorStop(0.5,"yellow")
// 				lg.addColorStop(0.7,"green");
// 				lg.addColorStop(1,"deepskyblue");
// 				ctx.strokeStyle = lg;
// 				//设置字体
// 				ctx.font = "Italic 120px mocrosoft yahei"
// 				ctx.textBaseline = "top"
// 				ctx.textAlign = "left";
// 				var text = Math.floor(Math.random()*8999+1000);
// 				//绘制文字
// 				ctx.strokeText(text,5,5);
//     },
     closeBack(){
      console.log("关闭本页面,回到上一个页面")
			this.$router.push("/my")
    }
  },
  mounted(){
    // this.ctx = document.getElementById('yzmCanvas').getContext("2d");
		// //定义函数
    // this.change(this.ctx);
    this.yzm = Math.floor(Math.random()*8999+1000);
    // 渲染验证码
  }
}
</script>
