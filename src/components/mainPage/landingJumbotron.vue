<template>
    <v-parallax :src="require('@/assets/downtown.jpg')">
       <v-layout row class="space"/>
       <v-layout fill-height align-start >
         <v-flex xs6>
          <span class="white--text landing-text landing-text">Nothing About Us, Without Us.</span>
         </v-flex>
       </v-layout>
     </v-parallax>
</template>
<script>
import "vuetify/dist/vuetify.min.js"
import "vuetify/dist/vuetify.min.css"
export default {
  name: 'LandingJumbo',
  created() {
      console.log('jumbo created');
  },
}
</script>
<style scoped>
.landing-text {
  font-size: 3em;
  font-weight: 100;
}
.space {
  height: 2000px;
}
</style>
