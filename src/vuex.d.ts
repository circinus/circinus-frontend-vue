// vuex typings
import Vue from 'vue'
import { AxiosInstance } from 'axios';

declare module 'vue/types/vue' {
    interface VueConstructor {
        axios: AxiosInstance;
    }
}

