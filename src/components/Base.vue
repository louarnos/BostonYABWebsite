
<template>
  <div>
    <!-- Nav Bar -->
    <v-toolbar class="nav-bar indigo lighten-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Boston Youth Action Board</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-scroll-to="'#who-we-are'" flat>Who We Are</v-btn>
        <v-btn v-scroll-to="'#truths-and-values'" flat>Truths and Values</v-btn>
        <v-btn flat>Written Word</v-btn>
        <v-btn flat>Videos</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Landing JumboTron -->
    <v-parallax :src="require('@/assets/downtown.jpg')">
       <v-layout row class="space"/>
       <v-layout fill-height align-start >
         <v-flex xs6>
          <span class="white--text landing-text landing-text">Nothing About Us, Without Us.</span>
         </v-flex>
       </v-layout>
     </v-parallax>

    <!-- about -->
    <div id="who-we-are" ref="whoWeAre"  class="indigo lighten-2">
      <div class="circle indigo lighten-2">
        <h1> Who We Are </h1>
      </div>
      <transition name="fade">
        <v-container v-if="whoWeAreInView" fluid grid-list-xl>
          <v-layout row justify-space-around>
            <v-flex xs10>
              <v-card class="indigo lighten-3">
                <v-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </v-card-text>
              </v-card>
            </v-flex>
         </v-layout>
        </v-container>
      </transition>
      <v-container v-if="!whoWeAreInView" style="min-height: 500px" fluid grid-list-xl>
      </v-container>
    </div>
    <v-container id="truths-and-values" fluid grid-list-xl class="grey darken-1">
      <v-layout row justify-space-around>
        <v-flex xs10>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </v-flex>
     </v-layout>
    </v-container>
     <v-footer height="auto">
      <v-card
        flat
        tile
        class="indigo lighten-2 white--text text-xs-center" >
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'Base',
  components: {
    'icon': Icon
  },
  data () {
    return {
        whoWeAreRect: {},
    }
  },
  methods: {
      handleScroll() {
         this.whoWeAreRect = this.$refs.whoWeAre ? this.$refs.whoWeAre.getBoundingClientRect() : {};
      },
  },
  computed: {
     whoWeAreInView() {
         let bounding = this.whoWeAreRect
         console.log( bounding.top - bounding.height );
         return (
             bounding.top - bounding.height <= 0
         );
     },
  },
  created () {
     document.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
     document.removeEventListener('scroll', this.handleScroll);
  }

}
</script>

<style scoped>
.landing-text {
  font-size: 3em;
  font-weight: 700;
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
#who-we-are {
  padding: 5%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
