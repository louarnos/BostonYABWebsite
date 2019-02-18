<template>
    <v-img :height="!isMobile ? 800 : 400" :src="!isMobile ? require('@/assets/yabPainting.jpg') : require('@/assets/yabPaintingMobile.jpg')" class="offset-for-nav">
       <v-layout fill-height align-end >
       <v-flex xs12>
          <span class="yellow--text landing-text landing-text">Nothing About Us, Without Us.</span>
         </v-flex>
       </v-layout>
     </v-img>
</template>
<script>
import Mobile from "../common/mobile.vue"
export default {
  name: 'LandingJumbo',
  mixins: [Mobile],
  created() {
      console.log( this.isMobile );
      console.log('jumbo created');
  },
}
</script>
<style scoped>
.landing-text {
  font-size: 4em;
  font-weight: 100;
}
.offset-for-nav {
    margin-top: 63px;
}
@media screen and (max-width: 480px) {
  .landing-text {
    font-size: 1.5em;
    font-weight: 500;
  }
}

</style>
