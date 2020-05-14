import {router} from '../../main.js'
const state =  {
    Currentpage: null,
    Mode: null
  }
  const mutations = {
     changePage( state,page) {
        state.Currentpage= page;
        router.push(page);
     },
     changeMode(state, mode){
        state.Mode=mode;
    }
  }
  const actions= {
    changePage(context, page) {
      context.commit('changePage', page);
    },
    changeMode({commit,dispatch},mode){
      commit('changeMode', mode);
      dispatch('video/changeMode',mode,{root:true});
    }
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }