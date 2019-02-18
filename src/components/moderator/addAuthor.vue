<template>
    <div class="indigo lighten-2 white--text text-xs-center login-container" >
      <div class="section-header">
        <h1> Add Author </h1>
      </div>
      <v-container>
          <v-layout row fill-height>
              <v-flex xs6 offset-sm3>
                  <v-form
                  ref="form"
                  lazy-validation>
                      <v-text-field
                        v-model="name"
                        label="Name">
                      </v-text-field>
                      <multi-select
                          id="pronouns"
                          v-model="pronouns"
                          :taggable="true"
                          multiple="multiple"
                          @tag="addTag"
                          :options="pronounOptions"
                          placeholder="Pronouns">
                      </multi-select>
					  <file-upload
						  extensions="gif,jpg,jpeg,png"
						  accept="image/png,image/gif,image/jpeg"
                          post-action="localhost:3000/authors/add"
						  :size="1024 * 1024 * 10"
                          :data="{ name: name, pronouns: pronouns }"
						  v-model="files"
						  @input-filter="inputFilter"
						  ref="upload">
                          <v-icon> library_add  </v-icon>
                           Select Profile Photo
				      </file-upload>
                      <v-card class="teal lighten-3" v-if="files.length">
					    <v-list two-line dense>
                          <v-list-tile v-for="(file, index) in files" :key="file.id">
                            <v-list-tile-action>
                              <v-icon color="indigo lighten-2">attachment</v-icon>
                            </v-list-tile-action>
					        <v-list-tile-content >
                	          <v-list-tile-title class="indigo-text lighten-2">{{ file.name }}</v-list-tile-title>
                              <v-list-tile-sub-title class="indigo-text lighten-2">{{ file.error ? 'Error: ' + file.error : 'Success: ' +  file.success }} </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
				        </v-list>
                      </v-card>
                      <hr>
                      <v-btn class="teal lighten-3 white--text" @click="createAuthor" outline >Create Author</v-btn>
                  </v-form>
              </v-flex>
          </v-layout>
      </v-container>
    </div>
</template>

<script>

import axios from 'axios'
import FileUpload from 'vue-upload-component'
import Multiselect from 'vue-multiselect'

export default {
  name: 'AddAuthor',
  components: {
      'multi-select': Multiselect,
      'file-upload': FileUpload,
  },
  methods: {
      createAuthor() {
          this.$refs.upload.active = true
          //axios.post( '/authors/add', { file: this.files } )
          axios.post( '/authors/add', { file: this.files } )
            .then( res => {
                console.log( 'success' );
                console.log( res );
            }).catch( err => {
                console.log( 'failure' );
                console.log( err.config );
                console.log( err.request );
                console.log( err.response );
            });
      },
      addTag(newTag, field) {
          this[field] = newTag
          //this[`${field}Options`].push( newTag )
      },
      inputFilter(newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
            return prevent()
          }
          if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
            return prevent()
          }
        }
      },
      //inputFile(newFile, oldFile) {
      //  if (newFile && !oldFile) {
      //    // add
      //    console.log('add', newFile)
      //  }
      //  if (newFile && oldFile) {
      //    // update
      //  }
      //  if (!newFile && oldFile) {
      //    // remove
      //    console.log('remove', oldFile)
      //  }
      //}
  },
  computed: {
      pronounOptions() {
          return [];
      }
  },
  data: () => ({
      name: "",
      pronouns: [],
      prevPronouns: [],
	  files: [],
  }),
}
</script>
<style scoped>
  .login-container {
      border: 3px solid #971111;
      background-color: #DDD;
      padding-top: 85px;
  }
  .section-header{
      font-size: 1.5em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  span.file-uploads {
      margin: 4%;
  }
  hr {
      border-color: #80CBC4;
      color: #80CBC4;
  }
</style>
