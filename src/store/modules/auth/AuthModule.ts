import { computed, observable } from 'mobx';
import { AxiosInstance } from 'axios';
import { IUser } from '@/store/modules/user/IUser';
import { ICredentials } from '@/store/modules/auth/ICredentials';
import api from '@/helpers/api';
import { ITokenResponse } from '@/store/modules/auth/ITokenResponse';
import { ICurrency } from '@/store/modules/currencies/ICurrency';
import { environment } from '../../../../environment';
import { IResponse } from '@/helpers/IResponse';

export class AuthModule {
    @observable private _token: string | null = null;
    @observable private _user: IUser | null = null;
    private api: AxiosInstance;

    public constructor() {
        this.api = api;
    }

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

            // @TODO votes

            this.setUser(response.data.data);
        } catch (e) {
            this.setToken(null);
            this.setUser(null);
        }
    }

    public async signIn(credentials: ICredentials): Promise<void> {
        const response = await this.api.post<IResponse<ITokenResponse>>('login', credentials);

        return this.attempt(response.data.data.token);
    }

    public signOut(): Promise<void> {
        return this.api.post('logout').then(() => {
            this.setToken(null);
            this.setUser(null);
        });
    }
}

const authModule = new AuthModule();

export {
    authModule
};
