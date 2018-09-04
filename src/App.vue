<template>
  <!-- <div :class="[$style.app, classa]" > -->
  <div class="app">
    <h2>
      App
    </h2>
  </div>
</template>
<script>
import CommClass from './style/comm.scss'
console.log(CommClass)
export default {
  data(){
    return{
      msg:456,
      classa:CommClass.app
    }
  }
}
</script>
<style lang="scss" scoped>
.app{
  font-size: 100px;
  h2{
    color:yellowgreen
  }
}
</style>
