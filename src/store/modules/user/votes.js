import api from "../../../helpers/api";

export default {
    namespaced: true,

    state: {
        EntityType: {
            article_vote_entity: 1,
            article_comment_vote_entity: 2,
            forum_vote_entity: 3,
            forum_vote_community_entity: 4,
            guestbook_vote_entity: 5,
            photo_vote_entity: 6
        },
        VoteType: {
            likes: 1,
            dislikes: 0
        },
        votes: []
    },

    getters: {
        EntityType(state) {
            return state.EntityType
        },

        VoteType(state) {
            return state.VoteType
        },

        exists: (state) => (id, type) => {
            return state.votes.find(votes => votes.entity_id === id && votes.vote_type === type)
        }
    },

    mutations: {
        ADD_VOTE (state, vote) {
            state.votes.push(vote)
        }
    },

    actions: {

        total: async function ({commit, state}) {
            const total = await api.get('votes/total')

            total.data.map(function (response) {

                const vote = {}

                vote.id = response.id
                vote.entity_id = response.entity_id
                vote.vote_entity = response.vote_entity
                vote.vote_type = response.vote_type

                commit('ADD_VOTE', vote)
            });
        },

        create: async function ({ commit, state }, action) {
            return await api.post('votes/create', action)
                .then((response) => {
                    commit('ADD_VOTE', response.data)
                    return response.data
                });
        }
    }
}