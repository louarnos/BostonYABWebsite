<template>
     <v-container class="indigo lighten-2">
         <v-layout v-if="preview" class="preview" row wrap>
             <bloggy-post :author="author" :title="title" :body="body" :tags="tags" :files="files" :forDisplay="true"/>
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
                    @click="editPost" >
                    Edit
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
</template>

<script>

import Multiselect from 'vue-multiselect';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BloggyPost from '../common/blogPost.vue';

export default {
  name: 'EditPost',
  props: ['post', 'tags', 'authors' ],
  components: {
      'multi-select': Multiselect,
      'bloggy-post': BloggyPost,
  },
  watch: {
      tags() {
          this.tagsCopy = this.tags;
      },
  },
  beforeCreate() {
  },
  created() {
      this.tagsCopy     = this.tags,
      this.files        = this.post.files;
      this.title        = this.post.title;
      this.body         = this.post.body;
      this.author       = this.post.author;
      this.tagsSelected = this.post.tags;
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
      editPost() {
          console.log('EDIT');
          // TODO VALIDATION/WARNING HERE?

         // let formData = new FormData()
         // if ( this.fileList ) {
         //    for( var i = 0; i < this.fileList.length; i++ ){
         //          if ( this.deletedFiles[i] ) { continue; }
         //          let file = this.fileList[i];
         //          formData.append('files', file);
         //    }
         // }

         // formData.append('authorId', this.author._id);
         // formData.append('title',    this.title);
         // formData.append('body',     this.body);
         // formData.append('tags',     this.tags);

         // axios.post( '/posts', formData )
         //   .then( res => {
         //       this.clearForm();
         //       this.$emit('notifySuccess', { message: 'Successfully added new post.', loadData: true });
         //       this.$router.push({ name: 'all_posts', path: '/moderator/posts' });
         //   }).catch( err => {
         //       this.$refs.notification.showFailure({ title: 'Failure', message: err.response.data.error });
         //   });
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
      },
  },
  data: () => ({
      editor: ClassicEditor,
      author: [],
      title: "",
      body: "",
      tagsCopy: [],
      tagsSelected: [],
      editorConfig: {},
      preview: false,
	  files: [],
      fileList: null,
      deletedFiles: {}
  }),
}
</script>
<style scoped>
.container {
    margin: 0 !important;
    width: 100%;
    max-width: 100% !important;
}
</style>
