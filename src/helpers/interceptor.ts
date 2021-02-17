import api from '@/helpers/api';
import store from '@/store';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IErrorResponse } from '@/helpers/IErrorResponse';
import { IError } from '@/helpers/IError';

export default function setup(): void {
    api.interceptors.request.use((config: AxiosRequestConfig) => {
        // return config
        return config;
    }, function (err) {
        // return error
        return Promise.reject(err);
    });

    api.interceptors.response.use((response: AxiosResponse) => {
        // return data
        return response;
    }, (error: AxiosError<IErrorResponse>) => {
        if (error.response) {
            // custom error handling
            if (error.response.status === 404) {

            } else {
                // check if notifications exists and show
                error.response.data.errors.map((value: IError): void => {
                    if (value.message) {
                        store.commit('notifications/ADD_NOTIFICATION', {
                            text: value.message,
                            type: error.response?.data.status || 'danger'
                        });
                    }
                });
            }
        }

        // return error
        return Promise.reject(error.response);
    });
}
