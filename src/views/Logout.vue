<template>
  <div class="container"></div>
</template>

<script>
import { mapActions } from 'vuex';
import AuthService from '@/services/AuthService';

export default {
  name: 'Logout',

  created() {
    this.logout();
  },

  methods: {
    ...mapActions('auth', ['setAuth']),

    logout() {
      AuthService.clearCridentials();
      this.setAuth(null);
      this.$router.push('/');
    },
  },
};
</script>
