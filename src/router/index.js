import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Details from '../views/Details.vue'
 import helper from '@/assets/helper.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/details',
    name: 'details',
    component: Details,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !helper.isAuthenticated()) {
    next({ name: "login" })
  } else {
    next();
  }
})


export default router
