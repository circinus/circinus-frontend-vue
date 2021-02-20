import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { INewPassword } from '@/store/modules/users/INewPassword';
import { IUser } from '@/store/modules/auth/IUser';
import { AxiosResponse } from 'axios';
import { INewEmail } from '@/store/modules/users/INewEmail';
import { observable } from 'mobx';
import { IUserSettings } from '@/store/modules/users/IUserSettings';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { IChangableUserSettings } from '@/store/modules/users/interfaces/IChangableUserSettings';
import { ValidationError } from '@/store/errors/ValidationError';

export class UserModule extends LoadingModule {
    @observable private _userSettings?: IUserSettings;

    public get userSettings(): IUserSettings | undefined {
        return this._userSettings;
    }

    public async getUserSettings(): Promise<void> {
        this.setLoadingState('get-user-settings', LoadingState.LOADING);

        const response = await api.get<IUserSettings>('user/settings');

        this.setLoadingState('get-user-settings', LoadingState.LOADED);

        if (response.code === ResponseStatus.OK) {
            this._userSettings = response.data;
        }
    }

    public async updateGeneralSettings(settings: IChangableUserSettings): Promise<void> {
        this.setLoadingState('update-user-settings', LoadingState.LOADING);

        const response = await api.put<IUserSettings>('user/settings/change_general_settings', settings);

        if (response.code === ResponseStatus.UNPROCESSABLE_ENTITY) {
            return Promise.reject(new ValidationError(response.errors));
        }

        if (response.code === ResponseStatus.OK) {
            this._userSettings = response.data;

            return Promise.resolve();
        }

        return Promise.reject(new Error());
    }

    public async updatePassword(newPassword: INewPassword): Promise<AxiosResponse<IUser>> {
        this.setLoadingState('update-password', LoadingState.LOADING);

        const response = await api.put<IUser>('user/settings/change_password', newPassword);

        this.setLoadingState('update-password', LoadingState.LOADED);

        return response;
    }

    public async updateEmail(newEmail: INewEmail): Promise<AxiosResponse<IUser>> {
        this.setLoadingState('update-email', LoadingState.LOADING);

        const response = await api.put<IUser>('user/settings/change_email', newEmail);

        this.setLoadingState('update-email', LoadingState.LOADED);

        return response;
    }
}

const userModule = new UserModule();

export {
    userModule
};
