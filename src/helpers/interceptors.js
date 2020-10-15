import api from './api';
import loader from './loader';
import store from '../store'

import Vue from 'vue'

export default function setup() {
    api.interceptors.request.use(function(config) {

        //start loading
        loader.loaderStart();

        //return config
        return config;
    }, function(err) {

        // close loading instance
        loader.loaderEnd();

        // return error
        return Promise.reject(err);
    });

    api.interceptors.response.use(function (response) {

        //close loading instance
        loader.loaderEnd();

        //return data
        return response.data;
    }, function (error) {

        // check if notifications exists and show
        error.response.data.errors.map(function(value, key) {
            if(value !== '')  store.commit('notifications/ADD_NOTIFICATION', {text: value.message, type: error.response.data.status});
        });

        // close loading instance
        loader.loaderEnd();

        // custom error handling
        //Vue.$swal('Error', 'Some kind of error', 'error')

        //return error
        return Promise.reject(error.response);
    });
}