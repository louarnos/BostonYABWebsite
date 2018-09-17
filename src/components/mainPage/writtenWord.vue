<template>
      <div class="section-container indigo lighten-2">
        <div id="written-word" ref="positionTracker">
          <transition name="fade">
            <v-container v-if="inView" fluid grid-list-xl>
              <v-layout row justify-space-around>
                <v-flex xs10>
                 <v-card v-if="inView" class="indigo lighten-2">
                   <div class="section-header">
                     <h1> Written Word </h1>
                   </div>
                    <v-card class="grey lighten-2">

					  <v-card-title primary-title>
					   <div>
					     <div class="headline">My Experience as a YAB facilitator</div>
					     <span class="grey--text">Lauren Leonardis</span>
					     <span class="grey--text pull- right">10/01/2018</span>
					   </div>
					  </v-card-title>

                    </v-card>
                 </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </transition>
        </div>
      </div>
</template>
<script>
import LocationTracker from '../common/hasTracking.vue'
export default {
  name: 'WrittenWord',
  mixins: [LocationTracker],
  data() {
      return {}
  },
}
</script>
<style scoped>
#written-word {
  padding-top: 5%;
  min-height: 700px;
}
</style>
