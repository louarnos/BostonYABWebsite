<template>
  <div id="center-reference" class="indigo lighten-2 white--text text-xs-center login-container" >
    <div class="section-header">
      <h1> Authors </h1>
    </div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="( author, i ) in authors" :key="i" xs4 class="add-margin" v-bind:class="{ 'elevation-10': isHovered(i) }" @mouseover="hoverCard(i)" @mouseout="noHoverCard(i)">
          <transition-group name="flip">
            <v-card v-if="!isClicked(i)" class="grey darken-2 author-container" :key="i" @click="triggerClick(i)" v-bind:class="{ 'flipped': isClicked(i), 'col-one': isColOne(i), 'col-two': isColTwo(i), 'col-three': isColThree(i) }">
              <v-avatar
                size="200px">
                <img v-if="author.profilePicture" :src="`http://localhost:3000/${author.profilePicture}`" />
                <img v-else :src="require('@/assets/yabLogo.jpg')" />
              </v-avatar>
              <div class="full-width name">
                {{ author.name }}
              </div>
            </v-card>
            <v-card v-else class="indigo lighten-2 card-flipped author-container" :key="i" v-bind:class="{ 'flipped': isClicked(i), 'col-one': isColOne(i), 'col-two': isColTwo(i), 'col-three': isColThree(i) }">
                <alter-author :author="author" @cancelCard="triggerClick(i)" :pronouns="pronouns" :profilePicture="author.profilePicture" />
            </v-card>
          </transition-group>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AlterAuthor from './alterAuthor.vue'
export default {
  name: 'AllAuthors',
  props: [ 'authors', 'pronouns' ],
  components: {
      'alter-author': AlterAuthor,
  },
  methods: {
      hoverCard(i) {
          this.cardSelected = i;
      },
      noHoverCard(i) {
          this.cardSelected = null;
      },
      isHovered( i ) {
          return this.cardSelected === i;
      },
      triggerClick( i ) {
         this.cardClicked = this.cardClicked === i ? null : i;
      },
      isClicked( i ) {
          return this.cardClicked === i;
      },
      isColOne( i ) {
          return i % 3 === 0;
      },
      isColTwo( i ) {
          return i - 1 % 3 === 0;
      },
      isColThree( i ) {
          return ( i + 1 ) % 3 === 0;
      },
  },
  data() {
      return {
          cardSelected: null,
          cardClicked: null,
      }
  }
}
</script>
<style scoped>
  .login-container {
      border: 3px solid #971111;
      background-color: #DDD;
      padding-top: 85px;
      width: 100%;
      height: 100%;
  }
  .section-header > h1 {
      font-size: 3em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  span.file-uploads {
      margin: 4%;
  }
  hr {
      border-color: #80CBC4;
      color: #80CBC4;
  }
  .author-container {
      padding: 12px;
  }
  .full-width {
      width: 100%;
  }
  .flipped.col-two {
      transform: scale(2) translate( 0, 0 ) rotateY(360deg);
      transition: 1s;
      transform-style: preserve-3d;
      position: element('#center-reference')
  }
  .flipped.col-one {
      transform: scale(2) translate( 50% ) rotateY(360deg);
      transition: 1s;
      transform-style: preserve-3d;
      position: element('#center-reference')
  }
  .flipped.col-three {
      transform: scale(2) translate( -50% ) rotateY(360deg);
      transition: 1s;
      transform-style: preserve-3d;
      position: element('#center-reference')
  }
  .card-flipped {
      z-index: 10000000000000001;
  }
  .name {
      color: #FFA000;
      font-size: 1.5em;
      margin-top: 2%;
  }
</style>
