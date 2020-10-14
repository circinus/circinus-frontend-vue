import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';
import notifications from './modules/notifications';
import articles from './modules/articles';
import photos from './modules/photos';

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
      photos
  }
})
