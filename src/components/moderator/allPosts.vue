<template>
  <div class="indigo lighten-2 white--text text-xs-center login-container" >
    <div class="section-header">
      <h1> Posts </h1>
    </div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 v-for="( post, i ) in posts" :key="i" class="bottom-margin">
            <blog-post
              @notifySuccess="notifySuccess"
              @notifyFailure="notifyFailure"
              :id="post._id"
              :title="post.title"
              :author="post.author"
              :body="post.body"
              :tags="post.tags"
              :files="post.files"
              :video="post.video"
              :forDisplay="true"
              :moderator="true"
              :allTags="tags"
              :authors="authors"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BlogPost from '../common/blogPost.vue'
export default {
  name: 'AllPosts',
  props: ['posts', 'tags', 'authors' ],
  components: {
      'blog-post': BlogPost,
  },
  methods: {
      notifySuccess(args) {
          this.$emit('notifySuccess', args );
      },
      notifyFailure(args) {
          this.$emit('notifyFailure', args );
      },
  },
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
      font-size: 8vh;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  .bottom-margin {
      margin-bottom: 3%;
  }
</style>
