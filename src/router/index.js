import Vue from 'vue'
import Router from 'vue-router'

import Base from '@/components/Base'
import Login from '@/components/Login'
import Moderator from '@/components/Moderator'

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
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: Base,
    },
  ]
})
