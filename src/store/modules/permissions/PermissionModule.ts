import { observable } from 'mobx';
import { IRank } from './IRank';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { IResponse } from '@/helpers/IResponse';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { CantFetchRanks } from '@/store/modules/permissions/errors/CantFetchRanks';

export class PermissionModule extends LoadingModule {
    @observable private _ranks: Array<IRank> = [];

    public get ranks(): Array<IRank> {
        return this._ranks;
    }

    public async getRanks(): Promise<void> {
        this.setLoadingState('get-permissions', LoadingState.LOADING);

        const response = await api.get<IResponse<Array<IRank>>>('permissions/staff/list');

        this.setLoadingState('get-permissions', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            this._ranks = response.data.data;
        } else {
            return Promise.reject(new CantFetchRanks());
        }
    }
}

const permissionModule = new PermissionModule();

export {
    permissionModule
};
