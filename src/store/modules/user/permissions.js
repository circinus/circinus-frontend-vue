import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        list: null
    },

    getters: {
        list(state) {
            return state.list
        }
    },

    mutations: {
        APPEND_LIST: (state, list) => {
            state.list = list
        }
    },


    actions: {
        getStafflist: async function ({commit, dispatch}) {
            await api.get('/permissions/staff/list')
                .then((response) => {
                    dispatch('loader/change', 'getList', {root:true})
                    commit('APPEND_LIST', response.data)
                });
        }
    }
}