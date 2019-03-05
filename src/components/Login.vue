<template lang="pug">


    <div class="row">
      <div class="col-sm-9">
        <div class="card card-signin">
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
        </div>
        </div>
      </div>

</template>
<script>
import Firebase from 'firebase';

  export default {
    name: 'Login',
  data: function() {
    return {
      id: '',
      password: ''
    };
  }
}
</script>

<style lang="css">
  @import "../scss/login.css";
</style>
