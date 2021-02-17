import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/users/auth';
import client from './modules/client/client';
import loader from './modules/loader';

import notifications from './modules/notifications/notifications';
import register from './modules/users/register';
import permissions from './modules/permissions/permissions';

Vue.use(Vuex);

export type IRootState = unknown;

export default new Vuex.Store<IRootState>({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        notifications,
        register,
        client,
        loader,
        permissions
    }
});
