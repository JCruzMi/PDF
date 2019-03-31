<template lang="pug">
  .container
    nav(class="navbar navbar-expand-lg navbar-light")
      a(class="navbar-brand" href="/") BIENVENIDO </br> {{currentUser}}
      button(class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation")
        span(class="navbar-toggler-icon")
      div(class="collapse navbar-collapse" id="navbarText")
        ul(class="navbar-nav mr-auto")
          li(v-if="!isLoggedIn" class="nav-item")
            a(class="nav-link" href="/") Eps
          li(v-if="!isLoggedIn" class="nav-item")
            a(class="nav-link" href="/" @click.prevent="pdfs = !pdfs") Mostrar mis pdfs
          li(v-if="isLoggedIn" class="nav-item")
            a(class="nav-link" href="/" @click.prevent="showUsers = !showUsers") Mostrar usuarios
          li(v-if="isLoggedIn" class="nav-item")
            a(class="nav-link" href="/" @click.prevent="newRegister = !newRegister") Nuevo Usuario
          li(class="nav-item")
            a(class="nav-link" href="/" @click="logout") Desconectar


    //Ver usuarios
    .container(v-if="showUsers")
      div.col-xl
        table(id="ue" class="table table-bordered" style="width: 100%")
          thead
            tr
              th(scope="col") Usuarios
              th(scope="col") Correos
              th(scope="col") Cedula
          tbody
            tr(v-for="usuario in website")
              th(scope="col") {{usuario.nombre}} {{usuario.apellido}}
              th(scope="col") {{usuario.correo}}
              th(scope="col") {{usuario.id}}

      //Formulario para registrar usuarios
    .container(v-if="newRegister")
      div(v-if="true")
        register

    //

    div(v-if="false")
      h1 Usuarios
      tr(v-for="usuario in website")
        p Nombres: {{usuario.nombre}}
        p Apellidos: {{usuario.apellido}}
        p Cedula: {{usuario.id}}
        .row
          <div class="col">
            table(id="ue" class="table table-bordered" style="width: 100%")
              thead
                tr
                  th(scope="col") Fecha toma examen
                  th(scope="col") Nombre del examen
                  th(scope="col") PDF
                tr
                  td(scope="col") Fecha
                  td(scope="col") {{usuario}}
                  td(scope="col") Descargar
          </div>


</template>

<script>
import {db, websiteRef} from '../config'
import Register from '../components/Register'
import firebase from 'firebase'


export default {
  name: 'User',
  data() {
    return {
      pdfs : false,
      contacto : false,
      showUsers : false,
      newRegister : false,
      isLoggedIn : false,
      currentUser : false
    }
  },
  created(){
    if(firebase.auth().currentUser){
      this.currentUser = firebase.auth().currentUser.email;
    }
    if(firebase.auth().currentUser.email == "juan@gmail.com"){
      this.isLoggedIn = true;
    }
  },
  methods: {
    logout: function(){
    firebase.auth().signOut().then(() => {
      this.$router.go({path: this.$router.path})
      });
    }
  },
  components: {
    Register
    },
  firebase: {
    website: websiteRef
  }
}
</script>

<style lang="css">
@import "../scss/css.css";

#ue {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-color: #000;
  background-color: #fff;
  margin-top: 60px;
}

</style>
