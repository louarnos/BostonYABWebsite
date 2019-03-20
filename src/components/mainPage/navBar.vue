<template>
    <v-toolbar class="nav-bar indigo lighten-2" fixed prominent>
      <img height="95%" contain class="pull-left" :src="require('@/assets/yabLogoRound.png')"/>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-scroll-to="'#who-we-are'" flat>Who We Are</v-btn>
        <v-btn v-scroll-to="'#truths-and-values'" flat>Truths and Values</v-btn>
        <v-btn v-scroll-to="'#written-word'" flat>Written Word</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
      <v-btn v-if="isMobile" class="indigo lighten-2" @click.stop="drawer = !drawer"> <v-icon dark>arrow_drop_down</v-icon> </v-btn>
      <v-navigation-drawer
        id="mobile-nav"
        v-model="drawer"
        absolute
        temporary>
        <v-list>
          <v-list-tile>
            <v-btn @click="drawer = !drawer" v-scroll-to="{ el: '#who-we-are', offset: -50 }" flat>Who We Are</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn @click="drawer = !drawer" v-scroll-to="{ el: '#truths-and-values', offset: -50 }" flat>Truths and Values</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn @click="drawer = !drawer" v-scroll-to="{ el: '#written-word', offset: -50 }" flat>Written Word</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn @click="drawer = !drawer" flat>Contact</v-btn>
          </v-list-tile>
        </v-list>
        </v-navigation-drawer>
    </v-toolbar>
</template>
<script>
import Mobile from '../common/mobile.vue'
export default {
  name: 'NavBar',
  mixins: [ Mobile ],
  data() {
      return {
          drawer: false,
      }
  }
}
</script>
<style>
 #mobile-nav {
     height: auto !important;
     margin-top: 65px !important;
 }
</style>
