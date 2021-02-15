import { ICurrency } from '@/store/modules/currencies/ICurrency';

export interface IUser {
    username: string;
    look: string;
    online: number;
    credits: number;
    currencies: Array<ICurrency>;
}
