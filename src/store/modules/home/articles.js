import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        stories: null
    },

    mutations: {
        APPEND_NEW_STORY: (state, article) => {
            state.stories = article
        }
    },

    actions: {
        async getStories ({ commit }) {
            await api.get('articles/list/1/3')
                .then((response) => {
                    commit('APPEND_NEW_STORY', response.data.data)
                });
        }
    }
}