
import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/plugins/fontawesome';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import i18n from '@/plugins/i18n';

import interceptorsSetup from '@/helpers/interceptor';

import iziToast from './helpers/toaster';

import moment from 'moment';
import VueMoment from 'vue-moment';

import '@/plugins/validation';

require('./store/modules/user/subscriber');
interceptorsSetup();
Vue.use(iziToast);
Vue.use(VueMoment, { moment });

Vue.config.productionTip = false;

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        router,
        i18n,
        store,
        render: h => h(App)
    }).$mount('#app');
});
