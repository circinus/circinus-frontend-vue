import { NavigationGuardNext, Route } from 'vue-router';

export interface IContext {
    to: Route;
    from: Route;
    next: NavigationGuardNext;
}
