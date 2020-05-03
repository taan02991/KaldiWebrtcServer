<template>
 <v-timeline align-top dense class="align-fav">
    <v-timeline-item
      v-for="movie in favouriteList[who]"
      :key="movie.id"
      color="red"
      icon="mdi-star"
      fill-dot
      right
    >
      <v-card
        :elevation="20"
        class="mx-auto card-favourite"
      >
        <VideoItem :key="movie.id" :item="movie"> </VideoItem>
      </v-card>
    </v-timeline-item>
  </v-timeline> 
</template>
<script>

import VideoItem from '../components/VideoItem'
export default {
  name : 'Favourite',
  components : {
      VideoItem
  },
  computed: {
    who() {
      return this.$store.state.auth.who
    },
     favouriteList() {
       return this.$store.state.auth.favouriteList
     }
  },
  mounted() {
    this.$store.dispatch('auth/fetchFavoriteList');
  }
}
</script>>
<style scoped>
 .card-favourite {
   padding: 15px;
   padding-bottom: 1px;
 }
 .align-fav {
   width: 80%
   /* margin-right: 300px */
 }
</style>>