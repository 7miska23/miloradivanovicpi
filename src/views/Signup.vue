<template>
<div>
  <div class="row">
    <div class="col">
      <h1 class="text-center mb-5">Sign up</h1>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="emailField">Email address</label>
          <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="passwordField">Password</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="confirmPasswordField">Confirm Password</label>
          <input v-model="password2" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
        </div>
        <button type="submit" class="btn btn-primary mt-5">Signup</button>
      </form>
    </div>
    <div class="col"></div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password) 
    }
  }
}
</script>