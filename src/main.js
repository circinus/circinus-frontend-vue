import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

require('./store/subscriber');


import interceptorsSetup from './helpers/interceptors'
interceptorsSetup();

Vue.config.productionTip = false
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
});
