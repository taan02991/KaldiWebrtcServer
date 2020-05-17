<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-8">
                <div class="player-container">
                    <!--
                    <vue-core-video-player id='player' :cover="currentMovie.cover3" :src="currentMovie.source"></vue-core-video-player>
                    -->
                    <VideoPlayer></VideoPlayer>
                </div>
                <ControlBar></ControlBar>
                <div class="movie-detail">
                    <h1 class="title">{{currentMovie.title}}</h1>
                    <div class="date">{{currentMovie.author}} - {{currentMovie.date}}</div>
                    <div class="desc">{{currentMovie.desc}} </div>
                </div>
            </div>
            <div class="col-4 play-list">
                <h2>Play List</h2>
                <VideoItem v-for="movie in movieList" :key="movie.id" :item="movie"></VideoItem>
            </div>
        </div>
        <!-- <button type='button' @click="test()">Test</button> -->
        <v-overlay
            light
            v-show="overlay"
            color="#036358"
          >
          <div class="overlay-content popupImage d-flex justify-center">
            <div class="logo">
              <v-img 
                :src="require('/usr/src/app/src/assets/LOGO/logo.png')">
              </v-img>
            </div>
          </div>
        </v-overlay>
        <button @click='test'>test</button>
    </div>
    
</template>

<script>
import VideoItem from '../components/VideoItem'
import VideoPlayer from '../components/VideoPlayer'
import ControlBar from '../components/ControlBar'

export default {
  name: 'VideoMain',
  components: {
    VideoItem,
    VideoPlayer,
    ControlBar
  },
  data(){
    return {
      overlay : false
    }
  },
  methods: {
    test: function(){
      this.$store.dispatch('transcribe/setWakeWordMode', true);
    }
  },
  computed: {
    currentMovie() {
        return this.$store.state.video.currentMovie;
    },
    currentSource() {
        return this.$store.state.video.currentSource;
    },
    player() {
        return this.$store.state.video.player;
    },
    movieList() {
        return this.$store.state.video.movieList;
    }
  },
  mounted() {
    setTimeout(() => {
            this.overlay = true
    }, 100);
    setTimeout(() => {
            this.overlay = false
    }, 1300);
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .movie-detail{
    text-align: left;
    padding-top: 20px;
    color: rgba(0,0,0, .65);
  }
  .movie-detail h1{
    font-size: 20px;
    color: #000;
  }
  .movie-detail .date {
    font-size: 14px;
  }
  .movie-detail .desc {
    font-size: 13px;
    padding: 10px 20px 10px 0;
  }
  .movie-detail .btn-wrap {
    padding-right: 20px;
    text-align: right;
  }
  .play-list h2 {
    text-align: left;
    font-size: 18px;
    color: rgba(0,0,0, .85);
    padding-bottom: 10px;
  }
  .popupImage {
    margin-top: 300px;
  }
  .logo {
    width: 60%;
    height: 60%;
  }
</style>
