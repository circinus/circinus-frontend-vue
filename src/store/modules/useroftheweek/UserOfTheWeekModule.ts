import { observable } from 'mobx';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { IUserOfTheWeek } from '@/store/modules/useroftheweek/IUserOfTheWeek';
import { IResponse } from '@/helpers/IResponse';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { AxiosInstance } from 'axios';

export class UserOfTheWeekModule extends LoadingModule {
    private api: AxiosInstance;

    public constructor() {
        super();

        this.api = api;
    }

    public async getUser(): Promise<IUserOfTheWeek | null> {
        this.setLoadingState('get-userOfTheWeek', LoadingState.LOADING);

        const response = await this.api.get<IUserOfTheWeek>('user-of-the-hotel');

        this.setLoadingState('get-userOfTheWeek', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            return response.data;
        }

        return null;
    }
}

const userOfTheWeekModule = new UserOfTheWeekModule();

export {
    userOfTheWeekModule
};
