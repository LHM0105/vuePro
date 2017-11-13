<template>
  <div>
    <!-- <tabbar>
      <tabbar-item selected link="/home">
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/youxuan">
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">优选</span>
      </tabbar-item>
      <tabbar-item link="/more">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">更多</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar> -->
    <ul>
        <router-link to="/home" tag="li" class="home">
            <i class="iHome" :class="{active:isActive}"></i>
        </router-link>
        <router-link to="/youxuan" tag="li" class="yoxuan">
            <i class="iYoxuan" :class="{active:isActive}"></i>            
        </router-link>
        <router-link to="/active" tag="li" class="activity">
            <i></i> 
        </router-link>
        <router-link to="/more" tag="li" class="more">
            <i class="iMore" :class="{active:isActive}"></i> 
        </router-link>
        <router-link to="/my" tag="li" class="my">
            <i class="iMy" :class="{active:isActive}"></i> 
        </router-link>
    </ul>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default{
    name:"footer",
    components:{
        Tabbar,TabbarItem
    }
}
</script>

<style scoped>

ul{
    width: 100%;
    height: 1.38rem;
    background:url(../../static/tab_background.png) no-repeat center;
    background-size: 100%;
    position: fixed;
    font-size: 0.24rem;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    list-style: none;
}
i{
    display: block;
    width: 0.42rem;
    height: 0.72rem;
    margin-top: 0.5rem;
}
.home i{
    background:url(../../static/sy_ash.png) no-repeat center;
    background-size: 100%;
}
.yoxuan i{
    background:url(../../static/btn_licai.png) no-repeat center;
    background-size: 100%;
}
.more i{
    background:url(../../static/fx_ash.png) no-repeat center;
    background-size: 100%;
}
.my i{
    background:url(../../static/btn_wode.png) no-repeat center;
    background-size: 100%;
}

.router-link-active .iHome{
    background:url(../../static/sy_bright.png) no-repeat center;
    background-size: 100%;
}
.router-link-active .iYoxuan{
    background:url(../../static/btn_licai_click.png) no-repeat center;
    background-size: 100%;
}
.router-link-active .iMore{
    background:url(../../static/fx_bright.png) no-repeat center;
    background-size: 100%;
}
.router-link-active .iMy{
    background:url(../../static/btn_wode_click.png) no-repeat center;
    background-size: 100%;
}
.activity i{
    width: 0.96rem;
    height: 0.96rem;
    margin-top: 0.3rem;
    background:url(../../static/anc_hdozxin_icon.png) no-repeat center;
    background-size: 100%;
}

/* 路由激活状态 */
.router-link-active{
    color: red;
}
</style>
