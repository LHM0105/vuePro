// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Main from './components/MainPage'
import Youxuan from './components/YouXuan'
import My from './components/My'
import More from './components/More'
import vHome from './components/Home'
import Active from './components/Active'
import Kaquan from './components/Kaquan'
import Touzi from './components/Touzi'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)
// 引入axios以进行数据请求
// import axios form 'axios'
// Vue.prototype.$axios = axios
// vux提供的数据请求的插件
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
// import Mock from './mock'

// 引入mockjs进行数据模拟
require('./mock')

import PageTransition from './components/PageTransition'
const routes = [{
  path: '/',
  component: Main,
  // component:PageTransition,
  children:[{
    path:'',
    redirect:'/home'
  },{
    path:'/home',
    component:vHome
  },{
    path:'/more',
    component:More
  },{
    path:'/youxuan',
    component:Youxuan
  },{
    path:'/my',
    component:My
  },{
    path:'/active',
    component:Active
  },{
    path:'/home/try',
    component:Kaquan
  },{
    path:"/youxuan/tz/:id",
    component:Touzi
  },{
    path:"/home/activity",
    component:Active
  },{
    path:"/my/login",
    component:Login
  },{
    path:"/my/register",
    component:Register
  }]
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

