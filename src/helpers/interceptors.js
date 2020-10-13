import api from './api';
import loader from './loader';
import store from '../store'

export default function setup() {
    api.interceptors.request.use(function(config) {
        loader.loaderStart();
        return config;
    }, function(err) {
        return Promise.reject(err);
    });

    api.interceptors.response.use(function (response) {
        loader.loaderEnd();
        return response.data;
    }, function (error) {
        error.response.data.errors.map(function(value, key) {
            if(value !== '')  store.commit('notifications/ADD_NOTIFICATION', {text: value.message, type: error.response.data.status});
        });
        loader.loaderEnd();
        return Promise.reject(error.response);
    });
}