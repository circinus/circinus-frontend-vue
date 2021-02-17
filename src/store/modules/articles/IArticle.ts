import { IUser } from '@/store/modules/user/IUser';

export interface IArticle {
    id: number;
    title: string;
    description: string;
    content: string;
    user: IUser;
    slug: string;
    image: string;
}
