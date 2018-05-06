import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/Base'
import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base
    }
  ]
})
