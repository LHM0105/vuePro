<template>
  <div>
      <!-- 头部 -->
    <x-header :left-options="{backText: ''}">
      <i slot="overwrite-left" class="backIcon" @click="goback"></i>
      向钱进{{tzID}}
    </x-header>
    <div class="TZ_con">
        <div class="shy">
            <p class="p1">11.10%</p>
            <p class="p2">年化收益率</p>
        </div>
        <ul>
            <li>加入人数（位）<span>28</span> </li>
            <li>起投金额（元）<span>500</span> </li>
            <li>投资期限（天）<span>66</span> </li>
        </ul>
    </div>
    <div class="TZ_xmze">
        <div class="left">
            <h5>50000</h5>
            <p>项目总额</p>
        </div>
        <div class="right">

        </div>
    </div>
    <div class="infoList">
        <p><span>气息日：</span><i>T(购买日期)+1</i></p>
        <p><span>到期日期：</span><i>2018年01月25日</i></p>
        <p><span>还款方式：</span><i>到期还本付息</i></p>
    </div>
    <div class="aqbz">
        <h4>安全保障<span>查看更多安全保障<i></i></span></h4>
        <ul>
            <li><img src="../../static/gs_xq_1zhaq.png" width="100%" height="100%" alt=""></li>
            <li><img src="../../static/gs_xq_2flbz.png" width="100%" height="100%" alt=""></li>
            <li><img src="../../static/gs_xq_3ykfx.png" width="100%" height="100%" alt=""></li>
        </ul>
    </div>
    <div class="footDiv">
        <p>继续拖动，查看图文详情</p>
    </div>
    <div class="footP">
        <i></i>
        <p>立即抢购</p>
    </div>
  </div>
</template>

<style lang="less">
.TZ_con{
    margin-top: 0.98rem;
    background: #fb7650;
    color: #ffffff;
    .shy{
        height: 1.63rem;
        .p1{
            font-size: 0.8rem;
            text-align: center;
        }
        .p2{
            text-align: center;
            font-size: 0.26rem;
        }
    }
    ul{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.26rem 0.3rem;
        li{
            width: 2.24rem;
            height: 1.15rem;
            background: rgba(255, 255, 255, 0.3);
            font-size: 0.26rem;
            text-align: center;
            line-height: 0.6rem;
            span{
                display: block;
                text-align: center;
                font-size: 0.38rem;
            }
        }
    }
}
.TZ_xmze{
    height: 0.8rem;
    padding: 0.3rem 0.5rem;
    background:#fff;
    .left{
        float: left;
        h5{
            color: #fb7650;
            font-size: 0.34rem;
            font-weight: 500;
        }
        p{
            color: #aaaaaa;
            font-size: 0.24rem;
        }
    }
}
.infoList{
    p{
        height: 0.85rem;
        line-height: 0.85rem;
        padding: 0 0.5rem 0 0.65rem;
        font-size: 0.3rem;
        span{
            float: left;
        }
        i{
            font-style: normal;
            float: right;
        }
    }
    p:nth-of-type(2n){
        background: #fff;
    }
}
.aqbz{
    background: #ffffff;
    h4{
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.3rem;
       font-weight: 500;
       font-size: 0.34rem;
       span{
           float: right;
           font-size: 0.26rem;
           color: #aaaaaa;
           i{
               float: right;
               width: 0.16rem;
               height: 0.3rem;
               background: url(../../static/right_icon.png) no-repeat center;
               background-size: 100%;
               margin: 0.26rem 0 0 0.1rem;
           }
       }
    }
    ul{
        display: flex;
        padding: 0 0.26rem 0.3rem 0.26rem;
        justify-content: space-between;
        li{
            width: 2.2rem;
            height: 1.1rem;
            border: 0.01rem solid #da9e49;

        }
    }
}
.footDiv{
    height: 1.65rem;
    p{
        line-height: 1.65rem;
        text-align: center;
        color: #9e9e9e;
    }
}
.footP{
    height: 1rem;
    background: #fb7650;
    position: fixed;
    bottom: 0;
    width: 100%;
    i{
        float: left;
        height: 1rem;
        width: 1rem;
        background: #fc9f85 url(../../static/jsq_icon.png) no-repeat left center; 
        background-size: contain;
    }
    p{
        text-align: center;
        line-height: 1rem;
        font-size: 0.32rem;
        color: #ffffff;
    }
}
</style>
<script>
import { XHeader } from 'vux'
export default {
    name:"Touzi",
    components:{
        XHeader
    },
    data(){
        return {
            tzID:"",
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
    },
    mounted(){
        // 从列表页获取到了id，应该在此处通过id查询具体信息，然后显示到页面上
        this.tzID = this.$route.params.id;
        console.log(this.$route.params)
    }
}
</script>
