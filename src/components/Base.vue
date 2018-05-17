
<template>
  <div>
    <!-- Nav Bar -->
    <v-toolbar class="nav-bar indigo lighten-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Boston Youth Action Board</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Who We Are</v-btn>
        <v-btn flat>Truths and Values</v-btn>
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
    <div id="who-we-are" class="indigo lighten-2">
      <div class="circle indigo lighten-2">
        <icon>
          <icon name="cicle" scale="10" class="indigo lighten-5"/>
          <icon name="users" scale="7"/>
        </icon>
        <b> Who We Are </b>
      </div>
    </div>
    <div id="truth-and-values">
    </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-text {
  font-size: 3em;
  font-weight: 700;
}
.space {
  height: 2000px;
}
.circle {
  margin: 0 auto;
  width: 8%;
  text-align: center;
}
#who-we-are {
  padding: 5%;
}
</style>
