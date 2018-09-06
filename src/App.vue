<template>
  <div class="container">
    <transition name="slider">
      <router-view class="main"></router-view>
    </transition>
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

<style lang="scss">
html,body{
  overflow: hidden;
}
body{
  margin:0
}
ul,li{
  list-style: none;
  padding: 0;
  margin:0
}
a{
  text-decoration: none
}
.container{
  display: flex;
  height: 100vh;
  flex-direction: column;
  .main{
    flex:1 1 0%;
  }
  .nav{
    flex:0 0 50px;
  }
}

.slider-enter-active,.slider-leave-active{
  position: absolute;
  transition:all 3s;
}
.slider-enter{
  opacity: 0;
  transform: translate3d(-300px,0,0)
}
.slider-leave-to{
  opacity: 0;
  transform: translate3d(300px,0,0)
}

.slider2-enter-active,.slider2-leave-active{
  position: absolute;
  transition:all 3s;
}
.slider2-enter{
  opacity: 0;
  transform: translate3d(300px,0,0)
}
.slider2-leave-to{
  opacity: 0;
  transform: translate3d(-300px,0,0)
}
</style>
