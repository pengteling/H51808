<template>
  <div>
    <h2>首页</h2>
    <div class="home">
      <a name="miaodian">Home</a>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    // console.log(this.$route)
    // // setTimeout(() => this.$router.push({ name: 'About' }), 3000)
    // setTimeout(() => this.$router.push(
    //   {
    //     name: 'UserWho',
    //     params: { userid: 123 },
    //     query: { photoid: 23, sokey: '2018' }
    //   }),
    // 3000)
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('beforeRouteLeave')
    next()
  }
}
</script>
<style>
.home{
  height: 2000px;
  padding-top: 1000px;
  background: #580
}
</style>
