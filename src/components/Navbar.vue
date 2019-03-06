<template lang="pug">
    ul
      li
        a(href="/")  Login
      li
        a(href="/") Entidades
      li
        a(href="/") Acerca de


</template>

<script>
import Prueba from '../components/Prueba'

export default {
  name: 'Navbar',
  methods: {
    flip: function() {
      $('.card').toggleClass('flipped');
    }
  }
}
</script>

<style lang="css">
  @import "../scss/css.css";
</style>
