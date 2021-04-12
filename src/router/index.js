import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About";
import Other from "../views/Other";
import AboutSonA from '../views/about/aboutSonA'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '/SonA',
        component: AboutSonA,
        meta: {
          keepAlive: true,
        }
      }
    ],
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '/other',
    name: 'Other',
    component: Other,
    meta: {
      keepAlive: false,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router