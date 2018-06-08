
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
        <icon>
          <icon name="cicle" scale="10" class="indigo lighten-5"/>
          <icon name="users" scale="7"/>
        </icon>
      </div>
      <div class="circle indigo lighten-2">
        <b> Who We Are </b>
      </div>
      <transition name="fade">
        <!-- <v-container v-if="whoWeAreInView" fluid grid-list-xl> -->
        <v-container v-if="true" fluid grid-list-xl>
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
        class="indigo lighten-2 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            class="mx-3 white--text"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
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
      msg: 'Hi Lauren'
    }
  },
 // computed: {
 //     whoWeAreInView() {
 //         let el = this.$refs.whoWeAre;
 //         if (!el) {
 //             return false;
 //         }
 //         console.log('fired');

 //   	  let bounding = el.getBoundingClientRect();

 //         return (
 //             bounding.top >= 0 &&
 //             bounding.left >= 0 &&
 //             bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
 //             bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
 //         );
 //     }
 // }
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
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
