<template lang="pug">
  div
    .card
      .card-back
        .card-body
          h2(class="card-title text-center") Sign In
          <form class="form-signin" @submit.prevent="login">
            <div class="form-label-group">
              <input type="email" class="form-control" placeholder="Correo" v-model="loginUser.correo" required>
            </div>
            <div class="form-label-group" style="padding-top: 10px;">
              <input type="password" class="form-control" placeholder="Contraseña/Cedula" required v-model="loginUser.id">
            </div>

            button(class="btn btn-lg btn-primary btn-block text-uppercase" type="submit") Sign in
          </form>


</template>

<script>
import firebase from 'firebase'
import {db, websiteRef} from '../config'

export default {
  name:'Prueba',
  data: function() {
    return {
      loginUser: {
        id: '',
        correo: ''
      },
      usu : ""
    }
  },
  methods: {
  /*
  * funcion que me autentifica el inicio de usuario con la base de datos
  * manda a una ruta segura
  */
    login(){
        firebase.auth().signInWithEmailAndPassword(this.loginUser.correo, this.loginUser.id).then((user) => {
          this.$router.go({path: this.$router.path})
          alert('Usuario iniciado')
        }).catch((err) => {
          alert(err.message)
          alert("Parece que el usuario o la contraseña estan mal")
        })
    },
    /*
    * funcion x.....
    */
    busca(){
      for(i in website){
        if(i.correo = this.loginUser.correo){
          usu = i.nombre + i.apellido
        }
      }
    }
  }
}
</script>

<style lang="css">
@import "../scss/card.css";
</style>
