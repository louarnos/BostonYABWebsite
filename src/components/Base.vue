<template>
    <div class="hide-overflow" style="position:relative">
        <navBar/>
        <landingEl/>
        <whoWeAreEl ref='whoWeAre'/>
        <v-parallax :src="require('@/assets/long_table.jpg')" :height="'455'">
        </v-parallax>
        <truthsAndValuesEl ref='truthsAndValues'/>
        <v-parallax :src="require('@/assets/useful.png')" :height="'510'" >
        </v-parallax>
        <writtenWordEl ref='writtenWord'/>

     <v-footer height="auto" width="100%">
      <v-card
        flat
        tile
        class="indigo lighten-2 white--text text-xs-center"
        width="100%">
        <v-card-text class="white--text">
          <span class="icon-container">
            <v-icon
              @click="openLink('https://www.facebook.com/BostonYAB/')"
              :size="150">
                fa fa-facebook-square
            </v-icon>
            <v-icon
              @click="openLink('https://www.youtube.com/channel/UCMVlYzUB4RP9j_75f2fyW0Q')"
              
              :size="150">
                fa fa-youtube-square
            </v-icon>
            <v-icon
              @click="openLink('mailto:bostonyab@gmail.com')"
              
              :size="150">
                fa fa-envelope-o
            </v-icon>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>

  </div>
</template>
<script>
import NavBar from "./mainPage/Navbar.vue"
import LandingJumbo from "./mainPage/landingJumbotron.vue"
import WhoWeAre from "./mainPage/whoWeAre.vue"
import TruthsAndValues from "./mainPage/truthsAndValues.vue"
import WrittenWord from "./mainPage/writtenWord.vue"
export default {
  name: 'Base',
  components: {
    'navBar': NavBar,
    'landingEl': LandingJumbo,
    'whoWeAreEl': WhoWeAre,
    'truthsAndValuesEl': TruthsAndValues,
    'writtenWordEl': WrittenWord
  },
  methods: {
      handleScroll() {
          for (let key in this.$refs ) {
              if ( this.$refs[key].getRect ) {
                this.$refs[key].getRect();
              }
          }
      },
      openLink(url) {
        let win = window.open(url, '_blank');
        win.focus();
      }
  },
  created () {
     document.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
     document.removeEventListener('scroll', this.handleScroll);
  }

}
</script>
<style>
.main-content {
  font-size: 3em;
  font-weight: 100;
}
.section-header{
  font-size: 3.5em;
  font-weight: 300;
}
.section-container {
  padding-top: 15%;
  padding-bottom: 15%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<style scoped>
.landing-text {
  font-size: 3em;
  font-weight: 100;
  font-family: Monsterrat, sans-serif;
}
.space {
  height: 2000px;
}
.circle {
  clear: both;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.fa:hover {
  color: black;
  cursor: pointer;
}
.icon-container {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
}
</style>
