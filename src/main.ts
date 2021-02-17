
import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/plugins/fontawesome';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import i18n from '@/plugins/i18n';

import interceptorsSetup from '@/helpers/interceptor';

import iziToast from './helpers/toaster';

import moment from 'moment';
import VueMoment from 'vue-moment';

import '@/plugins/validation';
import { authModule } from '@/store/modules/auth/AuthModule';

interceptorsSetup();
Vue.use(iziToast);
Vue.use(VueMoment, { moment });

Vue.config.productionTip = false;
Vue.config.productionTip = false;

authModule.attempt(localStorage.getItem('token')).then(() => {
    new Vue({
        router,
        i18n,
        render: h => h(App)
    }).$mount('#app');
});
