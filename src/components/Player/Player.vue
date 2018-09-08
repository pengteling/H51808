<template>
<div class="player-page">
  <h1 class="caption">
    <router-link :to="{name:'List'}">
      我的私人音乐坊 &gt;
    </router-link>
  </h1>
  <div class="mt20 row">
    <div class="controll-wrapper">
      <h2 class="music-title">
        <router-link :to="{name:'Lrc'}">
          {{ currentItem.title }}
        </router-link>
      </h2>
      <h3 class="music-artist mt10">{{ currentItem.artist }}</h3>
      <div class="row mt20">
        <div class="left-time -col-auto">-{{leftTime}}</div>
        <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
          <div class="volume-wrapper">
            <ProgressBar :value="volume*100" @changeProgress="CHANGE_VOLUME"></ProgressBar>
          </div>
        </div>
      </div>
      <div style="height: 10px; line-height: 10px;">
        <ProgressBar
          :value="currentPercentAbsoulte"
          @changeProgress="CHANGE_PROGRESS"
        />
      </div>
      <div class="mt35 row">
        <div>
          <i class="icon prev"></i>
          <i class="icon ml20" :class="paused? 'play':'pause'" @click="PLAY_PAUSE"></i>
          <i class="icon next ml20"></i>
        </div>
        <div class="-col-auto"><i class="icon repeat-once"></i></div>
      </div>
    </div>
    <div class="-col-auto cover">
      <router-link :to="{name:'Lrc'}">
        <img :src="currentItem.cover" :alt="currentItem.title" :class="paused ? 'pause':'play'">
      </router-link>
    </div>
  </div>
</div>
</template>
<script>

import ProgressBar from './../Progress/Progress.jsx'
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('list', ['currentItem']),
    ...mapState('player', ['volume', 'paused']),
    ...mapGetters('player', ['leftTime', 'currentPercentAbsoulte'])
  },
  methods: {
    ...mapMutations('player', ['PLAY_PAUSE', 'CHANGE_VOLUME', 'CHANGE_PROGRESS'])
  },
  components: {
    ProgressBar
  }
}
</script>

<style lang="scss">
.player-page {
  width: 700px;
  margin: auto;
  margin-top: 120px;
  .caption a {
    font-size: 16px;
    color: rgb(47, 152, 66);
    text-decoration: none;
  }
  .cover {
    width: 180px;
    height: 180px;
    margin-left: 20px;
    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      &.play {
        animation-play-state: running;
      }
      &.pause {
        animation-play-state: paused;
      }
      animation: rotate 15s linear forwards infinite;
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  .volume-container {
    position: relative;
    left: 20px;
    top: -3px;
  }
  .volume-container .volume-wrapper {
    opacity: 0;
    transition: opacity .5s linear;
  }
  .volume-container:hover .volume-wrapper {
    opacity: 1;
  }
  .music-title {
    font-size: 25px;
    font-weight: 400;
    color: rgb(3, 3, 3);
    height: 36px;
    line-height: 36px;
  }
  .music-artist {
    font-size: 15px;
    font-weight: 400;
    color: rgb(74, 74, 74);
  }
  .left-time {
    font-size: 14px;
    color: #999;
    font-weight: 400;
    width: 40px;
  }
  .icon {
    cursor: pointer;
  }
  .ml20 {
    margin-left: 20px;
  }
  .mt35 {
    margin-top: 35px;
  }
  .volume-wrapper {
    width: 60px;
    display: inline-block;
  }
}

</style>
