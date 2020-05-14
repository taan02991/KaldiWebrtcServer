<template>
  <!-- <v-parallax> -->
  <!-- <div :style="{'background-image':'url(https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg)'}"> -->
  <div class = "bg">
    <div class="row">
        <div class="container">
            <div class="text">
             <h2>SearchPage</h2>
            </div>
        </div>
    </div>
    <div class="row">
        <!-- <div class="container"> -->
          <div class="column">
            <v-timeline align-top dense class="align-fav">
              <v-timeline-item
                v-for="n in videoNums" :key="n" color="red" :icon="n" fill-dot right>
                <v-card 
                  :elevation="20"
                  class="mx-auto card-favourite">
                  <VideoItem :key="movieList[n-1].id" :item="movieList[n-1]"> </VideoItem>
                </v-card>
              </v-timeline-item> 
            </v-timeline>
          </div>
          <div class="column" style="position: sticky">
            <div class= "text">
              <h1>choose</h1>
              <h1>what</h1>
              <h1>you</h1>
              <h1>like</h1>
            </div>
          </div>
        <!-- </div> -->
      
    </div>
   <!-- </div> -->
   <!-- </v-parallax> -->
   </div>
</template>
<script>
import VideoItem from '../components/VideoItem'
export default {
  name : 'searchPage',
  components : {
      VideoItem
  },
  computed: {
    movieList() {
        return this.$store.state.video.movieList;
    },
    videoNums(){
        return this.$store.state.video.videoNums;
    },
    bg(){
        return '../assets/bg3.jpg';
    }
  }
}
</script>
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
  .align-fav{
    width: 90%;
    left: 10%
  }
  .column{
    width: 50%;
  }
  .text h1{
    transform: translate(0%,0%);
    text-align: center;
    color: rgb(215, 228, 240);
    font-size: 150px;
    text-shadow: 5px 5px 2px rgb(4, 63, 117);
    font-family:"Avenir Next Condensed";
    font-weight: normal;
  }
  .text h2{
    text-align: center;
    color: rgb(3, 16, 29);
    font-size: 120px;
    text-shadow: 5px 5px 5px rgb(4, 63, 117);
    font-family:"Times New Roman";
  }
  .text{
    position: sticky;
    top:5%;
  }
  .bg{
    background-image: url("../assets/bgblue.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .v-parallax{
    background-image: url("../assets/bgblue.png");
  }
</style>
