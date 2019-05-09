// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import router from './routers'
import VueCookies from 'vue-cookies'


var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

// Firebase

import VueFire from 'vuefire';

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
        el: '#app',
        router,
        render: h => h(App),
    });
  }
});
