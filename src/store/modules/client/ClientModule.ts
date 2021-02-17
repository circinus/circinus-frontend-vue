import { computed, observable } from 'mobx';
import router from '@/router';
import { ITicketResponse } from '@/store/modules/client/ITicketResponse';
import api from '@/helpers/api';
import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import { IResponse } from '@/helpers/IResponse';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { CantFetchTicketError } from '@/store/modules/client/errors/CantFetchTicketError';

export class ClientModule extends LoadingModule {
    @observable private _loaded = false;
    @observable private _lastUrl: string | null = null;
    @observable private _pageActive = false;

    @computed
    public get loaded(): boolean {
        return this._loaded;
    }

    @computed
    public get lastUrl(): string | null {
        return this._lastUrl;
    }

    @computed
    public get pageActive(): boolean {
        return this._pageActive;
    }

    public setLoaded(loaded: boolean): ClientModule {
        this._loaded = loaded;

        return this;
    }

    public setLastUrl(lastUrl: string | null): ClientModule {
        this._lastUrl = lastUrl;

        return this;
    }

    public setPageActive(active: boolean): ClientModule {
        this._pageActive = active;

        return this;
    }

    public setClient(loaded: boolean) {
        this._loaded = loaded;
        this._lastUrl = router.currentRoute.name || null;

        if (this._loaded) {
            router.replace({ name: 'hotel' });
        } else {
            if (this._lastUrl === 'hotel') {
                this._lastUrl = 'home';
            }
            router.replace({ name: this._lastUrl || '' });
        }
    }

    public async getTicket(): Promise<ITicketResponse> {
        this.setLoadingState('get-ticket', LoadingState.LOADING);

        const response = await api.put<IResponse<ITicketResponse>>('user/ticket');

        this.setLoadingState('get-ticket', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            return response.data.data;
        }

        return Promise.reject(new CantFetchTicketError());
    }
}

const clientModule = new ClientModule();

export {
    clientModule
};
