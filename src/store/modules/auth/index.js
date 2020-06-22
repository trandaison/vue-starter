export default {
  namespaced: true,

  state: {
    auth: null,
    redirectPath: '/',
  },

  getters: {
    isLoggedIn(state) {
      return !!state.auth;
    },
    redirectPath(state) {
      return state.redirectPath || '/';
    },
  },

  actions: {
    setAuth({ commit }, auth) {
      commit('setAuth', auth instanceof Object ? { ...auth } : null);
    },
    setRedirectPath({ commit }, path = '/') {
      commit('setRedirectPath', path);
    },
  },

  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
    setRedirectPath(state, path) {
      state.redirectPath = path;
    },
  },
};
