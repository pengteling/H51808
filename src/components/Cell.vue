<template>
  <div></div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('moduleA/moduleB')
export default {
  computed: {
    ...mapState(['msg'])
  }
  // mounted()
}
</script>
