import Vuex from 'vuex'
import Vue from 'vue'
// import * as Types from './mutations-type'
import player from './player'
import list from './list'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    player,
    list
  }
})

export default store
