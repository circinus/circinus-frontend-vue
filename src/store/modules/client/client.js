import router from '../../../router'

export default {

    namespaced: true,

    state: {
        clientLoaded: false,
        lastUrl: null,
        pageActive: false
    },

    getters: {
        loaded(state) {
            return state.clientLoaded;
        },
        active(state) {
            return state.pageActive;
        }
    },

    mutations: {
        APPEND_CHANGE_LOADED: (state, loaded) => state.clientLoaded = loaded,
        APPEND_CHANGE_URL: (state, url) => state.lastUrl = url,
        APPEND_PAGE_ACTIVE: (state, url) => state.pageActive = url,
    },

    actions: {
        setstate ({ commit, state }, action) {

            commit('APPEND_CHANGE_LOADED', action)
            commit('APPEND_CHANGE_URL', router.currentRoute.name)

            if(state.clientLoaded) {
                router.replace({name: "hotel"})
            } else {
                if(state.lastUrl === "hotel") {
                    state.lastUrl = "home"
                }
                router.replace({name: state.lastUrl})
            }
        },

        active ({ commit  }, action) {
            commit('APPEND_PAGE_ACTIVE', action)
        }
    }
}