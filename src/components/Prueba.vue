<template lang="pug">
  .cardBox
    .card
      .card-front
        h2 Rellenar </br> Formulario


      .card-back
        <div class="card-body">
          <h2 class="card-title text-center">Sign In</h2>
          <form class="form-signin">

            <div class="form-label-group">
              <input type="id" id="inputID" class="form-control" placeholder="Cedula" v-model="id">
            </div>

            <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required v-model="password">
            </div>

            button(class="btn btn-lg btn-primary btn-block text-uppercase" type="submit", @click="login") Sign in
          </form>
        </div>


</template>

<script>
import Firebase from 'firebase'

export default {
  name:'Prueba'
}
</script>

<style lang="css">
@import "../scss/card.css";
</style>
