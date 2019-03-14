import App from './App.vue';
import User from './view/User.vue';
import Page from './view/Page.vue';


export default[
  {path : '/', component: Page},
  {path : '/User', component: User},
  {path: '*', redirect: '/'}
]
