import api from "../../../helpers/api";
import { ActionContext, Module } from 'vuex';
import { IRootState } from '@/store';

export interface IState {
    list: null;
}

export enum PermissionTypes {
    APPEND_LIST = 'APPEND_LIST'
}

const permissions: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        list: null
    },

    getters: {
        list(state: IState) {
            return state.list
        }
    },

    mutations: {
        [PermissionTypes.APPEND_LIST](state: IState, list): void {
            state.list = list
        }
    },


    actions: {
        async getStafflist({commit, dispatch}: ActionContext<IState, IRootState>): Promise<void> {
            await api.get('/permissions/staff/list')
                .then((response) => {
                    dispatch('loader/change', 'getList', {root:true})
                    commit(PermissionTypes.APPEND_LIST, response.data)
                });
        }
    }
}

export default permissions;
