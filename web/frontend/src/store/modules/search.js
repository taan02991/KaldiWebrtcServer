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
var siriSound = new Audio('../../public/siri_soundeffect.mp3')
const mutations = {
    changeTranscribeState(state, status){
      if(status == "start") {
        state.trabscribeState = "Waiting me prep"
        new Howl({
            src: ['./siri_soundeffect.mp3'],
            html5: true,
            autoplay: true,
            volume: 0.5,
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
  executeInstruction({ commit, dispatch, state, rootState }) {
    switch(state.currentInstruction) {
      //Video Controller
      case 'ปรับ คุณภาพ วิดีโอ ระดับ ต่ำ':
        dispatch('video/setResolution', 360, {root:true});
        break;
      case  'ปรับ คุณภาพ วิดีโอ ระดับ กลาง':
        dispatch('video/setResolution', 720, {root:true});
        break;
      case 'ปรับ คุณภาพ วิดีโอ ระดับ สูง':
        dispatch('video/setResolution', 1080, {root:true});
        break;
      case 'พอส วีดีโอ':
        dispatch('video/pause', null, {root:true});
        break;
      case 'เล่น วีดีโอ':
        dispatch('video/play', null, {root:true});
        break;
      case 'หยุด วีดีโอ':
        dispatch('video/pause', null, {root:true});
        break;
      case 'ขยาย หน้าจอ':
        dispatch('video/openFullScreen', null, {root:true});
        break;
      case 'ย่อ หน้าจอ':
        dispatch('video/closeFullScreen', null, {root:true});
        break;
      case 'เปิด ลูป':
        dispatch('video/setLoop', true, {root:true});
        break;
      case 'ปิด ลูป':
        dispatch('video/setLoop', false, {root:true});
        break;
      // case 'เล่น ตอน ต่อไป':
      //   dispatch('video/openFullScreen', null, {root:true});
      //   break;
      // case 'เล่น ตอน ที่แล้ว':
      //   dispatch('video/closeFullScreen', null, {root:true});
      //   break;
      case 'เซ็ต ความเร็ว วีดีโอ หนึ่ง จุด สอง ห้า เท่า':
        dispatch('video/setSpeed', 1.25, {root:true});
        break;
      case 'เซ็ต ความเร็ว วีดีโอ หนึ่ง จุด ห้า เท่า':
        dispatch('video/setSpeed', 1.5, {root:true});
        break;
      case 'เซ็ต ความเร็ว วีดีโอ สอง เท่า':
        dispatch('video/setSpeed', 2, {root:true});
        break;
      case 'เซ็ต ความเร็ว วีดีโอ ศูนย์ จุด เจ็ด ห้า เท่า':
        dispatch('video/setSpeed', 0.75, {root:true});
        break;
      case 'เซ็ต ความเร็ว วีดีโอ ศูนย์ จุด ห้า เท่า':
        dispatch('video/setSpeed', 0.5, {root:true});
        break;
      case 'เพิ่ม ความเร็ว วีดีโอ สอง เท่า':
        dispatch('video/setSpeed', rootState.video.currentSpeed * 2, {root:true});
        break;
      case 'เพิ่ม ความเร็ว วีดีโอ ศูนย์ จุด หนึ่ง':
        dispatch('video/setSpeed', rootState.video.currentSpeed + 0.1, {root:true});
        break;
      case 'เพิ่ม ความเร็ว วีดีโอ ศูนย์ จุด สอง ห้า':
        dispatch('video/setSpeed', rootState.video.currentSpeed + 0.25, {root:true});
        break;
      case 'เพิ่ม ความเร็ว วีดีโอ ศูนย์ จุด ห้า':
        dispatch('video/setSpeed', rootState.video.currentSpeed + 0.5, {root:true});
        break;
      case 'เพิ่ม ความเร็ว วีดีโอ หนึ่ง':
        dispatch('video/setSpeed', rootState.video.currentSpeed + 1, {root:true});
        break;
      case 'ลด ความเร็ว วีดีโอ สอง เท่า':
        dispatch('video/setSpeed', rootState.video.currentSpeed / 2, {root:true});
        break;
      case 'ลด ความเร็ว วีดีโอ ศูนย์ จุด หนึ่ง':
        dispatch('video/setSpeed', rootState.video.currentSpeed - 0.1, {root:true});
        break;
      case 'ลด ความเร็ว วีดีโอ ศูนย์ จุด สอง ห้า':
        dispatch('video/setSpeed', rootState.video.currentSpeed - 0.25, {root:true});
        break;
      case 'ลด ความเร็ว วีดีโอ ศูนย์ จุด ห้า':
        dispatch('video/setSpeed', rootState.video.currentSpeed - 0.5, {root:true});
        break;
      case 'ลด ความเร็ว วีดีโอ หนึ่ง':
        dispatch('video/setSpeed', rootState.video.currentSpeed - 1, {root:true});
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
      case 'ปิด โปรแกรม' :
        if(confirm('Are you going to close it?')) {
          window.close()
        }
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