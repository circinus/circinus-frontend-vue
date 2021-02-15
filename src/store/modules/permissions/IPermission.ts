import { IUser } from '@/store/modules/user/IUser'

export interface IPermission {
    rank_name: string;
    users: Array<IUser>;
}
