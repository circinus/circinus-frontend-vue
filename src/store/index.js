import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/user/auth';
import notifications from './modules/notifications';
import articles from './modules/home/articles';
import photos from './modules/home/photos';
import register from './modules/user/register';

Vue.use(Vuex)

export default new Vuex.Store({
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
      register
  }
})
