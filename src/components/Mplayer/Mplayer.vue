<template>
  <audio
    :src="currentItem.file"
    @loadedmetadata="loadedmetadata"
    @timeupdate="timeupdate"
    ref="audio"
    @ended="ended"
  >
  </audio>
</template>
<script>

import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Mplayer',
  computed: {
    ...mapState('player', ['paused', 'changeTime']),
    ...mapGetters('list', ['currentItem']),
    audio () {
      return this.$refs.audio
    }
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION', 'GET_CURRENT_TIME']),
    loadedmetadata () {
      this.GET_DURATION(this.audio.duration)
    },
    timeupdate () {
      this.GET_CURRENT_TIME(this.audio.currentTime)
    },
    ended () {
      // 自动下一首
    }
  },
  watch: {
    paused (val) {
      console.log(val)
      if (!val) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    },
    // currentTime (val, oldVal) {
    //   if (val - oldVal > 1) {
    //     this.audio.currentTime = val
    //   }
    // }
    changeTime (val) {
      this.audio.currentTime = val
    }
  },
  mounted () {
    // this.audio.play()
    this.audio.oncanplay = () => {
      if (!this.paused) {
        this.audio.play()
      }
    }
  }
}
</script>
