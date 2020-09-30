import api from './api';
import loader from './loader';

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
    });
}