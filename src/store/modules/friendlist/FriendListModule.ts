import { observable } from 'mobx';
import { IFriendList } from './IFriendList';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';
import { FriendsNotFetchedError } from '@/store/modules/friendlist/errors/FriendsNotFetchedError';

export class FriendListModule extends LoadingModule {
    public _mannequin: IFriendList = {
        id: 0,
        relation: 0,
        friends_since: 0,
        username: 'Friend',
        look: '',
        motto: '',
        online: -1
    }

    @observable private _friends: Array<IFriendList> = [];
    public get friends(): Array<IFriendList> {
        return this._friends;
    }

    public async getFriends(limit = 10): Promise<void> {
        this.setLoadingState('get-friendList', LoadingState.LOADING);
        const response = await api.get<IPaginatedResponse<Array<IFriendList>>>(`friends/list/1/${limit}`);

        this.setLoadingState('get-friendList', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            this._friends = response.data.data;

            let amount = this._friends.length;
            for (amount; amount < 9; amount++) {
                this._friends.push(this._mannequin);
            }
        } else {
            return Promise.reject(new FriendsNotFetchedError());
        }
    }
}

const friendListModule = new FriendListModule();

export {
    friendListModule
};
