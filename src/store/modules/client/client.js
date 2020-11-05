import router from '../../../router'

export default {

    namespaced: true,

    state: {
        clientLoaded: false,
        lastUrl: null
    },

    getters: {
        loaded(state) {
            return state.clientLoaded;
        }
    },

    mutations: {
        APPEND_CHANGE_LOADED: (state, loaded) => state.clientLoaded = loaded,
        APPEND_CHANGE_URL: (state, url) => state.lastUrl = url,
    },

    actions: {
        setstate ({ commit, state }, action) {

            commit('APPEND_CHANGE_LOADED', action)
            commit('APPEND_CHANGE_URL', router.currentRoute.name)

            if(state.clientLoaded) {
                router.replace({name: "hotel"})
            } else {
                if(state.lastUrl == "hotel") {
                    state.lastUrl = "home"
                }
                router.replace({name: state.lastUrl})
            }
        }
    }
}