import api from "../../../helpers/api";
import config from "../../../../config";

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
        },
        ADD_USER_DATA: (state, data) => {
            Object.keys(data).forEach( key => {
                Vue.set(state.user, key, data[key])
            })
        }
    },

    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await api.post('login', credentials);
            return dispatch('attempt', response.data.token)
        },

        async register({ dispatch }, form) {
            let response = await api.post('register', form);
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

                response.data.currencies.forEach((item) => {
                    item.name = Object.keys(config.POINTS).filter(k=>config.POINTS[k] === item.type).toString()
                })

                commit('SET_USER', response.data)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        signOut({ commit }) {
            return api.post('logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        }
    }
}