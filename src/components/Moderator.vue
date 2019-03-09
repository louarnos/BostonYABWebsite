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
         @click="updateRoute(item)">
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
     <notification ref="notification"/>
	 <router-view v-bind="routerProps" @notifySuccess="handleSuccess"></router-view>
   </v-content>
</div>
</template>
<script>

import Multiselect from 'vue-multiselect'
import User from './common/hasUser.vue'
import axios from 'axios'
import notification from './common/hasNotifications.vue'

export default {
  name: 'Moderator',
  components: {
      'multi-select': Multiselect,
      'notification': notification,
  },
  mixins: [User],
  created() {
	  this.loadData();
  },
  computed: {
	  routerProps() {
		  if ( this.$route.name === "add_author" ) { return { pronouns: this.pronouns } }
		  if ( this.$route.name === "create_post" ) { return { authors: this.authors, tags: this.tags } }
		  if ( this.$route.name === "all_authors" ) { return { authors: this.authors, pronouns: this.pronouns } }
		  if ( this.$route.name === "all_posts" ) { return { posts: this.posts } }
	  },
	  pronouns() {
		  let allPronouns = {};
		  this.authors.forEach( ( author ) => {
			  author.pronouns.forEach( pronoun => allPronouns[pronoun] = 1 );
		  });
		  return Object.keys( allPronouns );
	  },
	  tags() {
		  let allTags = {};
		  this.posts.forEach( ( post ) => {
			  post.tags.forEach( tag => allTags[tag] = 1 );
		  });

		  return Object.keys( allTags );
	  },
  },
  methods: {
	  handleSuccess(params) {
          this.$refs.notification.showSuccess({ title: 'Success', message: params.message });
		  if ( params.loadData ) {
			  this.loadData();
		  }
	  },
	  updateRoute(item) {
		  this.$router.push({ name: item.name, path: item.path });
	  },
	  loadData(){
          axios.get( '/authors')
            .then( res => {
				this.authors = res.data.authors;
            }).catch( err => {
				if ( err.response.data === 'Unauthorized' && err.response.status === 401 ) {
              		this.$router.push({ name: 'login', path: '/login', params: { unauthorized: 1 } });
				}
            });
          axios.get( '/posts')
            .then( res => {
				this.posts = res.data.posts;
            }).catch( err => {
                console.log( 'failure' );
            });
	  },
  },
  data: () => ({
	navItems: [
	  { title: 'Add Author',  icon: 'how_to_reg', name: 'add_author',  path: '/moderator/add_author'  },
	  { title: 'Authors',     icon: 'people',     name: 'all_authors', path: '/moderator/authors'  },
      { title: 'Create Post', icon: 'create' ,    name: 'create_post', path: '/moderator/create_post' },
	  { title: 'Posts',       icon: 'list',       name: 'all_posts',   path: '/moderator/posts'  },
    ],
	authors: [],
	posts: [],
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
	 margin-bottom: 4%;
 }
 .attachment-container {
	 margin-bottom: 2%;
 }
 .v-content {
     min-height: 100%;
 }
 #app {
	 position: absolute;
	 width: 100%;
	 top: 0;
	 bottom: 0;
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
