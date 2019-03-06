<template lang="pug">
  div.cardBox
    .card
      .card-front
        h2 Registro de usuario


      .card-back
        <div class="card-body">
          <h2 class="card-title text-center">Register CC</h2>
          <form class="form-signin">

            <div class="form-label-group">
              <input type="id" id="inputID" class="form-control" placeholder="Cedula" v-model="newWebsite.id">
            </div>
            <div class="form-label-group" style="padding-top: 10px;">
              <input type="text" id="inputNombre" class="form-control" placeholder="Nombre" v-model="newWebsite.nombre">
            </div>
            <div class="form-label-group" style="padding: 10px 0;">
              <input type="text" id="inputApellifo" class="form-control" placeholder="Apellido" v-model="nnewWebsite.apellido">
            </div>

            button(class="btn btn-lg btn-primary btn-block text-uppercase" type="submit", @click="login") Add
          </form>
        </div>


</template>

<script>
import Firebase from 'firebase'

export default {
  name:'RegisterP'
}
</script>

<style lang="css">
@import "../scss/card.css";
</style>
