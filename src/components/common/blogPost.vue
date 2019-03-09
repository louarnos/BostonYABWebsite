<template>
  <v-card class="grey lighten-2 full-width">
   <v-layout>
    <v-flex class="post-container" xs3>
	 <v-avatar
	   slot="activator"
	   size="100px">
       <div class="full-width">
           <img v-if="author.profilePicture" :src="`http://localhost:3000/${author.profilePicture}`" />
           <img v-else :src="require('@/assets/yabLogo.jpg')" />
       </div>
    </v-avatar>
       <br>
       <br>
      <span class="teal--text accent-2 author-name">{{ author.name }}</span>
       <br>
      <span class="grey--text">{{ author.pronouns.join('/') }}</span>
    </v-flex>
    <v-flex xs8>
      <v-card-title primary-title class="title">
        <div width="100%">
          <div class="post-title" > {{ title }}</div>
          <span class="grey--text pull-right">{{ date }}</span> 
        </div>
      </v-card-title>
    </v-flex>
    <v-flex xs1>
       <v-dialog
         v-if="moderator"
         v-model="deletePost"
         width="500">
          <v-btn slot="activator" class="action-btn cancel-btn" small  icon> <v-icon> cancel </v-icon> </v-btn>
		  <v-card>
            <v-card-title
              class="headline amber darken-2"
              primary-title>
              Delete Post
            </v-card-title>
            <v-card-text> Are you sure you want to delete <b> <i>{{ title }}</i> </b> by {{ author.name }}? </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="cancel-btn"
                @click="deletePost=false"
                flat>
                Cancel Deletion
              </v-btn>
              <v-btn
                class="edit-btn"
                @click="handleDelete"
                flat>
                Confirm Deletion
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <v-btn class="action-btn edit-btn"   small v-if="moderator" icon> <v-icon> edit   </v-icon> </v-btn>
    </v-flex>
   </v-layout>
   <v-layout>
     <v-flex xs3>
     </v-flex>
     <v-flex xs9>
       <v-chip v-for="tag in tags" class="pull-left"  outline>{{ tag}}</v-chip>
       <v-btn class="action-btn" icon @click="show = !show">
         <v-icon >{{ show ? 'remove_circle' : 'add_circle'  }}</v-icon>
       </v-btn>
     </v-flex>
   </v-layout>
   <v-slide-y-transition>
     <div>
     <v-layout>
       <v-flex xs12>
         <v-img v-if="files.length === 1 && show" :src="files[0].src" contain> </v-img>
		 <v-carousel v-if="files.length > 1 && show">
			<v-carousel-item
			  v-for="(file,i) in files"
			  :key="i"
			  :src="forDisplay ? `http://localhost:3000/${file}` : file.src"
			></v-carousel-item>
		 </v-carousel>
       </v-flex>
     </v-layout>
     <v-layout>
       <v-flex xs12>
         <v-card-text v-show="show" v-html="body" class="body-container"> </v-card-text>
      </v-flex>
     </v-layout>
     </div>
   </v-slide-y-transition>
  </v-card>
</template>

<script>

import axios from 'axios';

export default {
  name: 'BlogPost',
  props: ['id', 'title', 'author', 'body', 'tags', 'files', 'forDisplay', 'moderator'],
  data() {
      return {
          show: false,
          deletePost: false,
      }
  },
  methods: {
      handleDelete() {
          axios.delete( `/posts/${this.id}` )
            .then( res => {
                this.deletePost = false;
                this.$emit('notifySuccess', { message: 'Successfully deleted post.', loadData: true });
            }).catch( err => {
                this.$emit('notifyFailure', err );
            });
      },
  },
  computed: {
      date() {
          return this.moment().format('l');
      },
  },
}
</script>
<style scoped>
.author-img{
    display: block;
    margin: auto;
}
.title {
	flex: 1;
}
.action-btn {
    float: right;
}
.full-width {
    width: 100%;
}
.post-container {
    padding: 12px;
    height: 120px;
}
.body-container {
    text-align: left;
}
.author-name {
    font-size: 1.5em;
}
.post-title {
    font-size: 2em;
}
.cancel-btn {
    color:  #D32F2F;
}
.edit-btn {
    color:  #1E88E5;
}
</style>
