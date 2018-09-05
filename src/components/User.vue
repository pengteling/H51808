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

  }
}
</script>
