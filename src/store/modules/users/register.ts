import api from '../../../helpers/api';
import { Module } from 'vuex';
import { IRootState } from '@/store';
import { AxiosResponse } from 'axios';
import { ILooksResponse } from '@/store/modules/users/ILooksResponse';

export interface IState {
    looks: Record<string, string[]>;
}

const register: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        looks: {}
    },

    actions: {
        async getLooks(_, gender: string): Promise<string[]> {
            return api.get<ILooksResponse>('register/looks')
                .then((response: AxiosResponse<ILooksResponse>): string[] => {
                    return response.data.looks[gender];
                });
        }
    }
};

export default register;
