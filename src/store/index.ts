import Vue from 'vue';
import Vuex from 'vuex';

import notifications from './modules/notifications/notifications';
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
        notifications,
        permissions
    }
});
