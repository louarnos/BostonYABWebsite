// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/icons'
import axios from 'axios'
import Vuetify from 'vuetify'
import CKEditor from '@ckeditor/ckeditor5-vue'
import moment from 'moment'
import VueScrollTo from 'vue-scrollto'

Vue.use( CKEditor )
Vue.use( Vuetify );
Vue.use(VueScrollTo)

Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.component('icon', Icon)

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

axios.defaults.baseURL = 'http://3.91.149.158:3000';
axios.defaults.headers.common['Content-Type'] = 'application/json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
