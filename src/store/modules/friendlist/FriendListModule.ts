import { observable } from 'mobx';
import { IFriendList } from './IFriendList';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';
import { FriendsNotFetchedError } from '@/store/modules/friendlist/errors/FriendsNotFetchedError';

export class FriendListModule extends LoadingModule {
    @observable private _friends: Array<IFriendList> = [];
    public get friends(): Array<IFriendList> {
        return this._friends;
    }

    public async getFriends(limit = 10): Promise<void> {
        this.setLoadingState('get-friendList', LoadingState.LOADING);
        const response = await api.get<IPaginatedResponse<Array<IFriendList>>>(`friends/list/1/${limit}`);

        this.setLoadingState('get-friendList', LoadingState.LOADED);

        let amount = response.data.data.data.length;

        const data = {
            id: 0,
            relation: 0,
            friends_since: 0,
            username: 'Friend',
            motto: 'Test',
            look: '',
            online: -1
        };

        for (amount; amount < 9; amount++) {
            response.data.data.data.push(data);
        }

        if (response.status === ResponseStatus.OK) {
            this._friends = response.data.data.data;
        } else {
            return Promise.reject(new FriendsNotFetchedError());
        }
    }
}

const friendListModule = new FriendListModule();

export {
    friendListModule
};
