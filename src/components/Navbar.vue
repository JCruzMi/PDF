<template lang="pug">
  div(class="col")
    div(v-if="condicion")
      ul(v-for="i in activitiesall")
        li(v-for="act in i.activities", v-if="i.actividad == 'Init'")
          a(href="/") {{act.title}}
    div(v-else-if="condicionn")
      ul(v-for="i in activitiesall")
        li(v-for="act in i.activities", v-if="i.actividad == 'Admin'")
          a(href="/User") {{act.title}}
    div(v-else)
      ul(v-for="i in activitiesall")
        li(v-for="act in i.activities", v-if="i.actividad == 'User'")
          a(href="/") {{act.title}}

</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      condicion:false,
      condicionn: true,
        activitiesall : [{'actividad':'User',
            activities: [{ 'icon': ' ','title': 'Ver mis PDFS' ,'link': '"/User"'},
                         {'icon': ' ','title': 'cambiar Contraseña' ,'link': '"/"'},
                         {'icon': ' ','title': 'Logout' ,'link': '"/User"'}
                         ]},
                         {'actividad':'Init',
             activities: [{ 'icon': ' ','title': 'Entidades' ,'link': '/'},
                          {'icon': ' ','title': 'Acerca de' ,'link': '/'},
                          {'icon': ' ','title': 'Login' ,'link': '/'}
                          ]},
                          {'actividad':'Admin',
            activities: [{'icon': ' ','title': 'Ver usuarios' ,'link': '/user'},
                         {'icon': ' ','title': 'Registrar usuario' ,'link': '/'},
                         {'icon': ' ','title': 'Subir PDF' ,'link': '/'},
                         {'icon': ' ','title': 'Logout' ,'link': '/'}
                         ]}],

    }
  },
  methods: {
    flip: function() {
      $('.card').toggleClass('flipped');
    },
    cambio: function(){
      condicion: !(condicion);
    }
  }
}
</script>

<style lang="css">
  @import "../scss/css.css";
</style>
