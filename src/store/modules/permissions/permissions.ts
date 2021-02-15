import api from '../../../helpers/api'
import { ActionContext, Module } from 'vuex'
import { IRootState } from '@/store'
import { IPermission } from '@/store/modules/permissions/IPermission'

export interface IState {
    list: Array<IPermission>;
}

export enum PermissionTypes {
    APPEND_LIST = 'APPEND_LIST'
}

const permissions: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        list: []
    },

    getters: {
        list(state: IState): Array<IPermission> {
            return state.list
        }
    },

    mutations: {
        [PermissionTypes.APPEND_LIST](state: IState, list): void {
            state.list = list
        }
    },

    actions: {
        async getStafflist({ commit, dispatch }: ActionContext<IState, IRootState>): Promise<void> {
            await api.get('/permissions/staff/list')
                .then((response) => {
                    dispatch('loader/change', 'getList', { root: true })
                    commit(PermissionTypes.APPEND_LIST, response.data)
                })
        }
    }
}

export default permissions
