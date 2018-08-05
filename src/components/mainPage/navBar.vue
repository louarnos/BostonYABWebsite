<template>
    <v-toolbar class="nav-bar indigo lighten-2" fixed prominent>
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
</template
<script>
import "vuetify/dist/vuetify.min.js"
import "vuetify/dist/vuetify.min.css"
export default {
  name: 'Base',
}
</script>
<style>
<style>
