<template>
    <div>
        <landingEl/>
        <whoWeAreEl ref='whoWeAre'/>
        <v-parallax :src="require('@/assets/long_table.jpg')" :height="'455'">
        </v-parallax>
        <truthsAndValuesEl ref='truthsAndValues'/>
        <v-parallax :src="require('@/assets/useful.png')" :height="'510'" >
        </v-parallax>
        <writtenWordEl ref='writtenWord'/>
  </div>
</template>

<script>
import LandingJumbo from "./mainPage/landingJumbotron.vue"
import WhoWeAre from "./mainPage/whoWeAre.vue"
import TruthsAndValues from "./mainPage/truthsAndValues.vue"
import WrittenWord from "./mainPage/writtenWord.vue"

export default {
  name: 'MainPage',
  components: {
    'landingEl': LandingJumbo,
    'whoWeAreEl': WhoWeAre,
    'truthsAndValuesEl': TruthsAndValues,
    'writtenWordEl': WrittenWord
  },
  methods: {},
  created () {},
  destroyed () {}
}
</script>
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
