import { ICurrency } from '@/store/modules/currencies/ICurrency';

export interface IUser {
    id: number,
    username: string;
    motto: string,
    look: string;
    online: number;
    credits: number;
    currencies: Array<ICurrency>;
}
