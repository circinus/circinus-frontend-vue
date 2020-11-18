import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        article: null,
        articles: null,
        comments: []
    },

    getters: {
        article(state) {
            return state.article
        },
        articles(state) {
            return state.articles
        },
        comments(state) {
            return state.comments
        }
    },

    mutations: {
        APPEND_NEW_STORY: (state, article) => {
            state.articles = article
        },
        CURRENT_STORY: (state, article) => {
            state.article = article
        },
        CURRENT_COMMENTS: (state, comments) => {
            state.comments = comments
        },
    },


    actions: {
        getArticles: async function ({commit, dispatch}) {
            await api.get('articles/list/1/3')
                .then((response) => {
                    dispatch('loader/change', 'getArticles', {root:true})
                    commit('APPEND_NEW_STORY', response.data.data)
                });
        },
        getArticle: async function ({commit, dispatch}, slug) {
            await api.get('articles/' + slug)
                .then((response) => {
                    dispatch('loader/change', 'getArticle', {root:true})
                    commit('CURRENT_STORY', response.data)
                });
        },
        getComments: async function ({commit, dispatch}, form) {
            await api.get('comments/' + form.id + '/list/' + form.page + '/' + form.offset + '')
                .then((response) => {
                    commit('CURRENT_COMMENTS', response.data.data)
                });
        }
    }
}