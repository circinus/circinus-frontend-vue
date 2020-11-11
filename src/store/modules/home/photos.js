import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        photos: null
    },

    getters: {
        photos(state) {
            return state.photos
        },
    },

    mutations: {
        APPEND_PHOTOS: (state, photos) => {
            state.photos = photos
        }
    },

    actions: {
        async getPhotos ({ commit }) {
            await api.get('photos/list/1/10')
                .then((response) => {
                    commit('APPEND_PHOTOS', response.data.data)
                });
        }
    }
}