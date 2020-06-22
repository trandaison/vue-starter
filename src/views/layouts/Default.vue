<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Secret Page</router-link> |
      <router-link v-if="isLoggedIn" to="/logout">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div>
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
};
</script>
