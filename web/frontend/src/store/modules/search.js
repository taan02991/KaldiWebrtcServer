import INSTRUCTIONS from '../../assets/instructions'

const state =  {
    transcribeMessage : "Default Message",
    trabscribeState : "close",
    opacity : 0.8,
    overlay : false,
    instructions: INSTRUCTIONS,
    currentInstruction: '',
}
import {Howl, Howler} from 'howler';
// var siriSound = new Audio('../../public/siri_soundeffect.mp3')
const mutations = {
    changeTranscribeState(state, status){
      if(status == "start") {
        state.trabscribeState = "Waiting me prep"
        let s = new Howl({
            src: ['./siri_soundeffect.mp3'],
            html5: true,
            autoplay: true,
            volume: 0.5,
            rate: 1.6,
            onload: function() { console.log('song loaded!')},
            onloaderror: function(id, error) { console.log('loadError: ' + id +' - ' + error)},
            onplay: () => { console.log('song playing (hopefully)')}
        });
      } else if(status == "listen"){
        state.trabscribeState = "Listening ..."
        state.overlay = true
      } else if(status == "close") {
        state.overlay = false
        state.transcribeMessage = '';
      }
      state.trabscribeState = status
    },
    changeMessage(state, message) {
      state.transcribeMessage = message;
    },
    findInstruction(state) {
      let maxLength = -1;
      let maxString = '';
      for(let i = 0; i < state.instructions.length; i++){
        if(state.transcribeMessage.includes(state.instructions[i])){
          if(state.instructions[i].length > maxLength){
            maxLength = state.instructions[i].length;
            maxString = state.instructions[i];
          }
        }
      }
      state.currentInstruction = maxString;
      console.log('currentInstruction: ' + maxString);
    }
}
const actions= {
  start({ commit }) {
    // clearTimeout(number)
    commit('changeTranscribeState', "start");
    // number = setTimeout(() => commit('reset'), 2500);
  },
  listen ({ commit }) {
    // commit('changeMessage', "listening Govajee command .....")
    commit('changeTranscribeState', "listen");
  },
  wait ({commit}) {
    commit('changeTranscribeState', "wait");
  },
  close ({ commit, dispatch, state }) {
    commit('findInstruction')
    commit('changeTranscribeState', "close");
    this.dispatch('search/executeInstruction');
  },
  changeMessage({ commit }, msg) {
    msg = msg.trim();
    if(msg && msg != '<s>'){
      commit('changeMessage', msg);
    }
  },
  executeInstruction({ commit, dispatch, state }) {
    switch(state.currentInstruction) {
      case 'ปรับ คุณภาพ วิดีโอ ระดับ ต่ำ':
        dispatch('video/setResolution', 360, {root:true});
        break;
      case  'ปรับ คุณภาพ วิดีโอ ระดับ กลาง':
        dispatch('video/setResolution', 720, {root:true});
        break;
      case 'ปรับ คุณภาพ วิดีโอ ระดับ สูง':
        dispatch('video/setResolution', 1080, {root:true});
        break;
      case 'ล็อกอิน นาม บี':
        dispatch('auth/login', "บี", {root:true});
        break
      case 'ล็อกอิน นาม ตาล':
        dispatch('auth/login', "ตาล", {root:true});
        break
      case 'ล็อกอิน นาม แตงไทย':
        dispatch('auth/login', "แตงไทย", {root:true});
        break
      case 'ล็อกอิน นาม ฟร้องซ์':
        dispatch('auth/login', "ฟร้องซ์", {root:true});
        break
      case 'ล็อกเอาท์':
        dispatch('auth/logout',null, {root:true});
        break
      case 'ตั้ง เป็น รายการ โปรด':
        dispatch('auth/addFavorite', null, {root:true});
        break
      case 'เอา ออก จาก รายการ โปรด':
        dispatch('auth/removeFavorite',null, {root:true});
        break
        // TO-FIX BUG
      case 'ปิด โปรแกรม' :
        window.close()
        break
      case 'เลือก วิดีโอ หมายเลข หนึ่ง' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',"1",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วิดีโอ หมายเลข สอง' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',"2",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วิดีโอ หมายเลข สาม' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',"3",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วิดีโอ หมายเลข สี่' :
        dispatch('page/changePage', "/",{root:true});  
        dispatch('video/changeMovie',"4",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วิดีโอ หมายเลข ห้า' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',"5",{root:true});
        window.scrollTo(0, 0);
        break
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}