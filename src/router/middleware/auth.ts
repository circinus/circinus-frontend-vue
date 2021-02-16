import { IContext } from '@/router/IContext';

export default function auth({ next, store }: IContext) {
    if (!store.getters['auth/authenticated']) {
        return next({
            name: 'home'
        });
    }

    return next();
}
