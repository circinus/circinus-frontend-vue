import { IContext } from '@/router/IContext';

export type IMiddleware = (context: IContext) => void;
