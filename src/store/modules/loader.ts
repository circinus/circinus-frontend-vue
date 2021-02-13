import router from "../../router";
import { ActionContext, Module } from 'vuex';
import { IRootState } from '@/store';

export interface IIdentifier {
    module: string;
    loading: boolean;
}

export interface IState {
    identifier: Array<IIdentifier>;
}

export enum LoaderTypes {
    ADD_IDENTIFIER = 'ADD_IDENTIFIER',
    CHANGE_IDENTIFIER = 'CHANGE_IDENTIFIER'
}

const loader: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        identifier: []
    },

    mutations: {
        [LoaderTypes.ADD_IDENTIFIER](state: IState, payload: IIdentifier): void {
            state.identifier.push(payload);
        },
        [LoaderTypes.CHANGE_IDENTIFIER](state: IState, payload: IIdentifier): void {
            const item = state.identifier.find((item: IIdentifier): boolean => item.module === payload.module);
            if(item) {
                Object.assign(item, { loading: false });
            }
        },
    },

    getters: {
        exists(state: IState) {
            return (_: any, module: string) => {
                const result = state.identifier.find((identifier: IIdentifier) => identifier.module === module)
                return result ? result.loading : false;
            }
        }
    },

    actions: {
        add({commit}: ActionContext<IState, IRootState>, action: IIdentifier): void {
            commit('ADD_IDENTIFIER', action)
        },
        change({commit}: ActionContext<IState, IRootState>, action: IIdentifier): void {

            const parameters = {
                route: router.currentRoute.name,
                module: action
            }

            commit(LoaderTypes.CHANGE_IDENTIFIER, parameters)
        },
    }
}

export default loader;
