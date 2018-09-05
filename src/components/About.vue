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
    // console.log(this.$route)
  },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  beforeRouteEnter (to, from, next) {
    // ...
    console.log('beforeRouteEnter')
    // console.log(this.$el)
    next(vm => {
      console.log(vm.$el)
    })
  }
}
</script>
