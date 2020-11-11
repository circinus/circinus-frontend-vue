import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

require('./store/modules/user/subscriber');

import iziToast from './helpers/toaster'
Vue.use(iziToast);

import interceptorsSetup from './helpers/interceptors'
interceptorsSetup();

import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
import { ValidationObserver } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false;

import i18n from './helpers/locale'

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        router,
        i18n,
        store,
        render: h => h(App)
    }).$mount('#app')
});


