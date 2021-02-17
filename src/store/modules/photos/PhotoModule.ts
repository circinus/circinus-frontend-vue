import { observable } from 'mobx';
import { IPhoto } from '@/store/modules/photos/IPhoto';
import api from '@/helpers/api';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';
import { PhotosNotFetchedError } from '@/store/modules/photos/errors/PhotosNotFetchedError';

export class PhotoModule extends LoadingModule {
    @observable private _photos: Array<IPhoto> = [];
    public get photos(): Array<IPhoto> {
        return this._photos;
    }

    public async getPhotos(limit = 10): Promise<void> {
        this.setLoadingState('get-photos', LoadingState.LOADING);
        const response = await api.get<IPaginatedResponse<Array<IPhoto>>>(`photos/list/1/${limit}`);

        this.setLoadingState('get-photos', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            this._photos = response.data.data.data;
        } else {
            return Promise.reject(new PhotosNotFetchedError());
        }
    }
}

const photoModule = new PhotoModule();

export {
    photoModule
};
