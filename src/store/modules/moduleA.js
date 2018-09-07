import moduleB from './moduleB'
export default {
  namespaced: true,
  state: {
    count: 1,
    msg: 'hi'
  },
  getters: {
    aCount (state) {
      return state.count * 2
    }
  },
  modules: {
    moduleB: moduleB
  },
  actions: {
    aAction2 ({ commit }) {
      console.log('test')
    }
  }
}
