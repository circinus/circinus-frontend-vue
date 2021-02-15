import { IError } from '@/helpers/IError';

export interface IErrorResponse {
    status: number;
    errors: Array<IError>;
}
