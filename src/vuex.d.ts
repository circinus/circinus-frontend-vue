// vuex typings
import { AxiosInstance } from 'axios'
import { IziToast } from 'izitoast'

declare module 'vue/types/vue' {
    interface Vue {
        axios: AxiosInstance;
        $iziToast: IziToast;
    }

    interface VueConstructor {
        axios: AxiosInstance;
        $iziToast: IziToast;
    }
}
