import { IContext } from '@/router/IContext';
import { authModule } from '@/store/modules/auth/AuthModule';

export default function auth ({ next, store }: IContext){
    console.log(authModule);
    if (!authModule.authenticated) {
        return next({
            name: 'home'
        })
    }

    return next()
}
