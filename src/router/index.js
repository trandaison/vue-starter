import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import authenticate from './middlewares/authenticate';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(authenticate);

export default router;
