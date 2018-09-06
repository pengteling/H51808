<template>
  <div>
    <transition :name="slider">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slider: 'slider'
    }
  },
  beforeRouteUpdate (to, from, next) {
    // ...
    if (to.meta.index > from.meta.index) {
      this.slider = 'slider2'
    } else {
      this.slider = 'slider'
    }
    next()
  }
}
</script>
