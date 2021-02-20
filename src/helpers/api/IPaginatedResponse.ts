export interface IPaginatedResponse<T> {
    data: {
        data: T;
    },
    code: number;
}
