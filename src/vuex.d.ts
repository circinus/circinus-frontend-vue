// vuex typings
import Vue from 'vue'
import { AxiosInstance } from 'axios';
import { IziToast } from 'izitoast';

declare module 'vue/types/vue' {
    interface VueConstructor {
        axios: AxiosInstance;
        $iziToast: IziToast;
    }
}

