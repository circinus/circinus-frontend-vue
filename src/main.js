import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

require('./store/modules/subscriber');

import iziToast from './helpers/toaster'
Vue.use(iziToast);

import interceptorsSetup from './helpers/interceptors'
interceptorsSetup();

import { configure } from 'vee-validate';

configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
        // ...
    }
})

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
import { ValidationObserver } from 'vee-validate'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
});
