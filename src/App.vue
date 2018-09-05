<template>
  <div>
    <h1>App</h1>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/user">会员中心</router-link>
      <router-link to="/about">关于我们</router-link>
    </nav>
    <router-view></router-view>
    <router-view name="header"></router-view>
    <router-view name="footer"></router-view>
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
</style>
