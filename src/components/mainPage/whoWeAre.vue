<template>
  <div class="section-container indigo lighten-2">
      <div id="who-we-are" ref="positionTracker">
        <transition name="fade">
          <v-container v-if="inView" fluid grid-list-xl>
            <v-layout row justify-space-around>
              <v-flex xs10>
                <v-card>
                  <div class="section-header">
                    <h1> Who We Are </h1>
                  </div>
                  <v-card-text class="main-content">
                    The Boston Youth Action Board (YAB) is a group of young adults who have experienced or are
                    currently experiencing homelessness. The project is funded by the City of Boston to engage
                    young adults (YAs) experiencing homelessness in providing feedback and education to improve
                    the services and systems designed to support them.
                    </v-card-text>
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
  name: 'WhoWeAre',
  mixins: [LocationTracker],
}
</script>
<style>
#who-we-are {
  padding-top: 5%;
  min-height: 432px;
}
@media screen and (max-width: 480px) {
  .section-header {
      font-size: 1.8em;
  }
  .main-content {
    font-size: 1.2em;
  }
}
</style>
