<template lang="pug">
  <div id="app">
    div
      <navbar></navbar>
      <router-view></router-view>
    div
      br
    // <prueba></prueba>

    div
      <Register></register>
    div
      br
      h1 hola
      div
        tr(v-for="usuario in website")
          td {{usuario.nombre}}
          td {{usuario.apellido}}
  </div>

</template>
<script>
import Navbar from './components/Navbar'
import Prueba from './components/Prueba'
import Register from './components/Register'

import {db, websiteRef} from './config'


export default {
  name: 'App',
  firebase: {
    website: websiteRef
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
