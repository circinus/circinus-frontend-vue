import { observable } from 'mobx';
import { IVote } from '@/store/modules/votes/IVote';
import { IVoteEntityType } from '@/store/modules/votes/IVoteEntityType';
import { IVoteType } from '@/store/modules/votes/IVoteType';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { INewVote } from '@/store/modules/photos/INewVote';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { VoteNotCastError } from '@/store/modules/votes/errors/VoteNotCastError';

export class VoteModule extends LoadingModule {
    @observable private _votes: Array<IVote> = [];
    private _entityTypes: IVoteEntityType = {
        article_vote_entity: 1,
        article_comment_vote_entity: 2,
        forum_vote_entity: 3,
        forum_vote_community_entity: 4,
        guestbook_vote_entity: 5,
        photo_vote_entity: 6
    };
    private _voteType: IVoteType = {
        likes: 1,
        dislikes: 0
    }

    public get entityTypes(): IVoteEntityType {
        return this._entityTypes;
    }

    public get voteTypes(): IVoteType {
        return this._voteType;
    }

    public exists(id: number, type: number): boolean {
        return !!this._votes.find((vote: IVote) => vote.entity_id === id && vote.vote_type === type);
    }

    public async getAll(): Promise<void> {
        this.setLoadingState('get-total', LoadingState.LOADING);
        const response = await api.get<IVote[]>('votes/total');

        this.setLoadingState('get-total', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            response.data.map((vote: IVote): void => {
                this._votes.push(vote);
            });
        }
    }

    public async createVote(newVote: INewVote): Promise<IVote> {
        this.setLoadingState('create-vote', LoadingState.LOADING);

        const response = await api.post<IVote>('votes/create', newVote);

        if (response.code === ResponseStatus.CREATED) {
            return response.data;
        } else {
            return Promise.reject(new VoteNotCastError());
        }
    }
}

const voteModule = new VoteModule();

export {
    voteModule
};
