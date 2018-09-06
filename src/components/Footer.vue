<template>
  <ul class="nav">
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/category">分类</router-link>
    </li>
    <li>
      <router-link to="/cart">购物车</router-link>
    </li>
    <li>
      <router-link to="/me">我的</router-link>
    </li>
  </ul>
</template>
<style lang="scss">
.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8));
  li{
    flex:1 1 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      color:#333;
      &.router-link-exact-active{
        color:#e00
      }
    }
  }
}

</style>
