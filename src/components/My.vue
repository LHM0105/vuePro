<template>
<div>
	 <x-header :left-options="{showBack: false}">我的</x-header>
	<v-footer></v-footer>
</div>
</template>

<script>
import { XHeader } from 'vux'
import vFooter from '@/components/Footer'
export default {
  name: 'My',
  components:{
    vFooter,
    XHeader
  }
}
</script>

<style>
</style>