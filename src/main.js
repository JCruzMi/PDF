// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'


// Firebase

import VueFire from 'vuefire';

Vue.config.productionTip = false

Vue.use(VueFire);

/* eslint-disable no-new */
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Routes from './routers'

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
