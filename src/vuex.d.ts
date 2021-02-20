// vuex typings
import { Error } from '@/store/errors/ValidationError';
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

declare module 'axios' {
    export interface AxiosResponse<T = any> {
        code: number;
        status: string;
        data: T;
        errors?: Array<Error>;
    };
  }
