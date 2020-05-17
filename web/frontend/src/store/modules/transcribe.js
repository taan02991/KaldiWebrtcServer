
const state =  {
    transcriptionOutput : [],
    countTranscribe : 0,
    wakeWordMode: "OFF",
    wakeWordTranscribe: '',
}
const mutations = {
    increaseCount(state) {
        state.countTranscribe += 1
    },
    resetCount(state) {
        state.countTranscribe = 0
    },
    setWakeWordMode(state, bl) {
        console.log("Set wake word mode: " + bl);
        state.wakeWordMode = bl;
    },
    changeMessage(state, msg) {
        state.wakeWordTranscribe = msg;
    },
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
  },
  setWakeWordMode({commit}, bl) {
    commit('setWakeWordMode', bl)
  },
  changeMessage({commit}, msg) {
    commit('changeMessage', msg);
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}