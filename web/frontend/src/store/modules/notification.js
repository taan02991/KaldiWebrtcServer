const state =  {
  isOpen: false,
  color: "",
  message: ""
}
const mutations = {
   push( state,payload) {
    state.isOpen = true;
    state.message = payload.message;
    state.color = payload.color;
   },
  reset(state) {
    state.isOpen = false;
    state.message = "";
    state.color = "";
  }
}
let number;
const actions= {
  push({ commit }, payload) {
    clearTimeout(number)
    commit('push', payload);
    number = setTimeout(() => commit('reset'), 2500);
  },
  reset ({ commit }) {
    commit('reset');
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}