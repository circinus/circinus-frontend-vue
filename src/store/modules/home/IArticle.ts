import { IUser } from '@/store/modules/user/IUser';

export interface IArticle {
    id: number;
    title: string;
    description: string;
    user: IUser;
    slug: string;
    image: string;
}
