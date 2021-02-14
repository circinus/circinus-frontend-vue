import api from "../../../helpers/api";
import { ActionContext, Module } from 'vuex';
import { IRootState } from '@/store';
import { AxiosResponse } from 'axios';
import { INewVote } from '@/store/modules/home/INewVote';
import { IVote } from '@/store/modules/user/votes/IVote';
import { IVoteType } from '@/store/modules/user/votes/IVoteType';
import { IEntityType } from '@/store/modules/user/votes/IEntityType';

export interface IState {
    EntityType: IEntityType,
    VoteType: IVoteType,
    votes: Array<IVote>;
}

export enum VoteTypes {
    ADD_VOTE = 'ADD_VOTE'
}

const votes: Module<IState, IRootState> = {
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
        EntityType(state: IState): IEntityType {
            return state.EntityType
        },

        VoteType(state: IState): IVoteType {
            return state.VoteType
        },

        exists(state: IState): (id: number, type: number) => IVote | undefined {
            return (id: number, type: number) => {
                return state.votes.find((vote: IVote) => vote.entity_id === id && vote.vote_type === type)
            }
        }
    },

    mutations: {
        [VoteTypes.ADD_VOTE](state: IState, vote: IVote): void {
            state.votes.push(vote)
        }
    },

    actions: {
        async total({commit}: ActionContext<IState, IRootState>): Promise<void> {
            const total = await api.get<IVote[]>('votes/total')

            total.data.forEach((vote: IVote): void => {
                commit('ADD_VOTE', vote)
            });
        },

        async create({ commit, state }: ActionContext<IState, IRootState>, action: INewVote): Promise<IVote> {
            return api.post('votes/create', action)
                .then((response: AxiosResponse<IVote>) => {
                    commit('ADD_VOTE', response.data)
                    return response.data
                });
        }
    }
}

export default votes;
