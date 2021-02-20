import { ICurrency } from '@/store/modules/currencies/ICurrency';

export interface IUser {
    username: string;
    mail: string;
    look: string;
    online: number;
    credits: number;
    currencies: Array<ICurrency>;
    last_login: number;
    last_online: number;
    motto: string;
    gender: 'M' | 'F';
    rank: number;
}
