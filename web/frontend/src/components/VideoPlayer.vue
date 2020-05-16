<template>
    <div class="player-container">
        <video id='player' width="100%" height="100%" v-bind:poster="currentMovie.cover3" controls>
            <source v-bind:src="currentSource.src" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>

export default {
  name: 'VideoPlayer',
  mounted: function() {
      this.$store.dispatch('video/setPlayer', document.getElementById("player"))
  },
  methods: {
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
      }
  }
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
