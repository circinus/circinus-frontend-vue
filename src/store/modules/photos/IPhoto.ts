import { IUser } from '@/store/modules/auth/IUser';

export interface IPhoto {
    id: number;
    user: IUser;
    likes: number;
    dislikes: number;
    timestamp: number;
}
