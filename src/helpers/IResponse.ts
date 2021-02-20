export interface IResponse<T> {
    code: number;
    status: string;
    data: T;
 }
