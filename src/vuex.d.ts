// vuex typings
import { AxiosInstance } from 'axios';
import { IziToast } from 'izitoast';
import { ProviderInstance } from 'vee-validate/dist/types/types';

declare module 'vue/types/vue' {
    interface Vue {
        axios: AxiosInstance;
        $iziToast: IziToast;
        $validator: ProviderInstance;
    }

    interface VueConstructor {
        axios: AxiosInstance;
        $iziToast: IziToast;
    }
}
