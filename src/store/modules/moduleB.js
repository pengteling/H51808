export default {
  namespaced: true,
  state: {
    msg: 123456,
    count: 23
  },
  getters: {
    bCount (state, getters, rootState, rootGetters) {
      return state.count + rootState.count
    }
  },
  mutations: {
    changeCount (state, payload) {
      state.count = payload
    }
  },
  mapActions: {
    action1 ({ commit, dispatch, state, getters, rootState, rootGetters }, payload) {
      // commit('changeCount', 3)
      commit('addCountStep', { step: 3 }, { root: true })
      dispatch('loadData', null, { root: true }) // -> 'someOtherAction'
      dispatch('moduleA/aAction2', null, { root: true }) // -> 'someOtherAction'
    }
  }
}
