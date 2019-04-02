import Vue from 'vue';
import App from './App.vue';
import User from './view/User.vue';
import Page from './view/Page.vue';
import firebase from 'firebase';
import Router from 'vue-router';
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path : '/',
      component: Page,
      meta: {
        requiresGuest: true
      }
    },
    {
      path : '/User',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {path: '*', redirect: '/'}
  ]
});

router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      // mandar a Home
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      // mandar a Home
      next({
        path: '/User',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }

})

export default router;
