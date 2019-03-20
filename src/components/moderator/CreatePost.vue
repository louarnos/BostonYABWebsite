<template>
    <div class="indigo lighten-2 white--text text-xs-center login-container" >
        <notification ref="notification"/>
        <div class="section-header">
          <h1> Create New Post </h1>
        </div>
        <v-container>
            <v-layout v-if="preview" row wrap>
                <blog-post :author="author" :title="title" :body="body" :tags="tags" :files="files" :video="video"/>
            </v-layout>
            <v-layout v-else row wrap>
                <v-flex xs6 offset-sm3>
                    <v-text-field
                        v-model="title"
                        label="Title">
                    </v-text-field>
                    <div class="multiselect-container">
                        <multi-select
                            id="author"
                            v-model="author"
                            :options="authors"
                            label="name"
                            placeholder="Author">
                        </multi-select>
                    </div>
                    <div class="multiselect-container">
                        <multi-select
                            id="tags"
                            v-model="tagsSelected"
                            :taggable="true"
                            @tag="addTag"
                            multiple="multiple"
                            :options="tagsCopy"
                            placeholder="Tags">
                        </multi-select>
                    </div>
                    <v-text-field
                        v-model="video"
                        label="Video">
                    </v-text-field>
                    <div class="multiselect-container">
                        <input type="file" @change="inputFilter" multiple="multiple"/>
                    </div>
                    <div class="attachment-container"  v-for="( file, i ) in files" :key="i">
                      <v-card class="teal lighten-3">
                        <v-list two-line dense>
                          <v-list-tile>
                            <v-list-tile-action class="icon">
                              <v-icon color="indigo lighten-2">attachment</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-action>
                              <v-img :src="file.src"/>
                            </v-list-tile-action>
                            <v-list-tile-content class="text-center" >
                              <v-list-tile-title class="indigo-text lighten-2">Name: {{ file.name }}</v-list-tile-title>
                              <v-list-tile-title class="indigo-text lighten-2">Size: {{ file.size }}kB</v-list-tile-title>
                            </v-list-tile-content>
                            <div class="full-width">
                              <v-btn icon ripple right @click="deleteImage(i)">
                                <v-icon color="red lighten-2">delete</v-icon>
                              </v-btn>
                          </div>
                          </v-list-tile>
                        </v-list>
                      </v-card>
                    </div>
               </v-flex>
               <v-flex xs12>
                    <ckeditor :editor="editor" v-model="body" :config="editorConfig"></ckeditor>
               </v-flex>
            </v-layout>
            <v-layout row wrap>
               <v-flex xs12>
                   <v-btn
                       outline
                       class="elevation-5"
                       @click="createPost" >
                       Create
                   </v-btn>
                   <v-btn
                       v-if="preview"
                       class="elevation-5"
                       outline
                       @click="preview=false">
                       Back to Edit
                   </v-btn>
                   <v-btn
                       v-else
                       class="elevation-5"
                       outline
                       @click="preview=true">
                       Preview
                   </v-btn>
               </v-flex>
        </v-layout>
    </v-container>
   </div>
</template>

<script>

import axios from 'axios';
import Multiselect from 'vue-multiselect';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BlogPost from '../common/blogPost.vue';
import notification from '../common/hasNotifications.vue'

export default {
  name: 'Moderator',
  props: ['authors', 'tags'],
  components: {
      'multi-select': Multiselect,
      'blog-post': BlogPost,
      'notification': notification,
  },
  watch: {
      tags() {
          this.tagsCopy = this.tags;
      },
  },
  created() {
      this.tagsCopy = this.tags;
  },
  methods: {
      deleteImage(index) {
          this.files.splice( index, 1 );
          this.deletedFiles[index] = 1;
      },
      addTag( newTag, field ) {
          this[`${field}Copy`].push(newTag);
          this[`${field}Selected`].push(newTag);
      },
      createPost() {
          // TODO VALIDATION/WARNING HERE?

          let formData = new FormData()
          if ( this.fileList ) {
             for( var i = 0; i < this.fileList.length; i++ ){
                   if ( this.deletedFiles[i] ) { continue; }
                   let file = this.fileList[i];
                   formData.append('files', file);
             }
          }

          formData.append('authorId', this.author._id);
          formData.append('title',    this.title);
          formData.append('body',     this.body);
          formData.append('tags',     this.tags);
          formData.append('video',    this.video);

          axios.post( '/posts', formData )
            .then( res => {
                this.clearForm();
                this.$emit('notifySuccess', { message: 'Successfully added new post.', loadData: true });
                this.$router.push({ name: 'all_posts', path: '/moderator/posts' });
            }).catch( err => {
                this.$refs.notification.showFailure({ title: 'Failure', message: err.response.data.error });
            });
      },
      inputFilter( event ) {
        let files = event.target.files;
        this.fileList = event.target.files;
        let validFiles = [];
        let invalidFiles = [];
        if (files) {
          Array.from(files).forEach( ( file ) => {
              if( /(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(file.name) || /\.(php5?|html?|jsx?)$/i.test(file.name) ) {
                  invalidFiles.push( file );
              } else {
                  let src = URL.createObjectURL(file);
                  file.src = src;
                  validFiles.push( file );
              }
          });

          this.files = validFiles;

          if ( invalidFiles.length ) {
              // TODO SOME WARNING HERE?
          }
        }
      },
      clearForm() {
          this.author       = [];
          this.title        = "";
          this.body         = "";
          this.files        = [];
          this.fileList     = null;
          this.tagsSelected = [];
          this.deletedFiles = {};
          this.video        = null;
      },
  },
  data: () => ({
      editor: ClassicEditor,
      author: [],
      title: "",
      body: "",
      tagsCopy: [],
      tagsSelected: [],
      authorOptions: [],
      editorConfig: {},
      preview: false,
	  files: [],
      fileList: null,
      deletedFiles: {},
      video: null,
  }),
}
</script>
<style scoped>
  .login-container {
      border: 3px solid #971111;
      background-color: #DDD;
      padding-top: 85px;
  }
  .form-field-container {
      color: black;
      margin-top: 1%;
      margin-bottom: 1%;
      background-color: white;
  }
  .section-header > h1 {
      font-size: 8vh;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  .v-list__tile__action.icon {
      min-width: none;
      width: auto;
  }
  .text-center > .v-list__tile__title {
      text-align: center;
  }
</style>
