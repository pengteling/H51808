import moduleB from './moduleB'
export default {
  namespaced: true,
  state: {
    count: 1,
    msg: 'hi'
  },
  getters: {
    aCount (state) {
      return state.count * 3
    }
  },

  actions: {
    aAction2 ({ commit }) {
      console.log('test')
    }
  },
  modules: {
    moduleB: moduleB
  }
}
