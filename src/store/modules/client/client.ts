import router from '../../../router'
import api from '../../../helpers/api';
import { ActionContext, Module } from 'vuex';
import { IRootState } from '@/store';
import { AxiosResponse } from 'axios';
import { ITicketResponse } from '@/store/modules/client/ITicketResponse';

export interface IState {
    clientLoaded: boolean;
    lastUrl: string | null;
    pageActive: boolean;
}

export enum ClientTypes {
    APPEND_CHANGE_LOADED = 'APPEND_CHANGE_LOADED',
    APPEND_CHANGE_URL = 'APPEND_CHANGE_URL',
    APPEND_PAGE_ACTIVE = 'APPEND_PAGE_ACTIVE'
}

const client: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        clientLoaded: false,
        lastUrl: null,
        pageActive: false
    },

    getters: {
        loaded(state: IState): boolean {
            return state.clientLoaded;
        },
        active(state: IState): boolean {
            return state.pageActive;
        }
    },

    mutations: {
        [ClientTypes.APPEND_CHANGE_LOADED](state: IState, loaded: boolean): void {
            state.clientLoaded = loaded
        },
        [ClientTypes.APPEND_CHANGE_URL](state: IState, url: string): void {
            state.lastUrl = url;
        },
        [ClientTypes.APPEND_PAGE_ACTIVE](state: IState, active: boolean): void {
            state.pageActive = active;
        }
    },

    actions: {
        setClient({ commit, state }: ActionContext<IState, IRootState>, loaded: boolean): void {

            commit(ClientTypes.APPEND_CHANGE_LOADED, loaded)
            commit(ClientTypes.APPEND_CHANGE_URL, router.currentRoute.name)

            if (state.clientLoaded) {
                router.replace({ name: 'hotel' })
            } else {
                if (state.lastUrl === 'hotel') {
                    state.lastUrl = 'home'
                }
                router.replace({ name: state.lastUrl || '' })
            }
        },

        setActive({ commit }: ActionContext<IState, IRootState>, active: boolean) {
            commit(ClientTypes.APPEND_PAGE_ACTIVE, active)
        },

        async setTicket(): Promise<ITicketResponse> {
            return await api.put<ITicketResponse>('user/ticket')
                .then((response: AxiosResponse<ITicketResponse>) => {
                    return response.data;
                });
        }
    }
}

export default client;
