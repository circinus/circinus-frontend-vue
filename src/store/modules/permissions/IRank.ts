import { IUser } from '@/store/modules/auth/IUser';

export interface IRank {
    rank_name: string;
    users: Array<IUser>;
}
