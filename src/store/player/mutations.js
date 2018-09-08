import * as Types from './mutation-types'
export default {
  [Types.GET_DURATION] (state, duration) {
    state.duration = duration
  },
  [Types.GET_CURRENT_TIME] (state, time) {
    state.currentTime = time
  },
  [Types.PLAY_PAUSE] (state) {
    state.paused = !state.paused
  },
  [Types.CHANGE_VOLUME] (state, volume) {
    state.volume = volume
  },
  [Types.CHANGE_PROGRESS] (state, progress) {
    state.changeTime = progress * state.duration
  }
}
