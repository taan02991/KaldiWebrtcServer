import {router} from '../../main.js'
const state =  {
    Currentpage: null,
    Mode: null,
    dialog: false,
  }
  const mutations = {
     changePage( state,page) {
        state.Currentpage= page;
        router.push(page);
     },
     changeMode(state, mode){
        state.Mode=mode;
        state.dialog = false;
    },
    showMode(state){
        state.dialog = true;
    },
    updateDialog(state, value){
        state.dialog = value;
    }
  }
  const actions= {
    changePage(context, page) {
      context.commit('changePage', page);
    },
    changeMode({commit,dispatch},mode){
      commit('changeMode', mode);
      dispatch('video/changeMode',mode,{root:true});
    },
    showMode({commit}){
      commit('showMode');
    },
    updateDialog({commit}, value){
      commit('updateDialog', value);
    }
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }