<template>
<div class="components-header">
  <router-link to="/">
    <img src="../../images/logo.png" alt="" class="logo">
  </router-link>
  <h1 class="caption">Vue Music Player</h1>
</div>
</template>
<style lang="scss">
.components-header{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding:15px 25px;
  border-bottom: #ccc 1px solid;
  background: #fff;
  .caption{
    font-size: 20px;
    text-indent: 20px;
  }
  .logo{
    flex:0 0 auto;
    width:40px;
  }
}

</style>
