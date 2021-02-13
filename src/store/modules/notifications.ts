import { Module } from 'vuex';
import { IRootState } from '@/store';

export interface INotification {
    text: string;
}

export interface IState {
    list: Array<INotification>;
}

export enum NotificationTypes {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
}

const notifications: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        list: []
    },

    mutations: {
        [NotificationTypes.ADD_NOTIFICATION](state: IState, payload: INotification) {
            state.list.push(payload);
        },

        [NotificationTypes.REMOVE_NOTIFICATION](state: IState, payload: INotification) {
            state.list = state.list.filter(
                (notification: INotification) => notification.text !== payload.text
            );
        }
    },

    getters: {
        list(state: IState): Array<INotification> {
            return state.list
        }
    }
}

export default notifications;
