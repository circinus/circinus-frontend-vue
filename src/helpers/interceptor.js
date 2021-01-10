import api from '@/helpers/api';
import store from '@/store'

import Vue from 'vue'

export default function setup() {
    api.interceptors.request.use(function(config) {

        //return config
        return config;
    }, function(err) {

        // return error
        return Promise.reject(err);
    });

    api.interceptors.response.use(function (response) {

        //return data
        return response.data;
    }, function (error) {

        // custom error handling
        if(error.response.status === 404) {

        } else {
            // check if notifications exists and show
            error.response.data.errors.map(function(value, key) {
                if(value !== '')  store.commit('notifications/ADD_NOTIFICATION', {text: value.message, type: error.response.data.status});
            });
        }

        //return error
        return Promise.reject(error.response);
    });
}