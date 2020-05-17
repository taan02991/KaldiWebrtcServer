<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <a class="nav-link" href="#" v-on = "on">Mode</a>
      </template>
      <v-card max-width="500" class="mx-auto">
        <v-system-bar color="#1A5276  " dark></v-system-bar>

        <v-app-bar dark color='#154360'>
          <v-toolbar-title class="text-center">Mode Selector</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-container>
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card color= "#D6EAF8 " @click="setMode(i)">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="item.title"></v-card-title>

                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    <v-card-actions>
                        <v-btn text>Watch Now</v-btn>
                    </v-card-actions>
                  </div>

                   <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ModePage",
  methods:{
    setMode(mode) {
      this.$store.dispatch('page/changeMode', mode+1,{root:true});
      this.$store.dispatch('page/changePage', "/searchPage",{root:true});
    }
  } ,
  data() {
    return{
      items: [
        {
          color: '#154360',
          src: require('../assets/relax.jpg'),
          title: 'MODE 1: RELAX',
          artist: '“It is nice finding that place where you can just go and relax.” –Moises Arias',
        },
        {
          color: '#1F618D ',
          src: require('../assets/knowledge.jpg'),
          title: 'MODE 2: KNOWLEDGE',
          artist: '“To attain knowledge, add things everyday. To attain wisdom, remove things every day.” ― Lao Tse',
        },
        {
          color: '#7D3C98',
          src: require('../assets/lifestyle.jpg'),
          title: 'MODE 3: LIFE STYLE',
          artist: '“You only live once, but if you do it right, once is enough.” — Mae West',
        },
        {
          color: '#5B2C6F',
          src: require('../assets/gamecasting.jpg'),
          title: 'MODE 4: GAME CASTING',
          artist: '“Endure and survive.” – The Last of Us',
        },
      ],
    }
  },
  computed: {
    dialog: {
      get () {
      return this.$store.state.page.dialog
      },
      set (value) {
        this.$store.commit('page/updateDialog', value)
      }
    },
  }
  
};
</script>