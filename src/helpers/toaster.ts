import Vue from 'vue';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.css';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
    close: false,
    pauseOnHover: false,
    icon: '',
    timeout: 5000,
    progressBar: true,
    layout: 2,
    position: 'topRight',
    maxWidth: 260
})

export default function install(): void {
    Object.defineProperties(Vue.prototype, {
        $iziToast: {
            get () {
                return iziToast
            }
        }
    })
}
