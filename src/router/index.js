import Vue from 'vue'
import Router from 'vue-router'

import Base from '@/components/Base'
import Login from '@/components/Login'
import Moderator from '@/components/Moderator'
import createPost from '@/components/moderator/createPost.vue'
import AllPosts from '@/components/moderator/allPosts.vue'
import AllAuthors from '@/components/moderator/allAuthors.vue'
import AddAuthor from '@/components/moderator/addAuthor.vue'

import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'

Vue.use(Router)
Vue.use(Vuetify, {
    theme: {
		primary: "#9FA8DA",
        secondary: "#757575",
        accent: "#7E57C2",
    },
})
Vue.use(VueScrollTo)

export default new Router({
  routes: [
    {
      path: '/moderator',
      component: Moderator,
      children: [
        {
            name: 'create_post',
            path: 'create_post',
            component: createPost
        },
        {
            name: 'all_posts',
            path: 'posts',
            component: AllPosts
        },
        {
            name: 'all_authors',
            path: 'authors',
            component: AllAuthors
        },
        {
            name: 'add_author',
            path: 'add_author',
            component: AddAuthor
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      props: true,
    },
    {
      path: '/',
      component: Base,
    },
  ]
})
