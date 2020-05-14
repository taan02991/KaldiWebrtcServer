import {router} from '../../main.js'
const state =  {
    Currentpage: null

  }
  const mutations = {
     changePage( state,page) {
        state.Currentpage= page;
        router.push(page);
     }
  }
  const actions= {
    changePage(context, page) {
      context.commit('changePage', page);
    }
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }