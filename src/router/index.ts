import Vue from 'vue';
import Router, { NavigationGuardNext, Route } from 'vue-router';

import guest from './middleware/guest';
import auth from './middleware/auth';
import middlewarePipeline from './middleware/middlewarePipeline';

// Commmunity
import { IContext } from '@/router/IContext';
import Community from '@/views/Community/Home.vue';
import CommunityStaff from '@/views/Community/Staff.vue';
import Home from '@/views/Home.vue';
import Register from '@/views/Auth/Register.vue';
import Article from '@/views/Community/Article.vue';
import { clientModule } from '@/store/modules/client/ClientModule';

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
            path: '/community',
            name: 'community',
            component: Community,
            children: [
                { path: 'staff', name: 'communityStaff', component: CommunityStaff }
            ]
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
            component: Home,
            meta: {
                middleware: [
                    auth
                ]
            }
        },
        {
            path: '/articles/:id/:slug',
            name: 'article',
            component: Article
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
