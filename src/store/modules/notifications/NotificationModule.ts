import { observable, computed } from 'mobx';
import { INotification } from '@/store/modules/notifications/INotification';

export class NotificationModule {
    @observable private _list: Array<INotification> = [];

    @computed
    public get list(): Array<INotification> {
        return this._list;
    }

    public addNotification(notification: INotification) {
        this._list.push(notification);
    }

    public removeNotification(notification: INotification): void {
        this._list = this._list.filter(
            (n: INotification) => n.text !== notification.text
        );
    }
}

const notificationModule = new NotificationModule();

export {
    notificationModule
};
