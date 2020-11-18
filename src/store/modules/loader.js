import router from "../../router";

export default {

    namespaced: true,

    state: {
        identifier: []
    },

    mutations: {
        ADD_IDENTIFIER(state, payload) {
            state.identifier.push(payload);
        },
        CHANGE_IDENTIFIER(state, payload) {
            const item = state.identifier.find(item => item.module === payload.module);
            if(item) Object.assign(item, {loading: false});
        },
    },

    getters: {
        exists: (state) => (component, module) => {
            const result = state.identifier.find(identifier => identifier.module === module)
            return result ? result.loading : false;
        }
    },

    actions: {
        add: function ({commit}, action) {
            commit('ADD_IDENTIFIER', action)
        },
        change: function ({commit}, action) {

            const parameters = {
                route: router.currentRoute.name,
                module: action
            }

            commit('CHANGE_IDENTIFIER', parameters)
        },
    }
}