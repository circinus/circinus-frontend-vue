import { IContext } from '@/router/IContext';
import { authModule } from '@/store/modules/auth/AuthModule';

export default function guest ({ next }: IContext){
    if(authModule.authenticated){
        return next({
            name: 'dashboard'
        });
    }

    return next();
}
