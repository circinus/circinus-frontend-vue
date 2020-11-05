import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'

import Home from '../views/Home'
import Register from '../views/Register'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {
          middleware: [
              auth
          ]
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
      path: '/hotel',
      name: 'hotel',
        meta: {
            middleware: [
                auth
            ]
        },
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
        meta: {
            middleware: [
                auth
            ]
        }
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }


    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

export default router;