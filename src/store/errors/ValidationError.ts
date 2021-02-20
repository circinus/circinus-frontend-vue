export interface Error {
    field: string;
    message: string;
}

export class ValidationError extends Error {
    private _errors?: Array<Error>;

    public constructor(errors: Array<Error> | undefined) {
        super('De opgegeven data is incorrect');

        this._errors = errors;
    }

    public getErrors(): void {
        //
    }
}
