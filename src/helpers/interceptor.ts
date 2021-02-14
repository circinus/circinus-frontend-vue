import Vue from 'vue'
import api from '@/helpers/api';
import store from '@/store'
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export default function setup(): void {
    api.interceptors.request.use((config: AxiosRequestConfig) => {
        //return config
        return config;
    }, function(err) {

        // return error
        return Promise.reject(err);
    });

    api.interceptors.response.use((response: AxiosResponse) => {
        //return data
        return response.data;
    }, (error) => {
        console.log(error.response);
        // custom error handling
        if(error.response.status === 404) {

        } else {
            // check if notifications exists and show
            error.response.data.errors.map((value: any): void => {
                if(value !== '') {
                    store.commit('notifications/ADD_NOTIFICATION', {
                        text: value.message,
                        type: error.response.data.status
                    });
                }
            });
        }

        //return error
        return Promise.reject(error.response);
    });
}
