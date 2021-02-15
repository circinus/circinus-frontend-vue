import { IContext } from '@/router/IContext';

export default function guest({ next, store }: IContext) {
    if (store.getters['auth/authenticated']) {
        return next({
            name: 'dashboard'
        });
    }

    return next();
}
