<template>
  <div class="indigo lighten-2 white--text text-xs-center login-container" >
    <notification ref="notification"/>
    <div class="section-header">
      <h1> Add Author </h1>
    </div>
    <v-container>
    <v-layout row wrap>
        <v-flex lg6 offset-lg3>
          <v-form ref="form" lazy-validation>
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
                    :options="pronounsCopy"
                    placeholder="Pronouns">
                </multi-select>
            </div>
            <input type="file" @change="inputFilter">
            <v-card class="teal lighten-3" v-if="file">
              <v-list two-line dense>
                <v-list-tile>
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
            <v-btn @click="createAuthor" outline >Create Author</v-btn>
          </v-form>
        </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'
import Multiselect from 'vue-multiselect'
import notification from '../common/hasNotifications.vue'

export default {
  name: 'AddAuthor',
  props: ['pronouns'],
  components: {
      'multi-select': Multiselect,
      'notification': notification,
  },
  created() {
      this.pronounsCopy = this.pronouns;
  },
  methods: {
      createAuthor() {
          // TODO validation
          let formData = new FormData()
          if ( this.file ) {
            formData.append('file', this.file , this.file.name)
          }

          formData.append('pronouns', this.pronounsSelected)
          formData.append('name', this.name)

          axios.post( '/authors/add', formData )
            .then( res => {
                this.$refs.notification.showSuccess({ title: 'Success', message: 'Successfully added new author.' });
                // TODO Trigger update of data
            }).catch( err => {
                this.$refs.notification.showFailure({ title: 'Success', message: err });
            });
      },
      addTag( newTag, field ) {
          this[`${field}Copy`].push(newTag);
          this[`${field}Selected`].push(newTag);
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
          this.file = file
        }
      },
  },
  watch: {
      pronouns() {
          this.pronounsCopy = this.pronouns;
      },
  },
  data: () => ({
      nameRules: [
        v => !!v || 'Name is required',
        v => /^[a-zA-Z\s]+$/.test(v) || 'Name can only have letters'
      ],
      pronounsSelected: [],
      pronounsCopy: [],
      name: "",
	  file: null,
      image: "",
  }),
}
</script>
<style scoped>
  .login-container {
      border: 3px solid #971111;
      background-color: #DDD;
      padding-top: 85px;
      width: 100%;
      height: 100%;
  }
  .section-header > h1 {
      font-size: 3em;
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
