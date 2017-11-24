<template>
  <div>
     <ul>
       <li v-for="item in datalist">
         <img :src="item.userPhoto"/>
         <div class="txt">
           <p class="name">{{item.userName}}</p>
           <p>{{item.time}}</p>
         </div>
         <span class="money">{{item.money}}</span>
       </li>
     </ul>
  </div>
</template>
<script>
export default {
  name:"Tzjl",
  data(){
    return {
      datalist:[],
    }
  },
  mounted(){
    this.$http({
      url:"http://Tzjl.cn",
      mehtod:"get",
      // params:{
      //   tzID:"1"
      // }
    }).then((data)=>{
      console.log(data.data.num)
      this.datalist = data.data.num;
    })
  }
}
</script>


<style lang="less" scoped>
ul{
  li{
    height: 0.7rem;
    width: 6.9rem;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      border-radius:100%;
      width:0.7rem;
      height:0.7rem;
    }
    .txt{
      width: 4.8rem;
      p{
        margin: 0;
        padding: 0;
        line-height: 0.5rem;
        text-align: left;
        text-indent: 0.3rem;
        color: #666;
      }
      .name{
        font-size: 0.36rem;
        color: #000;
      }
    }
    .money{

    }
  }
}
</style>
