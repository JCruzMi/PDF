<template lang="pug">
  .container
    .card
      .card-back
        .card-body
          <h2 class="card-title text-center">FORMULARIO DE REGISTRO DE USUARIOS</h2>
          <form class="form-signin" @submit.prevent="addSubmit" >
            <div class="form-label-group">
              <input type="number" id="inputID" class="form-control" placeholder="Cedula" v-model="newWebsite.id" required>
            </div>
            <div class="form-label-group" style="padding-top: 10px;">
              <input type="text" id="inputNombre" class="form-control" placeholder="Nombre" v-model="newWebsite.nombre" required>
            </div>
            <div class="form-label-group" style="padding: 10px 0;">
              <input type="text" id="inputApellifo" class="form-control" placeholder="Apellido" v-model="newWebsite.apellido" required>
            </div>
            <div class="form-label-group" style="padding: 10px 0;">
              <input type="email" id="inputCorreo" class="form-control" placeholder="Correo" v-model="newWebsite.correo" required>
            </div>
            button(class="btn btn-lg btn-primary btn-block text-uppercase" type="submit") Add
          </form>

</template>

<script>

import {db, websiteRef} from '../config'
import firebase from 'firebase'


export default {
  name:'Register',
  firebase: {
    website: websiteRef
  },
  data() {
    return {
      newWebsite: {
        id: '',
        nombre: '',
        apellido: '',
        correo: ''
      }
    }
  },
  methods:{
    addSubmit(){
      firebase.auth().createUserWithEmailAndPassword(this.newWebsite.correo.toString(), this.newWebsite.id.toString())
        .then(user => {
          displayName: this.newWebsite.nombre +  this.newWebsite.apellido ;
          websiteRef.push(this.newWebsite);
          this.newWebsite.id = '';
          this.newWebsite.nombre = '';
          this.newWebsite.apellido = '';
          this.newWebsite.correo = '';

      }).catch((err) => {
        alert(err.code);
        alert(err.message)
      })
    }
  }
}
</script>

<style lang="css">
@import "../scss/card.css";
</style>
