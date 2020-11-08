import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        photos: null
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
        },
        async votePhoto ({}, action) {
            return await api.post('votes/create', action)
                .then((response) => {
                    return action.vote_type
                });
        }
    }
}