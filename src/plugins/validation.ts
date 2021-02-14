import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { confirmed, email, max, min, regex, required } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', required);
extend('min', min);
extend('max', max);
extend('regex', regex);
extend('confirmed', confirmed);
extend('email', email);
