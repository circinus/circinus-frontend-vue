import { observable } from 'mobx';
import { IRoom } from './IRoom';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';
import { RoomsNotFetchedError } from '@/store/modules/rooms/errors/RoomsNotFetchedError';

export class RoomModule extends LoadingModule {
    @observable private _rooms: Array<IRoom> = [];
    public get rooms(): Array<IRoom> {
        return this._rooms;
    }

    public async getRooms(limit = 10): Promise<void> {
        this.setLoadingState('get-roomList', LoadingState.LOADING);
        const response = await api.get<IPaginatedResponse<Array<IRoom>>>(`rooms/list/1/${limit}`);

        this.setLoadingState('get-roomList', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            this._rooms = response.data.data.data;
        } else {
            return Promise.reject(new RoomsNotFetchedError());
        }
    }
}

const roomModule = new RoomModule();

export {
    roomModule
};
