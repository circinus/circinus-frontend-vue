import { observable } from 'mobx';
import { IRank } from './IRank';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { CantFetchRanks } from '@/store/modules/permissions/errors/CantFetchRanks';

export class PermissionModule extends LoadingModule {
    @observable private _ranks: Array<IRank> = [];

    public get ranks(): Array<IRank> {
        return this._ranks;
    }

    public async getRanks(): Promise<void> {
        this.setLoadingState('get-permissions', LoadingState.LOADING);

        const response = await api.get<Array<IRank>>('permissions/staff/list');

        this.setLoadingState('get-permissions', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            this._ranks = response.data;
        } else {
            return Promise.reject(new CantFetchRanks());
        }
    }
}

const permissionModule = new PermissionModule();

export {
    permissionModule
};
