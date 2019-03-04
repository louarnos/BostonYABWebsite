<template>
  <form>
    <v-avatar
      size="200px">
      <img v-if="fileSrc" :src="fileSrc" />
      <img v-else-if="author.profilePicture" :src="`http://localhost:3000/${author.profilePicture}`" />
      <img v-else :src="require('@/assets/yabLogo.jpg')" />
    </v-avatar>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name">
    </v-text-field>
    <div class="multiselect-container">
        <multi-select
            id="pronouns"
            v-model="pronounsSelected"
            :taggable="true"
            multiple="multiple"
            @tag="addTag"
            :options="pronounsOptions"
            placeholder="Pronouns">
        </multi-select>
    </div>
    <div v-if="!file" class="multiselect-container">
      <input type="file" @change="inputFilter">
    </div>
    <div v-if="file" class="multiselect-container">
     <v-card class="teal lighten-3">
       <v-list two-line dense>
         <v-list-tile>
           <v-list-tile-action class="icon">
             <v-icon color="indigo lighten-2">attachment</v-icon>
           </v-list-tile-action>
           <v-list-tile-action>
             <v-img :src="fileSrc"/>
           </v-list-tile-action>
           <v-list-tile-content class="text-center" >
             <v-list-tile-title class="indigo-text lighten-2">Name: {{ file.name }}</v-list-tile-title>
             <v-list-tile-title class="indigo-text lighten-2">Size: {{ file.size }}kB</v-list-tile-title>
           </v-list-tile-content>
           <div class="full-width">
             <v-btn icon ripple right @click="deleteImage">
               <v-icon color="red lighten-2">delete</v-icon>
             </v-btn>
         </div>
         </v-list-tile>
       </v-list>
     </v-card>
    </div>
    <v-btn @click="cancelEdit" class="elevation-5" outline> Cancel </v-btn>
    <v-btn @click="edit" class="elevation-5" outline >Edit Author</v-btn>
  </form>
</template>

<script>
import Multiselect from 'vue-multiselect';
import axios from 'axios'

export default {
  name: 'AlterAuthor',
  props: ['author', 'pronouns'],
  components: {
      'multi-select': Multiselect,
  },
  created() {
      this.pronounsOptions = this.pronouns;
  },
  methods: {
      addTag( newTag, field ) {
          this[`${field}Options`].push(newTag);
          this[`${field}Selected`].push(newTag);
      },
      edit() {
          let formData = new FormData()
          if ( this.file ) {
            formData.append('file', this.file , this.file.name)
          }

          formData.append('pronouns', this.pronounsSelected)
          formData.append('name', this.name)

          axios.put( `/authors/${this.author._id}`, formData )
            .then( res => {
                this.$emit('notifySuccess', `Author ${res.data.author.name} successfully updated` );
            }).catch( err => {
                this.$emit('notifyError', err );
            });
      },
      cancelEdit() {
          this.$emit('cancelCard');
      },
      inputFilter( event ) {
        let file = event.target.files[0]

        if (file) {
          if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(file.name)) {
            return prevent()
          }
          if (/\.(php5?|html?|jsx?)$/i.test(file.name)) {
            return prevent()
          }
          let src = URL.createObjectURL(file);
          this.fileSrc = src;
          this.file = file
        }
      },
      deleteImage() {
          this.file = null;
          this.fileSrc = null;
      },
  },
  data() {
      return {
          name: this.author.name,
          nameRules: [
            v => !!v || 'Name is required',
            v => /^[a-zA-Z\s]+$/.test(v) || 'Name can only have letters'
          ],
          pronounsSelected: this.author.pronouns,
          pronounsOptions: [],
	      file: null,
          fileSrc: null,
      }
  }
}
</script>
<style scoped>
  .section-header > h1 {
      font-size: 3em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  .bottom-margin {
      margin-bottom: 3%;
  }
  form {
      position: relative;
      height: 55vh;
  }
</style>
