<template>
  <div>
    <h1>App</h1>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/user">会员中心</router-link>
      <router-link to="/about">关于我们</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>
nav a{
  margin: 0 10px
}
</style>
