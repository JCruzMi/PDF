<template lang="pug">
  <div id="app">
    <navbar></navbar>
    <prueba></prueba>
    <register></register>
  </div>

</template>
<script>
import Navbar from './components/Navbar'
import Prueba from './components/Prueba'
import Register from './components/Register'

import Firebase from 'firebase'

// Initialize Firebase
import config from './config'

let app = Firebase.initializeApp(config);
let db = app.database();

let websiteRef = db.ref('website')

export default {
  name: 'App',
  firebase: {
    website: websiteRef
  },
  data() {
    return {
      newWebsite: {
        id: '',
        pdfs: ''
      }
    }
  },
  components: {
    Navbar,
    Prueba,
    Register
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
