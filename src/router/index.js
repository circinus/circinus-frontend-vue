import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import SignIn from '../views/Signin'
import Dashboard from '../views/Dashboard'

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
      path: '/signin',
      name: 'signin',
      component: SignIn
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