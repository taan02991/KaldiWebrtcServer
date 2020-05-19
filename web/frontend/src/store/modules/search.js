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
const variousVideo = ['วิดีโอ','วีดีโอ','วีดิโอ']
const mutations = {
    changeTranscribeState(state, status){
      if(status == "start") {
        state.trabscribeState = "Waiting me prep"
        let s = new Howl({
            src: ['./siri_soundeffect.mp3'],
            html5: true,
            autoplay: true,
            volume: 0.5,
            rate: 1.6
            // onload: function() { //console.log('song loaded!')},
            // onloaderror: function(id, error) { //console.log('loadError: ' + id +' - ' + error)},
            // onplay: () => { //console.log('song playing (hopefully)')}
        });
      } else if(status == "listen"){
        state.trabscribeState = "Listening ..."
        state.overlay = true
      } else if(status == "close") {
        setTimeout( () => {
          state.overlay = false
          state.transcribeMessage = '';
          state.currentInstruction = '';
        }, 1000);
      }
      state.trabscribeState = status
    },
    changeMessage(state, message) {
      state.transcribeMessage = message;
    },
    findInstruction(state) {
      let maxLength = state.currentInstruction.length;
      for(let i = 0; i < state.instructions.length; i++){
        if(state.transcribeMessage.includes(state.instructions[i])){
          if(state.instructions[i].length > maxLength){
            maxLength = state.instructions[i].length;
            state.currentInstruction = state.instructions[i];
          }
        }
      }
      state.currentInstruction = state.currentInstruction.replace(variousVideo[0],variousVideo[1])
      state.currentInstruction = state.currentInstruction.replace(variousVideo[2],variousVideo[1])
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
    commit('findInstruction');
    commit('changeTranscribeState', "close");
    this.dispatch('search/executeInstruction');
  },
  changeMessage({ commit }, msg) {
    msg = msg.trim();
    if(msg && msg != '<s>'){
      commit('changeMessage', msg);
      commit('findInstruction');
    }
  },
  executeInstruction({ commit, dispatch, state, rootState }) {
    switch(state.currentInstruction) {
      //Video Controller
      case 'พอส วีดีโอ':
        dispatch('video/pause', null, {root:true});
        break;
      case 'เล่น ต่อ จาก วีดีโอ เดิม':
      case 'เล่น วีดีโอ ที่ แสดง':
      case 'เล่น วีดีโอ':
        dispatch('video/play', null, {root:true});
        break;
      case 'หยุด วีดีโอ ที่ แสดง':  
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
      case 'เล่น ตอน ต่อไป':
        dispatch('video/changeMovie', String(parseInt(rootState.video.currentMovie.id, 10) + 1), {root:true});
        break;
      case 'เล่น ตอน ที่แล้ว':
        dispatch('video/changeMovie', String(parseInt(rootState.video.currentMovie.id, 10) - 1), {root:true});
        break;
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
      case 'ย้อน วีดีโอ ไป หนึ่ง วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime - 1, {root:true});
        break;
      case 'ย้อน วีดีโอ ไป ห้า วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime - 5, {root:true});
        break;
      case 'ย้อน วีดีโอ ไป สิบ วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime - 10, {root:true});
        break;
      case 'ย้อน วีดีโอ ไป สิบ ห้า วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime - 15, {root:true});
        break;
      case 'ย้อน วีดีโอ ไป สาม สิบ วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime - 30, {root:true});
        break;
      case 'ย้อน วีดีโอ ไป หนึ่ง นาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime - 60, {root:true});
        break;
      case 'เลื่อน วีดีโอ ไป ห้า วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime + 5, {root:true});
        break;
      case 'เลื่อน วีดีโอ ไป สิบ วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime + 10, {root:true});
        break;
      case 'เลื่อน วีดีโอ ไป สิบ ห้า วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime + 15, {root:true});
        break;
      case 'เลื่อน วีดีโอ ไป สาม สิบ วินาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime + 30, {root:true});
        break;
      case 'เลื่อน วีดีโอ ไป หนึ่ง นาที':
        dispatch('video/setCurrentTime', rootState.video.player.currentTime + 60, {root:true});
        break;
      case 'เล่น วีดีโอ ที่ เวลา ศูนย์ นาที':
        dispatch('video/setCurrentTime', 0, {root:true});
        break;
      case 'เล่น วีดีโอ ที่ กลาง ตอน':
        dispatch('video/setCurrentTime', rootState.video.player.duration / 2, {root:true});
        break;
      case 'เล่น วีดีโอ ที่ หนึ่ง ใน สี่ ของ ตอน':
        dispatch('video/setCurrentTime', rootState.video.player.duration / 4, {root:true});
        break;
      case 'เล่น วีดีโอ ที่ สาม ใน สี่ ของ ตอน':
        dispatch('video/setCurrentTime', rootState.video.player.duration / 4 * 3, {root:true});
        break;
      case 'ปิด เสียง':
        dispatch('video/setMute', true, {root:true});
        break;
      case 'ตั้งค่า เสียง ศูนย์ เปอร์เซนต์':
        dispatch('video/setVolume', 0, {root:true});
        break;
      case 'ตั้งค่า เสียง ยี่ สิบ ห้า เปอร์เซนต์':
        dispatch('video/setVolume', 0.25, {root:true});
        break;
      case 'ตั้งค่า เสียง ห้า สิบ เปอร์เซนต์':
        dispatch('video/setVolume', 0.5, {root:true});
        break;
      case 'ตั้งค่า เสียง เจ็ด สิบ ห้า เปอร์เซนต์':
        dispatch('video/setVolume', 0.75, {root:true});
        break;
      case 'ตั้งค่า เสียง ร้อย เปอร์เซนต์':
        dispatch('video/setVolume', 1, {root:true});
        break;
      case 'เพิ่ม เสียง':
        dispatch('video/setVolume', rootState.video.player.volume + 0.10, {root:true});
        break;
      case 'ลด เสียง':
        dispatch('video/setVolume', rootState.video.player.volume - 0.10, {root:true});
        break;
      case 'ปรับ คุณภาพ วีดีโอ ระดับ ต่ำ':
        dispatch('video/setResolution', 0, {root:true});
        break;
      case  'ปรับ คุณภาพ วีดีโอ ระดับ กลาง':
        dispatch('video/setResolution', 1, {root:true});
        break;
      case 'ปรับ คุณภาพ วีดีโอ ระดับ สูง':
        dispatch('video/setResolution', 2, {root:true});
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
      case 'เข้า หน้า รายการ โปรด':
      case 'เปิด หน้า รายการ โปรด':
      case 'แสดง หน้า รายการ โปรด':
        dispatch('page/changePage',"/Favourite",{root : true})
        break
      case 'ตั้ง เป็น รายการ โปรด':
      case 'ตั้งค่า เป็น รายการ โปรด':
      case 'ตั้ง วิดีโอ เป็น รายการ โปรด':
      case 'ตั้งค่า วิดีโอ เป็น รายการ โปรด':
        dispatch('auth/addFavorite', null, {root:true});
        break
      case 'เอา ออก จาก รายการ โปรด':
        dispatch('auth/removeFavorite',null, {root:true});
        break
        // TO-FIX BUG
      // case 'เปิด โปรแกรม' :
      //     window.open()
      //     break
      // case 'ปิด โปรแกรม' :
      //   window.close()
      //   break
      case 'เลือก วีดีโอ หมายเลข หนึ่ง' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',rootState.video.movieList[0].id,{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วีดีโอ หมายเลข สอง' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',rootState.video.movieList[1].id,{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วีดีโอ หมายเลข สาม' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',rootState.video.movieList[2].id,{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วีดีโอ หมายเลข สี่' :
        dispatch('page/changePage', "/",{root:true});  
        dispatch('video/changeMovie',rootState.video.movieList[3].id,{root:true});
        window.scrollTo(0, 0);
        break
      case 'เลือก วีดีโอ หมายเลข ห้า' :
        dispatch('page/changePage', "/",{root:true});
        dispatch('video/changeMovie',"5",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เปิด โหมด หมายเลข หนึ่ง' :
        dispatch('page/changeMode', "1",{root:true});
        dispatch('page/changePage', "/searchPage",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เปิด โหมด หมายเลข สอง' :
        dispatch('page/changeMode', "2",{root:true});
        dispatch('page/changePage', "/searchPage",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เปิด โหมด หมายเลข สาม' :
        dispatch('page/changeMode', "3",{root:true});
        dispatch('page/changePage', "/searchPage",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เปิด โหมด หมายเลข สี่' :
        dispatch('page/changeMode', "4",{root:true});
        dispatch('page/changePage', "/searchPage",{root:true});
        window.scrollTo(0, 0);
        break
      // case 'เปิด โหมด หมายเลข ห้า' :
      //   dispatch('page/changeMode', "5",{root:true});
      //   dispatch('page/changePage', "/searchPage",{root:true});
      //   window.scrollTo(0, 0);
      //   break
      case 'เปิด โหมด ค้นหา' :
      case 'แสดง โหมด ค้นหา' :
        dispatch('page/showMode', null, {root:true});
        break
      case 'เข้า หน้า ค้นหา':
        dispatch('page/changeMode', null,{root:true});
        dispatch('page/changePage',"/searchPage",{root:true});
        window.scrollTo(0, 0);
        break
      case 'เข้า หน้า โฮมเพจ':
        dispatch('page/changeMode', null,{root:true});
        dispatch('page/changePage',"/",{root:true});
        window.scrollTo(0, 0);
        break
    }
    console.log('currentInstruction: ' + state.currentInstruction);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}