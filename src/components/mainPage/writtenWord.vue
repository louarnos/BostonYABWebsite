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
                     <v-layout>
					  <v-flex xs3>
					   <img
						:src="require('@/assets/Lauren.jpg')"
                        class="author-img"
                        height="200px"
						contain ></img>
					  </v-flex>
					  <v-flex xs9>
					  <v-card-title primary-title class="title">
					   <div width="100%">
					     <div class="headline">My Experience as a YAB facilitator</div>
					     <span class="grey--text">Lauren Leonardis</span>
					     <span class="grey--text pull- right">10/01/2018</span>
					   </div>
					   <div style="width:100%;">
						 <v-btn class="toggle" icon @click="show[1] = !show[1]">
						   <v-icon >{{ show[1] ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
						 </v-btn>
					   </div>
					  </v-card-title>
                      </v-flex>
                     </v-layout>
					 <v-slide-y-transition>
					   <v-card-text v-show="show[1]">


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus dapibus leo, vel molestie orci elementum non. Sed rhoncus, nisi a facilisis scelerisque, nibh diam pharetra enim, sit amet mollis mauris arcu eu risus. Maecenas leo metus, bibendum sed tempor et, viverra vitae nunc. Pellentesque mollis suscipit massa, eget eleifend mauris euismod quis. Curabitur et porta nulla, dapibus tempus nulla. Proin mollis facilisis pharetra. Etiam tempor blandit hendrerit. In lacinia enim nec magna ultricies suscipit. Phasellus sollicitudin dui sed ipsum lobortis, non vulputate mauris bibendum. Vivamus sodales et nisl vel suscipit. Nam pharetra augue et dui rhoncus, a mattis ante cursus. Cras purus urna, efficitur ac malesuada in, venenatis vel nisl. Aliquam ornare varius fringilla.

Vivamus a quam vel ligula interdum suscipit ac sed eros. Fusce condimentum, erat ut consectetur viverra, nisl dolor malesuada diam, eget egestas nunc nibh vitae neque. Nunc ultricies elit sit amet vehicula scelerisque. Donec finibus fermentum metus, in tincidunt nibh tincidunt a. Quisque tempor vestibulum urna, nec ultricies risus dictum vitae. Duis a finibus arcu, ac sodales sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec metus sapien, lobortis quis condimentum at, finibus tincidunt tortor. Ut eleifend, turpis sed imperdiet fringilla, augue libero hendrerit orci, eu laoreet lectus sem nec quam. Vestibulum semper accumsan velit, nec blandit erat. Ut quis tellus nec purus fringilla sollicitudin.

Etiam ornare, velit ac eleifend finibus, felis felis bibendum enim, placerat tristique nulla turpis at ex. Etiam efficitur nisi justo, et fringilla ipsum tristique ac. In id neque consectetur quam mollis cursus. Fusce egestas at libero lobortis varius. Ut iaculis, nisi blandit mattis pretium, magna elit efficitur ex, id pulvinar mi arcu vitae tortor. Proin imperdiet metus eu ligula pulvinar, in porttitor nibh pellentesque. Vestibulum sit amet faucibus nunc. Praesent lacus erat, euismod eget lorem id, semper consectetur tortor. In porttitor arcu eget libero suscipit pellentesque. Integer bibendum massa metus, ac fermentum arcu porta feugiat. Integer sodales, massa non mattis vulputate, sapien mauris rhoncus ex, a bibendum nunc mi eu est.

Aliquam nec imperdiet nulla, sed dignissim augue. Sed sapien ante, accumsan id lectus id, mollis mattis ipsum. Curabitur tempor facilisis ex id lobortis. Sed fermentum justo eget justo consequat consequat. Duis imperdiet mollis pretium. In hac habitasse platea dictumst. Sed vulputate malesuada mauris non aliquam. Cras non libero lacinia quam dignissim vehicula. Sed ac quam non libero tincidunt ultrices non non orci. Suspendisse potenti. Duis congue elementum risus sed mattis. Suspendisse in faucibus leo. In ac lorem maximus, malesuada ligula ullamcorper, interdum erat. Donec ullamcorper tristique ante, eget gravida sapien malesuada eu. Etiam fringilla justo eget leo lacinia, in scelerisque turpis euismod.

Nullam ac magna venenatis, consequat arcu in, molestie erat. Praesent sed nisl pharetra, maximus turpis vitae, auctor tortor. Aenean aliquet leo non purus faucibus mollis. Aliquam non neque sit amet ipsum tempor posuere. Donec eu luctus augue. Integer feugiat ornare metus, eget hendrerit odio vulputate eget. Nam nec eleifend arcu. Mauris ac vehicula sem, eget lobortis metus. In ullamcorper efficitur neque. Cras augue velit, faucibus eleifend imperdiet a, dignissim in enim. Pellentesque lectus nibh, molestie at dolor eget, fermentum auctor justo. 
					   </v-card-text>
					 </v-slide-y-transition>
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
      return {
		show: {
            1: false,
        }
      }
  },
}
</script>
<style scoped>
#written-word {
  padding-top: 5%;
  min-height: 700px;
}
.author-img{
    display: block;
    margin: auto;
}
.title {
	flex: 1;
}
.toggle {
    margin-top: 14%;
    float: right;
}
</style>
