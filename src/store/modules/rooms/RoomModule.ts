import { observable } from 'mobx';
import { IRoom } from './IRoom';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';
import { RoomsNotFetchedError } from '@/store/modules/rooms/errors/RoomsNotFetchedError';
import { AxiosInstance } from 'axios';

export class RoomModule extends LoadingModule {
    private api: AxiosInstance;

    public constructor() {
        super();

        this.api = api;
    }

    @observable private _rooms: Array<IRoom> = [];
    public get rooms(): Array<IRoom> {
        return this._rooms;
    }

    public async getRooms(limit = 10): Promise<void> {
        this.setLoadingState('get-roomList', LoadingState.LOADING);
        const response = await this.api.get<IPaginatedResponse<Array<IRoom>>>(`rooms/list/1/${limit}`);

        this.setLoadingState('get-roomList', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            this._rooms = response.data.data;
        } else {
            return Promise.reject(new RoomsNotFetchedError());
        }
    }
}

const roomModule = new RoomModule();

export {
    roomModule
};
