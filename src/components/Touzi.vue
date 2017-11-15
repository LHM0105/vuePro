<template>
  <div>
      <!-- 头部 -->
    <x-header :left-options="{backText: ''}">{{tzID}}</x-header>
    <h2>这是投资页，相当于详情页</h2>
  </div>
</template>

<style lang="less">

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
    mounted(){
        // 从列表页获取到了id，应该在此处通过id查询具体信息，然后显示到页面上
        this.tzID = this.$route.params.id;
        console.log(this.$route.params)
    }
}
</script>
