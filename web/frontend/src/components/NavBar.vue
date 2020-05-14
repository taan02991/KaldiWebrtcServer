<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/default-recorder">Default Recorder</router-link>
      </li>
      <li class="nav-item" v-if="isLogin">
        <router-link class="nav-link" to="/Favourite">Favourite</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/searchPage">SearchPage</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      
    </form>
    <button class="btn btn-outline-success my-2 my-sm-0 ml-2" type="button" @click ="searchPage">Search</button>
    <button class="btn btn-outline-success my-2 my-sm-0 ml-2 spacing" @click="process"> {{ (isLogin) ? "Logout": "Login"  }}</button>
    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  },
  computed : {
    isLogin() {
            return this.$store.state.auth.isLogin;
    }
  },
  data : function() {
return {
    // searching : false
  };
},
  methods : {
    searchPage(){
      // this.$router.push('/searchPage');
      this.$store.dispatch('page/changePage',"/searchPage");
      
      //this.$router.replace('/searchPage');
    },
    process() {
      (this.isLogin) ? this.logout() : this.login()
      // this.searching = true
      // setTimeout(() => {
      //      this.searching = false
      //   }, 2000);
      // console.log(this.s)
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
</style>
