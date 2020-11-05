import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Register from '../views/Register'

import store from '../store'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/hotel',
      name: 'hotel',
      beforeEnter: (to, from, next) => {
          if(!store.getters['client/loaded']) {
              store.dispatch('client/setstate', true)
          }
          next()
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Home,
      beforeEnter: (to, from, next) => {
          if(!store.getters['auth/authenticated']) {
              return next({
                  name: 'register'
              })
          }
          next()
      }
    }
  ]
});

export default router;