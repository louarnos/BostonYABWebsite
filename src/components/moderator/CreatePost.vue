<template>
    <div class="indigo lighten-2 white--text text-xs-center login-container" >
        <div class="section-header">
          <h1> Create New Post </h1>
        </div>
		<v-form
		ref="form"
		lazy-validation>
			<v-container>
				<v-layout row wrap>
					<v-flex xs6 offset-sm3>
						<v-text-field
						  v-model="title"
                          class="form-field-container"
						  label="Title"
                          solo>
						</v-text-field>
					</v-flex>
					<v-flex xs6 offset-sm3>
                        <div class="form-field-container">
                            <multi-select
                                id="author"
                                v-model="author"
                                :taggable="true"
                                @tag="addTag"
                                :options="authorOptions"
                                placeholder="Author">
                            </multi-select>
                        </div>
					</v-flex>
					<v-flex xs6 offset-sm3>
                        <div class="form-field-container">
                            <multi-select
                                id="tags"
                                v-model="tags"
                                :taggable="true"
                                @tag="addTag"
                                multiple="multiple"
                                :options="tagsOptions"
                                placeholder="Tags">
                            </multi-select>
                        </div>
					</v-flex>
					<v-flex xs6 offset-sm3>
						<v-text-field
							textarea
							rows="15"
							auto-grow
							counter=4000
							v-model="body"
							class="form-field-container"
							label="Body"
							solo
							auto-grow>
						</v-text-field>
					</v-flex>
					<v-flex xs6 offset-sm3>
                        <v-btn
                            :color="'info'"
                            @click="createPost" >
                            Create
                        </v-btn>
					</v-flex>
				</v-layout>
			</v-container>
        </v-form>
   </div>
</template>
<script>

import axios from 'axios';
import Multiselect from 'vue-multiselect'

export default {
  name: 'Moderator',
  components: {
      'multi-select': Multiselect,
  },
  methods: {
      addTag(newTag, field) {
          this[`${field}Options`].push(newTag);
          this[field].push(newTag);
      },
      createPost() {
          console.log('create post');
      }
  },
  data: () => ({
      author: [],
      title: "",
      body: "",
      tags: [],
      tagsOptions: [],
      authorOptions: [],
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
  .section-header{
      font-size: 1.5em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
</style>
