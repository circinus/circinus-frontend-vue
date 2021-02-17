import { IUser } from '@/store/modules/auth/IUser';

export interface IPermission {
    rank_name: string;
    users: Array<IUser>;
}
