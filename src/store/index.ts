import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/user/auth';
import votes from './modules/user/votes';
import client from './modules/client/client';
import loader from './modules/loader';

import notifications from './modules/notifications/notifications';
import articles from './modules/home/articles';
import photos from './modules/home/photos';
import register from './modules/user/register';
import permissions from './modules/user/permissions';

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
      articles,
      photos,
      register,
      client,
      votes,
      loader,
      permissions
  }
})
