import { IUser } from '@/store/modules/user/IUser'

export interface IComment {
    content: string;
    user: IUser;
}
