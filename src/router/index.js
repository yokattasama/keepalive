import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About";
import Other from "../views/Other";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // meta: {
    //   keepalive: false,
    // }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // meta: {
    //   keepalive: true,
    // }
  },
  {
    path: '/other',
    name: 'Other',
    component: Other,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router