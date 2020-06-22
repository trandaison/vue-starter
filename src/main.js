import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const IS_ENABLE_DEBUGGING = ['production', 'staging'].every(
  (env) => env !== process.env.NODE_ENV,
);
Vue.config.devtools = IS_ENABLE_DEBUGGING;
Vue.config.silent = !IS_ENABLE_DEBUGGING;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
