import router from '../../../router'

export default {

    namespaced: true,

    state: {
        clientLoaded: false
    },

    getters: {
        loaded(state) {
            return state.clientLoaded;
        }
    },

    mutations: {
        APPEND_CHANGE_STATE: (state, action) => {
            state.clientLoaded = action
        }
    },

    actions: {
        setstate ({ commit, state }, action) {
            commit('APPEND_CHANGE_STATE', action)

            if(state.clientLoaded) {
                router.replace({name: "hotel"}).then(r => console.log(r))
            }
        }
    }
}