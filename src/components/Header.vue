<template>
  <div>
      <header></header>
      <slot name="backBtn" class="backBtn"></slot>
      <h4>头部</h4>
      <slot name="rightBtn"></slot>
  </div>
</template>
<script>
export default {
    name:"Header",
}
</script>
<style>
.backBtn{
    float: left;
    background: orangered;
}
</style>
