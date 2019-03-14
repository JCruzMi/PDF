<template lang="pug">
  <div id="app">
    navbar
    br
    <router-view></router-view>

  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Prueba from './components/Prueba'
import Register from './components/Register'
import Page from './view/Page'

import {db, websiteRef} from './config'


export default {
  name: 'App',
  components: {
    Navbar,
    Prueba,
    Register,
    Page,
  },
  firebase: {
    website: websiteRef
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
