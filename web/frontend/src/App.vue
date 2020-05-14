<template>
  <v-app>
    <v-hover>
      <v-card
        class="mx-auto"
        width="100%"
      >
       <!-- <v-fade-transition> -->
          <v-overlay
            light
            v-show="overlay"
            :absolute="absolute"
            :opacity="opacity"
            color="#036358"
          >
          <div class="overlay-content">
            <v-col>
              <v-row>
                <p class="display-4 font-weight-bold">{{transcribeMessage}}</p>
              </v-row>
              <v-row>
                <Siriwave></Siriwave>
              </v-row>
            </v-col>
          </div>
        </v-overlay>
      <NavBar/>
      <router-view>
      </router-view>
      <Recognitor></Recognitor>
      </v-card>
    </v-hover>
    <SnackAlert />
    <!-- <vue-audio :file="siri_sound" /> -->
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Recognitor from './components/Recognitor.vue'
import Siriwave from './components/Siriwave'
import SnackAlert from './components/SnackBar'
// import VueAudio from 'vue-audio';

export default {
  name: 'App',
  components: {
    NavBar,
    Recognitor,
    Siriwave,
    SnackAlert,
    // 'vue-audio': VueAudio
  },
  data() {
    return {
      siri_sound : './siri_soundeffect.mp3'
    }
  },
  computed:{
    transcribeMessage() {
        return this.$store.state.search.transcribeMessage;
    },
    absolute() {
      return true
    },
    opacity() {
      return this.$store.state.search.opacity;
    },
    overlay() {
      return this.$store.state.search.overlay;
    }
  }
}
</script>

<style>
/* .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
} */
.overlay-content {
  top : -200px;
  position: relative;
}
.overlay-text {
  background-color: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>