import { IUser } from '@/store/modules/auth/IUser';

export interface IArticle {
    id: number;
    title: string;
    description: string;
    content: string;
    user: IUser;
    slug: string;
    image: string;
}
