import { LoadingModule } from '@/store/modules/loading/LoadingModule';
import { LoadingState } from '@/store/modules/loading/LoadingState';
import api from '@/helpers/api';
import { INewPassword } from '@/store/modules/users/INewPassword';
import { IUser } from '@/store/modules/auth/IUser';
import { IResponse } from '@/helpers/IResponse';
import { AxiosResponse } from 'axios';
import { INewEmail } from '@/store/modules/users/INewEmail';
import { observable } from 'mobx';
import { IUserSettings } from '@/store/modules/users/IUserSettings';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';

export class UserModule extends LoadingModule {
    @observable private _userSettings?: IUserSettings;

    public get userSettings(): IUserSettings | undefined {
        return this._userSettings;
    }

    public async getUserSettings(): Promise<void> {
        this.setLoadingState('get-user-settings', LoadingState.LOADING);

        const response = await api.get<IResponse<IUserSettings>>('suser/settings');

        this.setLoadingState('get-user-settings', LoadingState.LOADED);

        if (response.status === ResponseStatus.OK) {
            this._userSettings = response.data.data;
        }
    }

    public async updatePassword(newPassword: INewPassword): Promise<AxiosResponse<IResponse<IUser>>> {
        this.setLoadingState('update-password', LoadingState.LOADING);

        const response = await api.put<IResponse<IUser>>('user/settings/change_password', newPassword);

        this.setLoadingState('update-password', LoadingState.LOADED);

        return response;
    }

    public async updateEmail(newEmail: INewEmail): Promise<AxiosResponse<IResponse<IUser>>> {
        this.setLoadingState('update-email', LoadingState.LOADING);

        const response = await api.put<IResponse<IUser>>('user/settings/change_email', newEmail);

        this.setLoadingState('update-email', LoadingState.LOADED);

        return response;
    }
}

const userModule = new UserModule();

export {
    userModule
};
