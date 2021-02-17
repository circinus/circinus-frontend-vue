import { AxiosInstance } from 'axios';
import { computed, observable } from 'mobx';
import { IArticle } from './IArticle';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import api from '@/helpers/api';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import { IResponse } from '@/helpers/IResponse';
import { IComment } from '@/store/modules/home/IComment';
import { IGetCommentCriteria } from '@/store/modules/articles/IGetCommentCriteria';
import { INewComment } from '@/store/modules/home/INewComment';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';

export class ArticleModule extends LoadingModule {
    private api: AxiosInstance;
    @observable private _articles: Array<IArticle> = [];

    public constructor() {
        super();

        this.api = api;
    }

    @computed
    public get articles(): Array<IArticle> {
        return this._articles;
    }

    public async getArticles(limit = 3): Promise<void> {
        this.setLoadingState('get-articles', LoadingState.LOADING);
        const response = await this.api.get<IPaginatedResponse<Array<IArticle>>>(`articles/list/1/${limit}`);

        this.setLoadingState('get-articles', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            this._articles = response.data.data.data;
        }
    }

    public async getArticle(slug: string): Promise<IArticle | null> {
        this.setLoadingState('get-article', LoadingState.LOADING);

        const response = await this.api.get<IResponse<IArticle>>(`/articles/${slug}`);

        this.setLoadingState('get-article', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            return response.data.data;
        }

        return null;
    }

    public async getComments(criteria: IGetCommentCriteria): Promise<Array<IComment>> {
        this.setLoadingState('get-comments', LoadingState.LOADING);

        const response = await this.api.get<IPaginatedResponse<Array<IComment>>>(
            `comments/${criteria.id}/list/${criteria.page}/${criteria.offset}`
        );

        this.setLoadingState('get-comments', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            return response.data.data.data;
        }

        return [];
    }

    public async createComment(newComment: INewComment): Promise<IComment | null> {
        this.setLoadingState('create-comment', LoadingState.LOADING);
        const response = await this.api.post('comments/create', newComment);
        this.setLoadingState('create-comment', LoadingState.LOADED);

        if (response.status === ResponseStatus.CREATED) {
            return response.data.data;
        }

        return null;
    }
}

const articleModule = new ArticleModule();

export {
    articleModule
};
