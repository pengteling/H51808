<template>
  <audio
    :src="currentItem.file"
    autoplay
  >
  </audio>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('list', ['currentItem'])
  }
}
</script>
