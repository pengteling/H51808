<template>
  <div>
    <Child></Child>
    test
    <p>
      {{ $store.state.msg }}
    </p>
  </div>
</template>
<script>
import Child from '@/Child'
export default{
  mounted () {
    console.log(this.$store)
    // this.$store.state.msg = 456
  },
  data () {
    return {
      msg: 123
    }
  },
  components: {
    Child
  }
}
</script>
