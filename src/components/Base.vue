
<template>
  <div class="hide-overflow" style="position:relative">
    <!-- Nav Bar -->
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

    <!-- Landing JumboTron -->
    <v-parallax :src="require('@/assets/overview.jpeg')">
       <v-layout row class="space"/>
       <v-layout fill-height align-start >
         <v-flex xs6>
          <span class="white--text landing-text landing-text">Nothing About Us, Without Us.</span>
         </v-flex>
       </v-layout>
     </v-parallax>

    <!-- about -->
      <div class="section-container indigo lighten-2">
        <div id="who-we-are" ref="whoWeAre">
          <transition name="fade">
            <v-container v-if="whoWeAreInView" fluid grid-list-xl>
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
      <div class="section-container grey lighten-2">
        <div id="truths-and-values" ref="truthsAndValues">
          <transition name="fade">
            <v-container v-if="truthsAndValuesInView" fluid grid-list-xl>
              <v-layout row justify-space-around>
                <v-flex xs10>
                  <v-card>
                    <div class="section-header">
                      <h1> Truths And Values </h1>
                    </div>
                    <v-card-text class="list content-text">
                      <v-container grid-list-md>
                        <v-layout row wrap>

                          <v-flex xs6>
                            <v-card class="red lighten-2 list-container" height="100%">
                                <v-layout>
                                  <v-flex xs2>
                                  </v-flex>
                                  <v-flex xs10 >
                                    <h2 class="list-title"> Truths </h2>
                                  </v-flex>
                                </v-layout>
                                <v-divider dark></v-divider>
                                <div v-for="( el, index) in truthsContent">
                                  <v-layout row wrap>
                                    <v-flex xs2 class="content-number">
                                      {{index+1}}.
                                    </v-flex>
                                    <v-flex xs10 class="list content-subheader">
                                      {{el.title}}
                                  <v-divider dark></v-divider>
                                      <v-layout>
                                        <v-flex xs12 class="list content-body">
                                          {{el.content}}
                                        </v-flex>
                                      </v-layout>
                                    </v-flex>
                                  </v-layout>
                                </div>
                            </v-card>
                          </v-flex>

                          <v-flex xs6>
                            <v-card class="red lighten-2 list-container" height="100%">
                                <v-layout>
                                  <v-flex xs2>
                                  </v-flex>
                                  <v-flex xs10 >
                                    <h2 class="list-title"> Values </h2>
                                  </v-flex>
                                </v-layout>
                                <v-divider dark></v-divider>
                                <div v-for="( el, index) in valuesContent">
                                  <v-layout row wrap>
                                    <v-flex xs2 class="content-number">
                                      {{index+1}}.
                                    </v-flex>
                                    <v-flex xs10 class="list content-subheader">
                                      {{el.title}}
                                  <v-divider dark></v-divider>
                                      <v-layout>
                                        <v-flex xs12 class="list content-body">
                                          {{el.content}}
                                        </v-flex>
                                      </v-layout>
                                    </v-flex>
                                  </v-layout>
                                </div>
                            </v-card>
                          </v-flex>



                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>
             </v-layout>
            </v-container>
          </transition>
        </div>
      </div>
     <v-footer height="auto">
      <v-card
        flat
        tile
        class="indigo lighten-2 white--text text-xs-center" >
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </div>
</template>
<script>
import "vuetify/dist/vuetify.min.js"
import "vuetify/dist/vuetify.min.css"
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'Base',
  components: {
    'icon': Icon
  },
  data () {
    return {
        whoWeAreRect: {},
        truthsAndValuesRect: {},
        valuesContent: [
          {
            title: 'A Safe and Affirming Environment',
            content: 'While you are here we ask that you participate in our routines and standard operating procedures alongside us as peers. Our members come from a lot of different backgrounds and have expertise in their lived experiences. You are entering as a guest in their space, and it is important to recognize that working with the YAB is a privilege. Being a part of our culture or participating in our group is not something everyone gets invited to do.'
          },
          {
            title: 'Respectful Language',
            content: "The members of the YAB have gone to great lengths to advocate for themselves in terms of how they would like to be referred to. Language is a vital part of showing respect and validating someone's lived experience and an important part of professionalism. Please keep in mind that we may use some words that are not appropriate for you to use. Here are some Do’s and Dont’s for language use in the YAB: <br>▪ Do say 'Substance use, Problematic substance use.' <br>Don't say 'Substance Abuse, Substance Misuse, User, Junkie, Addict' <br>▪ Do refer to us as 'People, Folks, Youth and Young Adults, Students' Don't call us 'kids' or 'children' <br>▪ Do ask 'What are your pronouns?' Don’t assume or guess. <br>▪ Do say 'People experiencing homelessness' Don’t say 'Homeless People, homeless youth'"
          },
          {
            title: 'Authentic and Transparent Process',
            content: 'Our members are invested in working with you. That means we need to know the purpose of the work we are doing, and where the information that we give you is going. It is also vital for us to fully understand why you have come to us for this particular project, what sorts of information you are looking to gain, and what we are going to be compensated. We ask that you will keep us informed of what has been done with the information and feedback we give you. In addition, our confidentiality must be respected.'
          },
          {
            title: 'Working with us is not charity',
            content: 'We have professionally valuable insight to share, and are here to help you improve your programs and services. We expect to be valued for our insight, resilience, and resourcefulness, not pitied for the situations we are in.'
          },
          {
            title: 'We do not have to bleed for you',
            content: 'In the YAB’s line of work we are often sought in a way that feels tokenizing, decorative, or purely for our “sad stories.” We have real advice and experience in homelessness that does NOT require us to re-traumatize ourselves for your benefit. Please do not ask us for specific details of our difficult experiences.'
          },
        ],
        truthsContent:[
          {
            title: 'Everyone Deserves a Home',
            content: 'It does not matter how we entered homelessness, what we did to survive while experiencing homelessness, or where we came from. Above all else, everyone deserves a home. The “Housing First” model is a model that puts people directly into housing, without other pre-conditions or expectations (such as sobriety or mental health stability). . We believe that It is the best model to ending homelessness and making it as brief as possible.'
          },
          {
            title: 'Homelessness is a Symptom of Oppression',
            content: 'is in direct relation to the oppression experienced by these communities and is especially significant for LGBTQ+, Black/POC, and Native Americans.'
          },
          {
            title: 'Invisible Disabilities are Real',
            content: 'There is no way to look at a person and determine their abilities. Able-bodiedness does not equate to ability to work.'
          },
          {
            title: 'All Survival Tactics are Legitimate and Valid',
            content: 'We do not judge someone based on what they do to get by, whether for income or for maintaining sanity. This includes coping strategies such as substance use or self-harm that may have negative long-term consequences, but serve a purpose in the moment. We recognize that all behaviours are an attempt to cope with the situation, even if we don’t agree or wish the person wouldn’t do it.'

          },
          {
            title: 'We Deserve Pleasure',
            content: 'There is a dignity in pleasure, and we deserve to have fun and enjoy ourselves. Homelessness is stressful enough without being denied pleasure. Self-care is extremely important when experiencing homelessness, and things that may seem frivolous or “a waste of money” are sometimes the things that get us through.',
          },
          {
            title: 'We Are Entitled to Privacy and Boundaries',
            content: 'No one is required to explain themselves or explain their choices to someone else. Accessing a service doesn’t mean that people are entitled to our story. “No” is a good and valid answer, as is sometimes not being truthful about things. No one is entitled to our truth and we can enforce that boundary however we need to.',
          },
          {
            title: 'Respect and Trust must be earned',
            content: 'Simply because someone is in a position of authority does not mean that they deserve our respect and trust. This must be earned and needs to be reciprocated.'
          },
        ]
    }
  },
  methods: {
      handleScroll() {
         this.whoWeAreRect = this.$refs.whoWeAre ? this.$refs.whoWeAre.getBoundingClientRect() : {};
         this.truthsAndValuesRect = this.$refs.truthsAndValues ? this.$refs.truthsAndValues.getBoundingClientRect() : {};
      },
  },
  computed: {
     whoWeAreInView() {
         let bounding = this.whoWeAreRect
         return (
             bounding.top - bounding.height <= 0
         );
     },
     truthsAndValuesInView() {
         let bounding = this.truthsAndValuesRect
         console.log( 'top', bounding.top)
         console.log( 'height', bounding.height)
         console.log('res', bounding.top - bounding.height)
         return (
             bounding.top - bounding.height <= 0
         );
     },
  },
  created () {
     document.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
     document.removeEventListener('scroll', this.handleScroll);
  }

}
</script>

<style scoped>
.landing-text {
  font-size: 3em;
  font-weight: 1∑00;
  font-family: Monsterrat, sans-serif;
}
.main-content {
  font-size: 3em;
  font-family: Monsterrat, sans-serif;
  font-weight: 100;
}
.content-text {
  font-size: 1.5em;
  font-family: Monsterrat, sans-serif;
  font-weight: 100;
}
h2.list-title {
  font-size: 3em;
  font-weight: 400;
}
.list-container {
  padding: 3%;
}
.content-number {
  font-size: 3em;
  font-weight: 600;
  font-style: italic;
}
.list.content-subheader {
  font-size: 1.25em;
  font-weight: 500;
}
.list.content-body{
  font-size: .5em;
  font-weight: 200;
  //font-style: italic;
}
.section-header{
  font-size: 3.5em;
  font-family: Monsterrat, sans-serif;
  font-weight: 300;
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
.section-container {
  padding-top: 15%;
  padding-bottom: 15%;
}
#who-we-are {
  padding-top: 5%;
  min-height: 432px;
}
#truths-and-values {
  padding-top: 5%;
  min-height: 700px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
