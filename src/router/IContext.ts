import { NavigationGuardNext, Route } from 'vue-router'
import { Store } from 'vuex'
import { IRootState } from '@/store'

export interface IContext {
    to: Route;
    from: Route;
    next: NavigationGuardNext;
    store: Store<IRootState>;
}
