<template>
  <div id="center-reference" class="amber darken-2 indigo-text text-xs-center login-container"   >
    <div class="section-header black--text">
      <h1> Authors </h1>
    </div>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs4 v-for="( author, i ) in authors" :key="i" class="add-margin" >
          <transition-group name="flip">
            <v-card v-if="!isClicked(i)"
              class="grey darken-2 author-container could-flip"
              :key="i"
              @click="triggerClick(i, $event)"
              @mouseover="hoverCard(i)"
              @mouseout="noHoverCard(i)"
              v-bind:class="{ 'elevation-10': isHovered(i), 'blur': blur(i) }">
                <v-avatar
                  size="200px">
                  <img v-if="author.profilePicture" :src="`http://localhost:3000/${author.profilePicture}`" />
                  <img v-else :src="require('@/assets/yabLogo.jpg')" />
                </v-avatar>
              <div class="full-width name indigo-text">
                {{ author.name }}
              </div>
            </v-card>
            <v-card
              v-else
              class="indigo lighten-2 card-flipped author-container"
              :key="i"
              v-bind:class="{ 'flipped': isClicked(i), 'col-one': isColOne(i), 'col-two': isColTwo(i), 'col-three': isColThree(i) }">
                <alter-author @notifySuccess="notifySuccess" @notifyError="notifyError" :author="author" @cancelCard="triggerClick(i)" :pronouns="pronouns" :profilePicture="author.profilePicture" :width="cardWidth" />
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
      notifySuccess(args) {
          this.$emit('notifySuccess', args);
      },
      notifyError(err) {
          this.$emit('notifyError', err );
      },
      hoverCard(i) {
          this.cardSelected = i;
      },
      noHoverCard(i) {
          this.cardSelected = null;
      },
      isHovered( i ) {
          return this.cardSelected === i;
      },
      triggerClick( i, event ) {
         this.cardWidth = event ? event.currentTarget.offsetWidth : 0;
         this.cardClicked = this.cardClicked === i ? null : i;
      },
      isClicked( i ) {
          return this.cardClicked === i;
      },
      isColOne( i ) {
          return i % 3 === 0;
      },
      isColTwo( i ) {
          return ( i - 1 ) % 3 === 0;
      },
      isColThree( i ) {
          return ( i + 1 ) % 3 === 0;
      },
      blur(i) {
          return !this.isClicked(i) && this.cardClicked !== null && this.cardClicked >= 0;
      }
  },
  data() {
      return {
          cardSelected: null,
          cardClicked: null,
          cardWidth: null,
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
      transform: translate( 0, -25% ) rotateY(360deg);
      transition: 1s;
      transform-style: preserve-3d;
      position: element('#center-reference');
     // max-height: 100%;
  }
  .flipped.col-one {
      transform: translate( 105.5%, -25% ) rotateY(360deg);
      transition: 1s;
      transform-style: preserve-3d;
      position: element('#center-reference');
      //max-height: 100%;
  }
  .flipped.col-three {
      transform: translate( -105.5%, -25% ) rotateY(360deg);
      transition: 1s;
      transform-style: preserve-3d;
      position: element('#center-reference');
      //max-height: 100%;
  }
  .card-flipped {
      z-index: 10000000000000001;
      padding: 0px;
  }
  .name {
      color: #FFA000;
      font-size: 1.5em;
      margin-top: 2%;
  }
  .blur {
     -webkit-filter: blur(5px);
     -moz-filter: blur(5px);
     -o-filter: blur(5px);
     -ms-filter: blur(5px);
  }
  .indigo-text {
     // color: #7986CB;
      color: #C5CAE9
  }
</style>
