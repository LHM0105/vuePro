<template>
  <div>
  <!-- <div @touchstart="touchstart()" @touchend="touchend()" :class="{con:true,up:isUp,down:isDown}"> -->
    <swiper  ref="mySwiper" style="margin-bottom:0.9rem;" :options="swiperOption">
          <!-- slides -->
        <swiper-slide>
             <div :class="{con1:true}">
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
            </div>
        </swiper-slide>
        <swiper-slide>
            <div :class="{con2:true}">
                <ul>
                    <li @click="chpActive()" :class="{active:chpIsActive}">产品详情</li>
                    <li @click="tzActive()" :class="{active:tzIsActive}">投资记录</li>
                </ul>
                <component :is="comView" style="margin-top:0.9rem;height:10.4rem;overflow-y:scroll;"></component>
            </div>
        </swiper-slide>
    </swiper>
   

    
  </div>
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import ChpDetail from '@/components/ChpDetail'
import Tzjl from '@/components/Tzjl'
export default {
    name:"Touzi1",
    data(){
        return {
            touchStartY:0,
            touchEndY:0,
            touchDis:0,
            tzId:"",
            comView:'ChpDetail',
            chpIsActive:true,
            tzIsActive:false,
            isUp:false,
            isDown:false,
            isFixed:false,
            swiperOption: {
                // swiper options 所有的配置同swiper官方api配置
                direction: 'vertical'
            }
        }
    },
    components:{
        ChpDetail,Tzjl,
        swiper, swiperSlide
    },
    methods:{
        chpActive(){
            this.comView = "ChpDetail";
            this.chpIsActive = true;
            this.tzIsActive = false;
        },
        tzActive(){
            this.comView = 'Tzjl';
            this.tzIsActive = true;
            this.chpIsActive = false;
        },

    }
}
</script>
<style lang="less" scoped>
.swiper-container{
    height: 12.5rem;
}
.con{
    position: relative;
    transition: all 1s linear;
    // overflow: hidden;
}
.up{
    margin-top: -11.1rem;
}
.down{
    margin-top: 0;
}

.con2{
    height: 10rem;
    padding-top: 1rem;
    ul{
        width: 100%;
        overflow: hidden;
        background: #ffffff;
        position:absolute;
        z-index: 3;
        li{
            width: 50%;
            height: 0.9rem;
            line-height: 0.9rem;
            float: left;
            text-align: center;
        }
        .active{
            border-bottom: 0.04rem solid #fb7650;
        }
    }
    .fix{
        position: fixed;
        top: 1rem;
    }
}
.con1{
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
}
</style>
