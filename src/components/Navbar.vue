<template lang="pug">
  div(class="col")
    div(v-if="condicion")
      ul(v-for="i in activitiesall")
        li(v-for="act in i.activities", v-if="i.actividad == 'Init'")
          a(:href="act.link") {{act.title}}
    div(v-else-if="condicion")
      ul(v-for="i in activitiesall")
        li(v-for="act in i.activities", v-if="i.actividad == 'Admin'")
          a(:href="act.link") {{act.title}}
    div(v-else)
      ul(v-for="i in activitiesall")
        li(v-for="act in i.activities", v-if="i.actividad == 'User'")
          a(:href="act.link") {{act.title}}



</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
        activitiesall : [{'actividad':'User',
            activities: [{ 'icon': ' ','title': 'Ver mis PDFS' ,'link': '/User'},
                         {'icon': ' ','title': 'cambiar Contraseña' ,'link': '/User'},
                         {'icon': ' ','title': 'Logout' ,'link': '/'}
                         ]},
                         {'actividad':'Init',
             activities: [{ 'icon': ' ','title': 'Entidades' ,'link': '/'},
                          {'icon': ' ','title': 'Acerca de' ,'link': '/'},
                          {'icon': ' ','title': 'Login' ,'link': '/User'}
                          ]},
                          {'actividad':'Admin',
            activities: [{'icon': ' ','title': 'Ver usuarios' ,'link': '/User'},
                         {'icon': ' ','title': 'Registrar usuario' ,'link': '/'},
                         {'icon': ' ','title': 'Subir PDF' ,'link': '/'},
                         {'icon': ' ','title': 'Logout' ,'link': '/'}
                         ]}],
        condicion:false

    }
  },
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
