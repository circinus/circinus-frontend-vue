require('./store/modules/user/subscriber');

import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/fontawesome'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import i18n from '@/plugins/i18n'

import interceptorsSetup from '@/helpers/interceptor'
interceptorsSetup();

import iziToast from './helpers/toaster'
Vue.use(iziToast);

import moment from 'moment';
import VueMoment from 'vue-moment';
Vue.use(VueMoment, { moment });

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
import { ValidationObserver } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

import ComponentLoader from '@/components/ComponentLoader'
Vue.component('load-component', ComponentLoader)

import DropdownMenu from '@innologica/vue-dropdown-menu'
Vue.component('dropdown-menu', DropdownMenu)

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount('#app')
});
