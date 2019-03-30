import App from './App.vue';
import User from './view/User.vue';
import Page from './view/Page.vue';
import firebase from 'firebase'


export default[
  {
    path : '/',
    name: "Home",
    component: Page,
    meta :{
      requiredGuest: true
    }
  },
  {
    path : '/User',
    name: "User",
    component: User,
    meta :{
      requiredAuth: true
    }
  },
]
