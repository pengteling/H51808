<template>
  <div>
    User
    <p>
      {{ $route.params.userid }}
      {{ $route.params.photoid }}

    </p>
    <p>
      {{userid}}
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ['userid', 'name', 'photoid', 'sokey'],
  mounted () {

  },
  created () {
    // 发ajax
  },
  beforeRouteEnter (to, from, next) {
    // ...
    // 导航完成前 请求数据
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }
}
</script>
