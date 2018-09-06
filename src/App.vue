<template>
  <div class="app">
    <h1>App</h1>
    <nav>
      <router-link to="/#miaodian">首页</router-link>
      <router-link to="/user">会员中心</router-link>
      <router-link to="/user/123">会员123</router-link>
      <router-link to="/user/456">会员456</router-link>
      <router-link to="/about">关于我们</router-link>
    </nav>
    <transition name="slider">
      <router-view></router-view>
    </transition>
    <!-- <router-view name="header"></router-view>
    <router-view name="footer"></router-view> -->
  </div>
</template>
<script>
export default {
  mounted () {
    // console.log(this.$route)
  }
}
</script>

<style>
nav a{
  margin: 0 10px
}
.slider-enter-acitve,.slider-leave-active{
  transition:all .5s;
}
.slider-enter{
  opacity: 0;
  transform: translate3d(-300px,0,0)
}
.slider-leave-to{
  opacity: 0;
  transform: translate3d(300px,0,0)
}
.app > div{
  width: 100%;
  position: absolute;
}
</style>
