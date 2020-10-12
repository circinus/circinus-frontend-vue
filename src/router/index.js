import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'
import Client from '../views/Client'

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
      path: '/client',
      name: 'client',
      component: Client
  },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
          if(!store.getters['auth/authenticated']) {
              return next({
                  name: 'signin'
              })
          }
          next()
      }
    }
  ]
});

export default router;