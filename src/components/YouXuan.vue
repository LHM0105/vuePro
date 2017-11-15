<template>
<div>
  <x-header :left-options="{showBack: false}">优选</x-header>
  <scroller style="top:1rem" :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
    <div :class="{YX_content:true}" v-for="data in datalist">
      <h4>{{data.tzName}}</h4>
      <div :class="{content:true}">
        <div :class="{left:true}">
          <p>年化收益率</p>
          <p :class="{percentNum:true}">{{data.shouyi}}%</p>
        </div>
        <div :class="{center:true}">
          <p :class="{cenTxt:true}">投资期限</p>
          <p :class="{daysNum:true}">{{data.tzqx}}天</p>
        </div>
        <div :class="{right:true}">
          <p>起投金额{{data.qt}}元</p>
          <router-link :to="'/youxuan/tz/'+data.tzID" tag="p" :class="{tzBtn:true}">立即投资</router-link>
        </div>
      </div>
    </div>

  </scroller>
	<v-footer></v-footer>
</div>
</template>
<script>
// 引入vueScroller实现滚动及上拉加载，下拉刷新
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
import { XHeader } from 'vux'
import vFooter from '@/components/Footer'
import vHeader from '@/components/Header'
export default {
  name: 'Youxuan',
  components:{
    vFooter,vHeader,
    XHeader
  },
  // 请求数据，渲染页面
  data(){
    return{
      datalist:[],
      noData: '',
    }
    
  },
  mounted(){
    // 获取数据
    this.$http({
      url:"http://youxuan.cn",
      method:"get"
    }).then((data) => {
      console.log("初次获取",data)
      let thisdata = data.data.arrYx;
      this.datalist = thisdata;
      // console.log(this.datalist)
    })
  },
  methods:{
    infinite() {
      // 目前只能刷新一次？？？why
      console.log("上拉加载")  ;
      // ？？？？为什么要加setTimeOut
      // setTimeout(() => {
        //请求数据
        this.$http({
          url:"http://youxuan.cn",
          method:"get"
        }).then((data) => {
          console.log(data)
          // 获取数据
          let thisdata = data.data.arrYx;
          // 加入数组
          this.datalist.push(...thisdata);
          console.log(this.datalist)
          if(thisdata.length || thisdata.length==0){
            // 没有数据加载时
            //不传参就在没有数据时执行，现在传参3，加载到第3此提示没有更多数据，传参仅做测试
            // 拿到真实数据接口移除参数
            this.$refs.myscroller.finishInfinite(3)
            
          }else{
            this.datalist.push(...thisdata);
            // setTimeout(() => {
              $scroller.get('myScroller').resize()
              // infinite();
            // })
          }
        })
      // })
    },
    

    //done()表示这次异步加载数据完成，加载下一次
    //因为这个是同步的，加了setTimeout就是异步加载数据；
    //因为涉及到this指向问题，所以将他放在一个变量里。
    refresh() {
      console.log('下拉刷新')
      // setTimeout(()=>{
      this.$http({
        url:"http://youxuan.cn",
        method:"get"
      }).then((data) => {
        console.log("下拉刷新获取"+data)
        let thisdata = data.data.arrYx;
        this.datalist = thisdata;
        // console.log(this.datalist)
      })
      // },1000)
      // 停止刷新
      this.$refs.myscroller.finishPullToRefresh()
    }

  }
}
</script>

<style lang="less">
.vux-header{
  position:fixed !important;
  top: 0;
  width: 100%;
  height: 1rem;
  background-color: #fb7650 !important;
}
.vux-header-title-area, .vux-header .vux-header-title{
  line-height: 0.9rem !important;
}
.YX_content{
  height: 3.35rem;
  border-bottom: 0.01rem solid #cccccc;
  background:#ffffff;
  padding: 0 0.3rem;
  h4{
    font-size: 0.3rem;
    font-weight: 500;
    line-height: 1.3rem;
  }
  .content{
    div{
      float: left;
      height: 2.05rem;
      p{
        font-size: 0.24rem;
        color: #aaaaaa;
        height: 1rem;
      }
      .cenTxt{
        color: #000;
      }
      .percentNum{
        font-size:0.36rem;
        color: #fb7650;
        font-weight: 600;
      }
      .daysNum{
        color: #fb7650;
        font-size: 0.3rem;
      }
      .tzBtn{
        width: 1.9rem;
        height: 0.62rem;
        background-color: #fb7650;
        border-radius: 0.31rem;
        line-height: 0.62rem;
        color: #ffffff;
        text-align: center;
        font-size: 0.28rem;
      }
    }
    .left{
      width: 2.8rem;
    }
    .center{
      width: 2rem;
    }
  }
}
</style>