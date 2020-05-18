<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Numja</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"  @click ='setMode'>
        <router-link class="nav-link" to="/" >Home</router-link>
      </li>
      <li class="nav-item" v-if="isLogin"  @click ='setMode'>
        <router-link class="nav-link" to="/Favourite">Favourite</router-link>
      </li>
      <li class="nav-item" @click ='setMode'>
        <router-link class="nav-link" to="/searchPage" >SearchPage</router-link>
      </li>
      <ModePage></ModePage>
    </ul>
    
    <v-chip
      class="ma-2 fix-size"
      color="#31C2F2"
      text-color="white"
    >
    <strong v-html="name" class="spacing font-weight-bolder" right ></strong> 
    </v-chip>
    <v-avatar left>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
  </div>
</nav>
</template>

<script>
import ModePage from './ModeDisplay.vue'

export default {
  name: 'NavBar',
  components: {
    ModePage,
  },
  computed : {
    isLogin() {
      return this.$store.state.auth.isLogin;
    },
    name(){
      return this.$store.state.auth.who;
    }
  },
  data : function() {
return {
    // searching : false
  };
},
  methods : {
    searchPage(){
      this.$store.dispatch('page/changeMode', null,{root:true});
      this.$store.dispatch('page/changePage',"/searchPage");
    },
    setMode(){
      this.$store.dispatch('page/changeMode', null,{root:true});
    },
    process() {
      (this.isLogin) ? this.logout() : this.login()
      // this.searching = true
      // setTimeout(() => {
      //      this.searching = false
      //   }, 2000);
      // //console.log(this.s)
    },
    async login() {
      // this.$store.dispatch('auth/login', "ADMIN")
      this.$store.dispatch('auth/login', "บี")
    },
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .spacing {
   margin-left: 10px;
   margin-right: 10px;
 }
 .fix-size {
   width: auto;
 }
 .logo {
   width : 20 px;
 }
</style>
