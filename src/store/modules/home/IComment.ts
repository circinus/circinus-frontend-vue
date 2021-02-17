import { IUser } from '@/store/modules/user/IUser';

export interface IComment {
    id: number;
    content: string;
    user: IUser;
}
