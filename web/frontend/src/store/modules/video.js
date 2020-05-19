import DATA from '../../assets/data'

const state = {
    videoNums: DATA.length,
    player: null,
    currentMovie: DATA[2],
    movieList: DATA,
    currentSource: DATA[2].source[0],
    currentSpeed: 1,
    isLoop: false,
}
  
const getters = {
}
  
const mutations =  {
    //VideoPlayer
    setPlayer(state, player) {
      state.player = player;
    },
    changeMovie(state, id){
      let matchMovie = state.movieList.filter((movie) => movie.id === String(id))[0];
      if(matchMovie){
        //console.log('Change movie');
        state.currentMovie = matchMovie;
        if(Array.isArray(state.currentMovie.source)){
          state.currentSource = state.currentMovie.source[0];
          state.player.src = state.currentSource.src;
        }
        else{
          state.currentSource = state.currentMovie.source;
          state.player.src = state.currentSource;
        }
        setTimeout( () => {
          state.player.play();
        }, 1000 );
      }
      else{
        //console.log('Invalid movie id');
      }
    },
    setSpeed(state, n){
      if(n > 0){
        state.currentSpeed = n;
        state.player.playbackRate = n;
      }
      //console.log('Speed ' + n + 'x')
    },
    setResolution(state, n){
      let targetSource;
      if(state.currentMovie.source.length >= n){
        targetSource = state.currentMovie.source[n];
      }
      if(targetSource){
        state.currentSource = targetSource;
        let time = state.player.currentTime;
        state.player.src = state.currentSource.src;
        state.player.currentTime = time;
        setTimeout( () => {
          state.player.play();
        }, 1000 );
        //console.log(n + 'p');
      }
      else{
        //console.log('Resolution is not available');
      }
    },
    setLoop(state, bl) {
      state.isLoop = bl;
      state.player.loop = bl;
      //console.log('Set loop ' + bl);
    },
    setMute(state, bl) {
      state.player.muted = bl;
      //console.log('Set mute' + bl);
    },
    play(state) {
      state.player.play();
      //console.log('play');
    },
    pause(state) {
      state.player.pause();
      //console.log('pause');
    },
    setCurrentTime(state, time) {
      if(time < 0 || time > state.player.duration){
        //console.log('Invalid time');
      }
      else{
        state.player.currentTime = time;
        state.player.play();
        //console.log("Set current time = ", time);
      }
    },
    openFullScreen(state) {
      //console.log('open full screen');
      if (state.player.requestFullscreen) {
        state.player.requestFullscreen();
      } else if (state.player.mozRequestFullScreen) { /* Firefox */
        state.player.mozRequestFullScreen();
      } else if (state.player.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        state.player.webkitRequestFullscreen();
      } else if (state.player.msRequestFullscreen) { /* IE/Edge */
        state.player.msRequestFullscreen();
      }
    },
    closeFullScreen(state) {
      //console.log('close full screen');
      if (state.player.exitFullscreen) {
        state.player.exitFullscreen();
      } else if (state.player.mozCancelFullScreen) { /* Firefox */
        state.player.mozCancelFullScreen();
      } else if (state.player.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        state.player.webkitExitFullscreen();
      } else if (state.player.msExitFullscreen) { /* IE/Edge */
        state.player.msExitFullscreen();
      }
    },
    setVolume(state, n){
      if(n < 0 || n > 1){
        //console.log('Invalid volume');
      }
      else{
        //console.log('Set volumer ' + n);
        state.player.muted = false;
        state.player.volume = n;
      }
    },
    changeMode(state, mode){
      if(mode ==null){
        state.movieList = DATA;
        state.videoNums = DATA.length;
      }
      else{
        state.movieList = DATA.filter((data)=>{
           return String(mode) === data.mode})
        state.videoNums = state.movieList.length;
        //console.log(state.movieList);
      }
    }

}
  
const actions = {

    //VideoPlayer
    setPlayer(context, player) {
      context.commit('setPlayer', player);
    },
    changeMovie(context, id) {
      context.commit('changeMovie', id);
    },
    setSpeed(context, n) {
      if(n > 0){
        context.dispatch('notification/push',{
          message : `ตั้งความเร็ววีดีโอ ${n} เท่า สำเร็จ`,
          color : 'success'
        }, {root:true})
        context.commit('setSpeed', n);
      }
      else{
        context.dispatch('notification/push',{
          message : `ความเร็ววีดีโอไม่ถูกต้อง`,
          color : 'red'
        }, {root:true})
      }
    },
    setResolution(context, n) {
      context.commit('setResolution', n);
    },
    setLoop(context, bl) {
      context.commit('setLoop', bl);
    },
    setMute(context, bl) {
      context.commit('setMute', bl);
    },
    play(context){
      context.commit('play');
    },
    pause(context){
      context.commit('pause');
    },
    setCurrentTime(context, time){
      if(time < 0 || time > state.player.duration){
        context.dispatch('notification/push',{
          message : `เวลาของวีดีโอไม่ถูกต้อง`,
          color : 'red'
        }, {root:true})
        //console.log('Invalid time');
      }
      else{
        context.dispatch('notification/push',{
          message : `ตั้งเวลาวีดีโอที่ ${time} วินาที สำเร็จ`,
          color : 'success'
        }, {root:true})
        context.commit('setCurrentTime', time);
        //console.log("Set current time = ", time);
      }
    },
    openFullScreen(context) {
      context.commit('openFullScreen');
    },
    closeFullScreen(context) {
      context.commit('closeFullScreen');
    },
    setVolume(context, n) {
      context.dispatch('notification/push',{
        message : `ตั้งค่าเสียง ${n * 100} % สำเร็จ`,
        color : 'success'
      }, {root:true})
      context.commit('setVolume', n);
    },
    changeMode(context, mode){
      context.commit('changeMode', mode);
    }
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}