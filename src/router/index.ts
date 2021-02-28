import Vue from 'vue';
import Router, { NavigationGuardNext, Route } from 'vue-router';

import guest from './middleware/guest';
import auth from './middleware/auth';
import middlewarePipeline from './middleware/middlewarePipeline';

// Commmunity
import { IContext } from '@/router/IContext';
import { clientModule } from '@/store/modules/client/ClientModule';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
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
            component: () => import('@/views/Auth/Register.vue'),
            meta: {
                middleware: [
                    guest
                ]
            }
        },
        {
            path: '/community',
            name: 'community',
            component: () => require('@/views/Community/Home.vue'),
            meta: {
                middleware: [
                    auth
                ]
            }
        },
        {
            path: '/community/staff',
            name: 'communityStaff',
            component: () => import('@/views/Community/Staff.vue')
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
                if (!clientModule.loaded) {
                    clientModule.setClient(true);
                }
                next();
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/Home.vue'),
            meta: {
                middleware: [
                    auth
                ]
            }
        },
        {
            path: '/settings',
            component: () => import('@/views/Me/Settings.vue'),
            meta: {
                middleware: [
                    auth
                ]
            },
            children: [
                {
                    name: 'settings',
                    path: '',
                    component: () => import('@/views/Me/Settings/Account.vue'),
                    meta: {
                        middleware: [
                            auth
                        ]
                    }
                },
                {
                    path: 'security',
                    name: 'security-settings',
                    component: () => import('@/views/Me/Settings/Security.vue'),
                    meta: {
                        middleware: [
                            auth
                        ]
                    }
                }
            ]
        },
        {
            path: '/articles/:id/:slug',
            name: 'article',
            component: () => import('@/views/Community/Article.vue')
        }
    ]
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
    if (!to.meta.middleware) {
        let documentTitle = `${process.env.VUE_APP_TITLE} - ${to.name}`;
        if (to.params.title) {
            documentTitle += ` - ${to.params.title}`;
        }
        document.title = documentTitle;
        return next();
    }
    const middleware = to.meta.middleware;

    const context: IContext = {
        to,
        from,
        next
    };

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    });
});

export default router;
