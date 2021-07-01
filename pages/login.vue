<template>
  <div
    class="
      text-center
      py-4
      d-flex
      align-items-center
      justify-content-center
      h-100vh
    "
  >
    <form class="form-signin" @submit.prevent.stop="doLogin">
      <div class="display-4 brand-gradient mb-4">Nuxt Stater</div>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        id="inputEmail"
        v-model="email"
        type="email"
        class="form-control"
        placeholder="Email address (any value)"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        id="inputPassword"
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required=""
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        class="btn btn-lg btn-dark btn-block"
        type="submit"
        :disabled="isLoading"
      >
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">© 2021</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ name: 'Login', auth: 'guest', middleware: 'auth' })
export default class Login extends Vue {
  private email: string = 'user@gmail.vn';
  private password: string = '!@#$%^&*()';
  private isLoading: boolean = false;
  private errorMsg: string = '';

  doLogin() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.errorMsg = '';
    this.$nuxt.$loading.start();
    this.$auth
      .loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
        },
      })
      .then(() => this.$router.push('/'))
      .catch((error) => {
        this.isLoading = false;
        this.errorMsg = error.message;
      });
  }
}
</script>

<style lang="scss" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.h-100vh {
  height: 100vh;
}
</style>
