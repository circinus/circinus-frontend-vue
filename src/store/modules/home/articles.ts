import api from '../../../helpers/api';
import { ActionContext, Module } from 'vuex';
import { IRootState } from '@/store';
import { IArticle } from '@/store/modules/home/IArticle';
import { IComment } from '@/store/modules/home/IComment';
import { IUser } from '@/store/modules/user/IUser';
import { IResponse } from '@/helpers/IResponse';
import { AxiosResponse } from 'axios';
import { IGetCommentCriteria } from '@/store/modules/articles/IGetCommentCriteria';
import { INewComment } from '@/store/modules/home/INewComment';

export interface IState {
    article: IArticle | null;
    articles: Array<IArticle>;
    comments: Array<IComment>;
}

export enum ArticleTypes {
    SET_ARTICLES = 'SET_ARTICLES',
    SET_CURRENT_ARTICLE = 'CURRENT_ARTICLE',
    SET_CURRENT_COMMENTS = 'CURRENT_COMMENTS'
}

const articles: Module<IState, IRootState> = {
    namespaced: true,
    state: {
        article: null,
        articles: [],
        comments: []
    },

    getters: {
        article(state: IState): IArticle | null {
            return state.article;
        },
        articles(state: IState): Array<IArticle> {
            return state.articles;
        },
        comments(state: IState): Array<IComment> {
            return state.comments;
        },
        user(state: IState, getters, rootState, rootGetters): IUser {
            return rootGetters['auth/user'];
        }
    },

    mutations: {
        [ArticleTypes.SET_ARTICLES](state: IState, article: Array<IArticle>): void {
            state.articles = article;
        },
        [ArticleTypes.SET_CURRENT_ARTICLE](state: IState, article: IArticle): void {
            state.article = article;
        },
        [ArticleTypes.SET_CURRENT_COMMENTS](state: IState, comments: Array<IComment>): void {
            state.comments = comments;
        }
    },
    actions: {
        async getArticles({ commit, dispatch }: ActionContext<IState, IRootState>): Promise<void> {
            await api.get<IResponse<Array<IArticle>>>('articles/list/1/3')
                .then((response): void => {
                    dispatch('loader/change', 'getArticles', { root: true });
                    commit(ArticleTypes.SET_ARTICLES, response.data.data);
                });
        },

        async getArticle({ commit, dispatch }: ActionContext<IState, IRootState>, slug: string): Promise<void> {
            await api.get<IArticle>('articles/' + slug)
                .then((response): void => {
                    dispatch('loader/change', 'getArticle', { root: true });
                    commit(ArticleTypes.SET_CURRENT_ARTICLE, response.data);
                });
        },

        async getComments({ commit }: ActionContext<IState, IRootState>, form: IGetCommentCriteria): Promise<void> {
            await api.get<IResponse<Array<IComment>>>(
                'comments/' + form.id + '/list/' + form.page + '/' + form.offset + ''
            ).then((response: AxiosResponse<IResponse<Array<IComment>>>): void => {
                commit(ArticleTypes.SET_CURRENT_ARTICLE, response.data.data);
            });
        },

        async storeComment({ getters }: ActionContext<IState, IRootState>, form: INewComment): Promise<AxiosResponse | undefined> {
            const comment = getters.comments.slice(-1)[0];

            if (comment !== undefined &&
                comment.user_id === getters.user.id) {
                return;
            }

            return await
            api.post<IComment>('comments/create', form)
                .then((response: AxiosResponse<IComment>) => {
                    return response;
                });
        }
    }
};

export default articles;
