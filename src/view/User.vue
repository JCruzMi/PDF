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
            a(class="nav-link" href="/" @click.prevent="pdfs = !pdfs") Subir Pdf
          li(v-if="isLoggedIn" class="nav-item")
            a(class="nav-link" href="/" @click.prevent="showUsers = !showUsers") Mostrar usuarios
          li(v-if="!isLoggedIn" class="nav-item")
            a(class="nav-link" href="/" @click.prevent="showUsers = !showUsers") Info
          li(v-if="isLoggedIn" class="nav-item")
            a(class="nav-link" href="/" @click.prevent="newRegister = !newRegister") Nuevo Usuario
          li(class="nav-item")
            a(class="nav-link" href="/" @click="logout") Desconectar


    //Ver usuarios
    //Permite al admin visualizar todos los USUARIOS

    //Que el admin no aparezca

    .container(v-if="isLoggedIn && showUsers")
      br
      div(col-xl)
        input(v-model="search" placeholder="Buscar Usuario").text-center
        table(id="ue" class="table" style="width: 100%").table-hover
          thead
            tr
              th(scope="col") USUARIOS
              th(scope="col") CORREOS
              th(scope="col") CEDULA
          tbody
            tr(v-for="usuario in listUser" v-if="search.toUpperCase() == usuario.nombre.toUpperCase() || search.toUpperCase() == usuario.apellido.toUpperCase() || search == usuario.id")
              th(scope="col") {{usuario.nombre.toUpperCase()}} {{usuario.apellido.toUpperCase()}}
              th(scope="col") {{usuario.correo.toUpperCase()}}
              th(scope="col") {{usuario.id}}
            tr(v-for="usuario in listUser" v-if="!search")
              th(scope="col") {{usuario.nombre.toUpperCase()}} {{usuario.apellido.toUpperCase()}}
              th(scope="col") {{usuario.correo}}
              th(scope="col") {{usuario.id}}


    //Formulario para registrar usuarios
    //Permite el registro de un nuevo usuario
    //Falta implementar que al cedula sea unica

    .container(v-if="isLoggedIn && newRegister")
      register

    //Formulario para subir pdfs
    //Permite subir pdfs a firebase
    //Guarda cc y link para descargar el pdf en una tabla nueva
    //Validar el campo cc exista
    //Validar que el cc no tenga el mismo pdf

    .container(v-if="isLoggedIn && pdfs")
      div(col-xl)
        submitpdf

    //Ver mis pdfs Usuario normal
    //Busca en la base de datos todos los usuarios y me trae el correspondiente
    //registrado

    //Info

    .container(v-if="!isLoggedIn && showUsers")
      br
      tr(v-for="usuario in listUser")
        p Nombres: {{usuario.nombre}} {{usuario.apellido}}
        p Cedula: {{usuario.id}}
        p Estos son sus datos

    //examenes
    //muestra los pdfs a descargar de los USUARIOS

    .container(v-if="!isLoggedIn && pdfs")
      div(col-xl v-for="u in listUser")
        table(id="ue" class="table" style="width: 100%").table-hover
          thead
            tr
              th(scope="col") Fecha toma examen
              th(scope="col") Nombre del examen
              th(scope="col") PDF
            tr(v-for="pdfs in listPdfs")
              td(scope="col") {{pdfs.fecha}}
              td(scope="col") {{pdfs.name}}
              td(scope="col")
                a(v-bind:href="pdfs.downloadUrl" target="_blank") Descargar


</template>

<script>
import {db, websiteRef, linkspdfs} from '../config'
import Register from '../components/Register'
import Submitpdf from '../components/Submitpdf'
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
      currentUser : false,
      listUser : {},
      listPdfs : {},
      search : ''
    }
  },
  /*
  * created es una funcion de vue que se ejecuta antes de todo
  * funcion que auentifica si un usuario esta creado
  * y si es admind
  * trae todos los elementos para el admind, obviamente si esta logueado
  */
  async created(){
    try{

      this.$cookie.set('name', 'value', 1)

      if(firebase.auth().currentUser.email == "juan@gmail.com"){
        this.isLoggedIn = true;

          this.uno()

        }

      if(firebase.auth().currentUser){
        this.currentUser = firebase.auth().currentUser.email;

        const us = await firebase.auth().currentUser.email
        const ref2 = await db.child('usuarios').orderByChild('correo').equalTo(us)

        await ref2.on('value', snap => {
            this.listUser = snap.val()
            console.log(this.listUser)
          })

        this.tres()

      }
    }catch (error) {
      console.error(error);
    }
  },
  methods: {
    /*
    * funcion para desloguear a un usuario autentificado
    */
    logout: function(){
    firebase.auth().signOut().then(() => {
      this.$router.push('/');
      });
    },
    uno: function(){

      const ref1 = db.child('usuarios')

      ref1.on('value', snap => {
        this.listUser = snap.val()
      })

    },
    async tres(){
      const refpdfs = await db.child('linkspdfs').orderByChild('cc').equalTo(Object.values(this.listUser)[0].id)

      refpdfs.on('value', snap => {
        this.listPdfs = snap.val()
        console.log(this.listPdfs)
      })
    }
  },
  components: {
    Register,
    Submitpdf
    },
  firebase: {
    links: linkspdfs
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
  background-color: #396aa6;
  margin-top: 60px;
}



.col-center{
  float: none;
  margin-left: auto;
  margin-right: auto;
}
</style>
