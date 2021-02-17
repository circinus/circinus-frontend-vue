import { observable } from 'mobx';
import { LoadingState } from './LoadingState';

export class LoadingModule {
    @observable protected _loadingStates: Record<string, LoadingState> = {};

    public getLoadingState(key: string): LoadingState | undefined {
        return this._loadingStates[key];
    }

    public setLoadingState(key: string, state: LoadingState): void {
        this._loadingStates[key] = state;
    }

    public isLoading(key: string): boolean {
        return this.getLoadingState(key) === LoadingState.LOADING;
    }
}
