
const state =  {
    transcriptionOutput : [],
    countTranscribe : 0
}
const mutations = {
    increaseCount(state) {
        state.countTranscribe += 1
    },
    resetCount(state) {
        state.countTranscribe = 0
    }
}
const actions= {
  start({ commit }) {
    // clearTimeout(number)
    commit('changeTranscribeState', "start");
    // number = setTimeout(() => commit('reset'), 2500);
  },
  count({commit}) {
      commit('increaseCount')
  },
  resetCount({commit}) {
    commit('resetCount')
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}