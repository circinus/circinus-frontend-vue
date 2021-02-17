import api from '@/helpers/api';
import { environment } from '../../../../environment';
import { ActionContext, Module } from 'vuex';
import { IUser } from '@/store/modules/auth/IUser';
import { IRootState } from '@/store';
import { ICurrency } from '@/store/modules/currencies/ICurrency';
import { ICurrencyResponse } from '@/store/modules/currencies/ICurrencyResponse';

export interface IAuthState {
    token: string | null;
    user: IUser | null;
}

export interface ICredentials {
    username: string;
    password: string;
}

export enum AuthTypes {
    SET_TOKEN = 'SET_TOKEN',
    SET_USER = 'SET_USER'
}

const auth: Module<IAuthState, IRootState> = {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state: IAuthState): boolean {
            return !!state.token && !!state.user;
        },

        user(state: IAuthState): IUser | null {
            return state.user;
        }
    },

    mutations: {
        [AuthTypes.SET_TOKEN](state: IAuthState, token: string): void {
            state.token = token;
        },
        [AuthTypes.SET_USER](state: IAuthState, user: IUser): void {
            state.user = user;
        }
    },

    actions: {
        async signIn({ dispatch }: ActionContext<IAuthState, IRootState>, credentials: ICredentials): Promise<void> {
            const response = await api.post('login', credentials);
            return dispatch('attempt', response.data.token);
        },

        async register({ dispatch }: ActionContext<IAuthState, IRootState>, form): Promise<void> {
            const response = await api.post('register', form);
            return dispatch('attempt', response.data.token);
        },

        async attempt(
            { commit, state, dispatch }: ActionContext<IAuthState, IRootState>,
            token: string
        ): Promise<void> {
            if (token) {
                commit(AuthTypes.SET_TOKEN, token);
            }

            if (!state.token) {
                return;
            }

            try {
                const response = await api.get<ICurrencyResponse>('user');

                response.data.currencies = response.data.currencies.map((item: ICurrency) => ({
                    ...item,
                    name: Object.keys(environment.POINTS)
                        .filter((k: string): boolean => environment.POINTS[k] === item.type).toString()
                }));

                dispatch('votes/total', null, { root: true });
                commit(AuthTypes.SET_USER, response.data);
            } catch (e) {
                commit(AuthTypes.SET_TOKEN, null);
                commit(AuthTypes.SET_USER, null);
            }
        },

        signOut({ commit }: ActionContext<IAuthState, IRootState>): Promise<void> {
            return api.post('logout').then(() => {
                commit(AuthTypes.SET_TOKEN, null);
                commit(AuthTypes.SET_TOKEN, null);
            });
        }
    }
};

export default auth;
