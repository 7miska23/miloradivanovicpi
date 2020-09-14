<template>
<!-- eslint-disable -->
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" to='/'>Train.me</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
     <ul class="navbar-nav mr-auto">
        <router-link v-if="authenticated" class="nav-link" to="/home">Workout<span class="sr-only">(current)</span></router-link>
    </ul>
      <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/login">Login</router-link>
        <span v-if="authenticated">
          {{ userEmail }}
          <a @click.prevent="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>
        </span>
      <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/signup">Signup</router-link>
</nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import firebase from 'firebase'
export default {
  data () {
    return {
    store
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  },
  mounted() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userEmail = user.email;
        self.authenticated = true;
        if (self.$route.name !== 'Pocetna')
          self.$router.push({name: 'Pocetna'})
      }
      else {
        self.authenticated = false
        if (self.$route.name !== 'login')
          self.$router.push({name: 'Login'})
      }
    });
  }
}
</script>
<style>
  nav {
    margin-bottom:20px;
    color: white;
    
  }

</style>

