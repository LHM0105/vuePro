<template>
<transition name="slide">
	<div>
		<div :class="{A_content:true}">
			<img src="../../static/dl_icon_del2.png" @click="close" :class="{closeBtn:true}" alt="">
			<img src="../../static/anc_fx_default.png" @click="shareTo" :class="{shareBtn:true}" alt="">
			<img src="http://temp.im/640x320/dd22aa/fff" alt="">	
			<img src="http://temp.im/640x320/886611/fff" alt="">	
			<img src="http://temp.im/640x320/662211/fff" alt="">	
			<img src="http://temp.im/640x320/1122aa/fff" alt="">
			<img src="http://temp.im/640x320/dd22aa/fff" alt="">					
		</div>	
	</div>
 </transition>
</template>

<script>
export default{
	name:'Active',
	methods:{
		close(){
			console.log("关闭本页面,回到上一个页面")
			this.$router.back(-1)
		},
		shareTo(){
			console.log("分享，需先登录")
		}
	}
}
</script>

<style lang="less">
.A_content{
	.closeBtn{
		width: 0.9rem;
		height: 0.6rem;
		position: fixed;
		left: 0;
		top: 0.4rem;

	}
	.shareBtn{
		width: 0.8rem;
		height: 0.8rem;
		position: fixed;
		right: 0.2rem;
		top: 0.4rem;
		
	}
	overflow: hidden;
	img{
		width: 100%;
	}
}
</style>