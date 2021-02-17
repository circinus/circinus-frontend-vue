import { computed, observable } from 'mobx';
import { IUser } from '@/store/modules/auth/IUser';
import { ICredentials } from '@/store/modules/auth/ICredentials';
import api from '@/helpers/api';
import { ITokenResponse } from '@/store/modules/auth/ITokenResponse';
import { ICurrency } from '@/store/modules/currencies/ICurrency';
import { environment } from '../../../../environment';
import { IResponse } from '@/helpers/IResponse';
import { voteModule } from '@/store/modules/votes/VoteModule';
import { LoadingModule } from '../loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { ILooksResponse } from '@/store/modules/auth/ILooksResponse';
import { LooksNotFetchedError } from '@/store/modules/auth/errors/LooksNotFetchedError';
import { RegisterError } from './errors/RegisterError';
import { INewUser } from '@/store/modules/users/INewUser';

export class AuthModule extends LoadingModule {
    @observable private _token: string | null = null;
    @observable private _user: IUser | null = null;

    @computed
    public get authenticated(): boolean {
        return !!this._token && !!this._user;
    }

    @computed
    public get user(): IUser | null {
        return this._user;
    }

    public setToken(token: string | null): AuthModule {
        if (token) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem('token', token);
        } else {
            api.defaults.headers.common.Authorization = undefined;
            localStorage.removeItem('token');
        }

        this._token = token;

        return this;
    }

    public setUser(user: IUser | null): AuthModule {
        this._user = user;

        return this;
    }

    public async attempt(token: string | null): Promise<void> {
        if (!token) {
            return;
        }

        this.setToken(token);

        try {
            const response = await api.get<IResponse<IUser>>('user');

            response.data.data.currencies = response.data.data.currencies.map((item: ICurrency) => ({
                ...item,
                name: Object.keys(environment.POINTS)
                    .filter((k: string): boolean => environment.POINTS[k] === item.type).toString()
            }));

            voteModule.getAll();

            this.setUser(response.data.data);
        } catch (e) {
            this.setToken(null);
            this.setUser(null);
        }
    }

    public async signIn(credentials: ICredentials): Promise<void> {
        const response = await api.post<IResponse<ITokenResponse>>('login', credentials);

        return this.attempt(response.data.data.token);
    }

    public signOut(): Promise<void> {
        return api.post('logout').then(() => {
            this.setToken(null);
            this.setUser(null);
        });
    }

    public async register(newUser: INewUser): Promise<void> {
        this.setLoadingState('register', LoadingState.LOADING);

        const response = await api.post<IResponse<ITokenResponse>>('register', newUser);

        this.setLoadingState('register', LoadingState.LOADED);

        if (response.status === ResponseStatus.CREATED) {
            return this.attempt(response.data.data.token);
        }

        return Promise.reject(new RegisterError());
    }

    public async getRegisterLooks(gender: string): Promise<string[]> {
        this.setLoadingState('get-register-looks', LoadingState.LOADING);
        const response = await api.get<IResponse<ILooksResponse>>('register/looks');

        this.setLoadingState('get-register-looks', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            return response.data.data.looks[gender];
        } else {
            return Promise.reject(new LooksNotFetchedError());
        }
    }
}

const authModule = new AuthModule();

export {
    authModule
};
