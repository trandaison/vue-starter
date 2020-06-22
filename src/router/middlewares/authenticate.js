import store from '@/store';
import AuthService from '@/services/AuthService';

export default (to, from, next) => {
  const isLoginRequired = to.matched.some((route) => route.meta.requireLogin);
  if (!isLoginRequired) return next();
  if (AuthService.isLoggedIn()) return next();

  store.dispatch('auth/setRedirectPath', to.path);
  return next({ name: 'Login' });
};
