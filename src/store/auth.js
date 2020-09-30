import api from "../helpers/api";

export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user;
        },

        user(state) {
            return state.user;
        }
    },

    mutations: {
        SET_TOKEN (state, token) {
            state.token = token;
        },
        SET_USER (state, user) {
            state.user = user;
        }
    },

    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await api.post('login', credentials);
            return dispatch('attempt', response.data.token)
        },

        async attempt ({ commit, state } , token) {
            if(token) {
                commit('SET_TOKEN', token)
            }

            if(!state.token) {
                return
            }

            try {
                let response = await api.get('user');

                commit('SET_USER', response.data);
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        signOut({ commit }) {
            return api.post('auth/signout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        }
    }
}