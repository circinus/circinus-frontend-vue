import { IUser } from '@/store/modules/auth/IUser';

export interface IComment {
    id: number;
    content: string;
    user: IUser;
}
