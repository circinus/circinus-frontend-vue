import { observable } from 'mobx';
import { IGuild } from './IGuild';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IPaginatedResponse } from '@/helpers/api/IPaginatedResponse';
import { GuildsNotFetchedError } from '@/store/modules/guilds/errors/GuildsNotFetchedError';
import { AxiosInstance } from 'axios';

export class GuildModule extends LoadingModule {
    private api: AxiosInstance;

    public constructor() {
        super();

        this.api = api;
    }

    @observable private _guilds: Array<IGuild> = [];
    public get guilds(): Array<IGuild> {
        return this._guilds;
    }

    public async getGuilds(limit = 10): Promise<void> {
        this.setLoadingState('get-guildList', LoadingState.LOADING);
        const response = await this.api.get<IPaginatedResponse<Array<IGuild>>>(`guilds/list/1/${limit}`);

        this.setLoadingState('get-guildList', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            this._guilds = response.data.data;
        } else {
            return Promise.reject(new GuildsNotFetchedError());
        }
    }
}

const guildModule = new GuildModule();

export {
    guildModule
};
