<template lang="pug">
  <div id="app">
    <navbar></navbar>
  .div
    <prueba></prueba>

  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Prueba from './components/Prueba'

import Firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFj-lg982o-NThEglGlQkSRrQQSxfXBTk",
    authDomain: "vuefire-4e280.firebaseapp.com",
    databaseURL: "https://vuefire-4e280.firebaseio.com",
    projectId: "vuefire-4e280",
    storageBucket: "",
    messagingSenderId: "782260865313"
  };

let app = Firebase.initializeApp(config);
let db = app.database();

let linksRef = db.ref('links')

export default {
  name: 'App',
  firebase: {
    links: linksRef
  },
  components: {
    Navbar,
    Prueba
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
