<template>
<div>
   <v-navigation-drawer
     floating
     permanent
     stateless
	 app

     v-model="drawer">
     <v-toolbar flat class="transparent">
       <v-list class="pa-0">
         <v-list-tile >
           <v-list-tile-content>
             <v-list-tile-title> Welcome Back {{ yabName.split(' ').map( w => w.charAt(0).toUpperCase() + w.slice(1) ).join(' ')  }}! </v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-toolbar>

     <v-list class="pt-0" dense>
       <v-divider></v-divider>

       <v-list-tile
         v-for="item in navItems"
         :key="item.title"
         @click="updateRoute(item.path)">
         <v-list-tile-action>
           <v-icon>{{ item.icon }}</v-icon>
         </v-list-tile-action>

         <v-list-tile-content>
           <v-list-tile-title>{{ item.title }}</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>
   </v-navigation-drawer>
   <v-content fill-height>
	 <router-view v-bind="routerProps"></router-view>
   </v-content>
</div>
</template>
<script>

import Multiselect from 'vue-multiselect'
import User from './common/hasUser.vue'
import axios from 'axios'

export default {
  name: 'Moderator',
  components: {
      'multi-select': Multiselect,
  },
  mixins: [User],
  created() {
	  this.loadData();
  },
  computed: {
	  routerProps() {
		  if ( this.$route.name === "add_author" ) { return { pronouns: this.pronouns } }
		  if ( this.$route.name === "create_post" ) { return { authors: this.authors } }
	  },
	  pronouns() {
		  let allPronouns = {};
		  this.authors.forEach( ( author ) => {
			  author.pronouns.forEach( pronoun => allPronouns[pronoun] = 1 );
		  });
		  return Object.keys( allPronouns );
	  }
  },
  methods: {
	  updateRoute(path) {
		  this.$router.push(path);
	  },
	  loadData(){
          axios.get( '/authors')
            .then( res => {
				this.authors = res.data.authors;
            }).catch( err => {
                console.log( 'failure' );
            });
	  },
  },
  data: () => ({
	navItems: [
	  { title: 'Add Author', icon: 'how_to_reg', path: '/moderator/add_author'  },
	  { title: 'Authors', icon: 'people', path: '/moderator/authors'  },
      { title: 'Create Post', icon: 'create' , path: '/moderator/create_post' },
	  { title: 'Posts', icon: 'list', path: '/moderator/posts'  },
    ],
	authors: [],
	drawer: true,
	right: null,
	view: 'createPost',
  }),
}
</script>
<style>
 .v-input {
	 margin-bottom: 2%;
 }
 .multiselect-container {
	 margin-bottom: 6%;
 }
 .v-content {
     min-height: 100%;
 }
 #app {
     min-height: 100%;
 }
 .layout.column {
     min-height: 100%;
 }
</style>
<style scoped>
  .navigation-drawer.navigation-drawer--fixed {
  	height: auto !important;
  }
  .login-container {
	  height: 100%;
      border: 3px solid #971111;
      background-color: #DDD;
      padding-top: 85px;
  }
  .section-header > h1{
      font-size: 1em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
</style>
