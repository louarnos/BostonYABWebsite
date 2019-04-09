<template>
      <div class="section-container indigo lighten-2">
        <div id="written-word" ref="positionTracker">
          <transition name="fade">
            <v-container v-if="inView" fluid>
             <v-layout row wrap>
                <v-flex xs12>
                 <v-card v-if="inView" class="indigo lighten-2">
                   <div class="section-header">
                     <h1> Written Word </h1>
                   </div>
                    <v-layout row wrap align-center justify-center class="options">
                       <div style="text-align: left; padding-left: 3px; min-height: 46px;">
                         <span class="amber-text"> Show </span>
                       </div>
                       <div class="select-container">
                         <v-select
                           class="num-selector"
                           height="25"
                           v-model="numShowing"
                           :items="numOptions" >
                         </v-select>
                       </div>
                       <div style="text-align: left; padding-left: 3px; min-height: 46px;">
                         <span class="amber-text"> of {{ posts.length }} possible posts. </span>
                       </div>
                       <div style="width: 100%">
                          <v-chip v-for="(tag, i) in tagFilters" :key="i"  outline>
                            {{ tag }}
                             <v-btn icon @click="tagFilters.splice(i, 1)">
                               <v-icon >delete</v-icon>
                             </v-btn>
                          </v-chip>
                       </div>
                    </v-layout>
                 </v-card>
                </v-flex>
                <v-flex xs12 v-for="( post, i ) in postsViewing" :key="i" class="bottom-margin">
                    <blog-post
                      @filterForTag="addTagToFilter"
                      :id="post._id"
                      :title="post.title"
                      :author="post.author"
                      :body="post.body"
                      :tags="post.tags"
                      :date="post.date"
                      :files="post.files"
                      :video="post.video !== 'null' ? post.video : false"
                      :forDisplay="true"/>
                </v-flex>
              </v-layout>
            </v-container>
          </transition>
        </div>
      </div>
</template>
<script>
import BlogPost from '../common/blogPost.vue'
import LocationTracker from '../common/hasTracking.vue'
import axios from 'axios'
import Multiselect from 'vue-multiselect';

export default {
  name: 'WrittenWord',
  mixins: [LocationTracker],
  components: {
      'blog-post': BlogPost,
      'multi-select': Multiselect,
  },
  methods: {
      addTagToFilter( tag ) {
          this.tagFilters.push( tag );
      },
  },
  created() {
    axios.get( '/posts')
      .then( res => {
	  	this.posts = res.data.posts;
      }).catch( err => {
          console.log( 'failure' );
      });
  },
  computed: {
      postsViewing() {
          return this.posts.reverse().filter( p => {
              if ( !p.tags && this.tagFilters.length ) {
                  return false;
              }

              let match = true;
              this.tagFilters.forEach( t => {
                  if ( ! p.tags.includes( t ) ) {
                      match = false;
                  }
              });
              return match;
          }).slice( 0, this.numShowing );
      },
      numOptions() {
        let options = [ 1, 3, 5, 10, 25 ];
        if ( this.posts.length > 25 ) {
            options.push( this.posts.length );
        }

        return options;
      }
  },
  data() {
      return {
		show: {
            1: false,
        },
        posts: [],
        numShowing: 3,
        tagFilters: [],
      }
  },
}
</script>
<style scoped>
#written-word {
  padding-top: 5%;
  min-height: 700px;
  text-align: center;
}
.section-header {
    text-align: left;
}
.options {
    padding-bottom: 2%;
}
.select-container {
    padding-left: 5px;
    padding-right: 5px;
    max-width: 25%;
}
.bottom-margin {
    margin-bottom: 1%;
}
.v-input {
    padding-top: 0px;
    margin-top: 0px;
}
.amber-text {
    color: #FFA000;
}
@media screen and (max-width: 480px) {
    .v-btn {
        margin: 0;
        padding: 0;
    }
    .section-heaader {
        font-size: 1.7em;
    }
}
</style>
