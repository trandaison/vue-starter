<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <form @submit.prevent="postLogin">
      <label for="email">
        <input id="email" type="email" value="test@test.xyz">
      </label>
      <label for="password">
        <input id="password" type="password" value="test">
      </label>
      <button type="submit">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AuthService from '@/services/AuthService';

export default {
  name: 'Login',

  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'redirectPath']),
  },

  created() {
    if (this.isLoggedIn) {
      this.$router.push(this.redirectPath);
    }
  },

  methods: {
    ...mapActions('auth', ['setAuth', 'setRedirectPath']),

    postLogin() {
      AuthService.doLogin().then((auth) => {
        this.setAuth(auth);
        AuthService.storeCridentials(auth);
        this.$router.push(this.redirectPath);
      });
    },
  },

  destroyed() {
    this.setRedirectPath('/');
  },
};
</script>
