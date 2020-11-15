import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        articles: null,
        article: null
    },

    getters: {
        article(state) {
            return state.article
        },
        articles(state) {
            return state.articles
        },
    },

    mutations: {
        APPEND_NEW_STORY: (state, article) => {
            state.articles = article
        },
        CURRENT_STORY: (state, article) => {
            state.article = article
        },
    },


    actions: {
        getArticles: async function ({commit}) {
            await api.get('articles/list/1/3')
                .then((response) => {
                    commit('APPEND_NEW_STORY', response.data.data)
                });
        },
        getArticle: async function ({commit}, slug) {
            await api.get('articles/' + slug)
                .then((response) => {
                    commit('CURRENT_STORY', response.data)
                });
        }
    }
}