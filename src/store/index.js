import Vuex from 'vuex'
import Vue from 'vue'
import * as Types from './mutations-type'
import axios from 'axios'
import moduleA from './modules/moduleA'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    msg: 123,
    arr: [1, 2, 3],
    users: [
      { id: 1, name: 'zs' },
      { id: 2, name: 'ww' },
      { id: 3, name: 'ls' }
    ],
    count: 0,
    obj: {
      id: 1,
      name: 'zs',
      sex: 'male'
    },
    musicList: []
  },
  getters: {
    secUser (state) {
      return state.users[1]
    },
    secUserName (state, getters) {
      return getters.secUser.name
    },
    userWho: (state) => (id) => {
      return state.users.filter(user => user.id === id)
    }
    // userWho2 (state) {
    //   return (id) => {
    //     return state.users.filter(user => user.id === id)
    //   }
    // }
  },
  mutations: {
    // 事件类型
    addCount (state) {
      state.count++
    },
    addCountStep (state, payload) {
      state.count += payload.step
    },
    // addCountStep2 (state, step) {
    //   state.count += step
    // }
    changeObj (state, payload) {
      // state.obj.age = 27
      // state.obj = Object.assign({}, state.obj, { age: 27 })
      state.obj = { ...state.obj, age: 27 }
    },
    [Types.ADD_COUNT_TYPE] (state) {
      state.count--
    },
    changeMusicList (state, payload) {
      state.musicList = payload
    },
    changeMsg (state, payload) {
      state.msg = payload
    }
  },
  actions: {
    // addCountAction (context) {
    //   context.commit('addCount')
    // }
    addCountAction ({ commit, dispatch, state, getters }, payload) {
      commit('addCountStep', payload)
    },
    loadData ({ commit }) {
      return axios
        .get('http://music.henshui.com/api/musicList.js?!234')
        .then(res => {
          commit('changeMusicList', res.data)
          console.log('loadData axios fetched')
        })
    },
    loadDataB ({ dispatch }) {
      return dispatch('loadData').then(() => {
        console.log('loadDataB dispatch promise')
      })
    },
    async loadDataB2 ({ dispatch }) {
      await dispatch('loadDataB')
      console.log('loadDataB2')
    }
  },
  modules: {
    moduleA: moduleA
  }
})
if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./modules/moduleA'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    // const newMutations = require('./mutations').default
    const newModuleA = require('./modules/moduleA').default
    // 加载新模块
    store.hotUpdate({
      // mutations: newMutations,
      modules: {
        moduleA: newModuleA
      }
    })
  })
}

export default store
