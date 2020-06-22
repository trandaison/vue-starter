import Vue from 'vue';
import Vuex from 'vuex';

import AuthService from '@/services/AuthService';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    appInit({ dispatch }) {
      const cridentials = AuthService.cridentials();
      if (cridentials) {
        dispatch('auth/setAuth', cridentials);
      }
    },
  },
  modules: {
    auth,
  },
  strict: process.env.NODE_ENV !== 'production',
});

store.dispatch('appInit');

export default store;
