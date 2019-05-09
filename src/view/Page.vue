<template lang="pug">
  .container

    nav(class="navbar navbar-expand-lg navbar-light")
      a(class="navbar-brand" href="/") PDFS
      button(class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation")
        span(class="navbar-toggler-icon")
      div(class="collapse navbar-collapse" id="navbarText")
        ul(class="navbar-nav mr-auto")
          li(class="nav-item")
            a(class="nav-link" href="/") Entidades
          li(class="nav-item")
            a(class="nav-link" href="#contact" @click.prevent="contacto = !contacto") Contacto
          li(class="nav-item")
            a(class="nav-link" href="/" @click.prevent="exp = !exp") Ingresar

    br
    br
    br
    br
    transition(name="fade")
      .container(v-if="!exp && !contacto")
        h1 BIENVENIDO </br> Esta pagina esta creada </br> con el proposito de ver sus PDFs </br> en su EPS de confianza.

    transition(name="fade")
      .container(v-if="exp")
        <div class="row">
          .col-md-3
          <div class="col-md-6 align-self-center">
            prueba
          </div>
        </div>
    br
    transition(name="fade")
      .container(v-if="contacto")
        .footer.bg-dark
              br
              //-tabla con nombres, Universidad y correo de los creadores
              //-contatos
              div.col-xl
                table(class="table table-text-center",id="contact")
                  thead
                    tr
                      th Nombre
                      th Universidad
                      th Email
                  tbody
                    tr(style="color:#FFF")
                      td Juan
                      td EAN
                      td
                        a(href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDnGMFTkspSdkxhkjlQwcLzSXBfRHFZTfHMMfQjXtZNrdjQtWqvhWnSwPtHZTSrMwQWpbwV" target="_blank") <i class="fas fa-envelope"></i> jcruzmi08064
                    tr(style="color:#FFF")
                      td
                      td
                      td


</template>

<script>

import Prueba from '../components/Prueba'

export default {
  name:'Page',
  data() {
    return {
      exp : false,
      contacto : false
    }
  },
  created(){
    this.$cookie.set('test', 'Hello world!', 1);
  },
  methods: {

  },
  components: {
    Prueba
  }
}
</script>

<style lang="css">
@import "../scss/css.css";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
