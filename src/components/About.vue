<template>
  <div>
    <div>
      About
    </div>
    <nav>
      <router-link to="/about/tel">电话</router-link>
      <router-link to="/about/addr">地址</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$route)
  }
}
</script>
