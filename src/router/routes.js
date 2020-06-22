import Home from '../views/Home.vue';

export default [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  meta: {
    requireLogin: true,
  },
},
{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
},
{
  path: '/logout',
  name: 'Logout',
  component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue'),
},
];
