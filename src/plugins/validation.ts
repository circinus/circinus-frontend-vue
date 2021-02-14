import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { min, required } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', required);
extend('min', min);
