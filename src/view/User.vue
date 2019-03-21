<template lang="pug">
  .container
    div(class="col")
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

      div(v-if="true")
        register

      div(v-if="true")
        prueba
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
import Prueba from '../components/Prueba'



export default {
  name: 'User',
  components: {
    Register,
    Prueba
  },
  firebase: {
    website: websiteRef
  }
}
</script>

<style>
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
