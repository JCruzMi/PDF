<template lang="pug">
  .cardBox
    .card
      .card-front
        h2 Registro de usuario
      .card-back
        .card-body
          <h2 class="card-title text-center">Register CC</h2>
          <form class="form-signin" @submit.prevent="addSubmit" >

            <div class="form-label-group">
              <input type="id" id="inputID" class="form-control" placeholder="Cedula" v-model="newWebsite.id">
            </div>
            <div class="form-label-group" style="padding-top: 10px;">
              <input type="text" id="inputNombre" class="form-control" placeholder="Nombre" v-model="newWebsite.nombre">
            </div>
            <div class="form-label-group" style="padding: 10px 0;">
              <input type="text" id="inputApellifo" class="form-control" placeholder="Apellido" v-model="newWebsite.apellido">
            </div>

            button(class="btn btn-lg btn-primary btn-block text-uppercase" type="submit") Add
          </form>

</template>

<script>

//import Firebase from 'firebase'
import {db, websiteRef} from '../config'

//let websiteRef = config.ref('website')

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
      websiteRef.push(this.newWebsite);
      this.newWebsite.id = '';
      this.newWebsite.nombre = '';
      this.newWebsite.apellido = '';
      this.newWebsite.correo = '';
    }
  }
}
</script>

<style lang="css">
@import "../scss/card.css";
</style>
