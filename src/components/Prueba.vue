<template lang="pug">
  .cardBox
    .card
      .card-front
        <login></login>

      .card-back
        h2 Rellenar </br> Formulario

</template>

<script>
import Firebase from 'firebase'
import Login from './Login'

export default {
  name:'Prueba',
  components: {
    Login
  }
}
</script>

<style lang="css">
@import "../scss/card.css";
</style>
