import { IUser } from '@/store/modules/auth/IUser';

export interface IUserOfTheWeek {
    created_at: string,
    id: number,
    to_timestamp: number,
    user: IUser;
    user_id: number
}
