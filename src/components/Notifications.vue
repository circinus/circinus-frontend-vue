<template>
    <div class="notifications">
        <Notification
            v-for="(notification, index) in notificationModule.list"
            :key="(notification.text || '') + index"
            :notification="notification"
            @close-notification="removeNotification"
        ></Notification>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';
import { INotification } from '@/store/modules/notifications/INotification';
import Notification from '@/components/Notification.vue';
import { notificationModule } from '@/store/modules/notifications/NotificationModule';

@Observer
@Component({
    components: {
        Notification
    }
})
export default class Notifications extends Vue {
    private notificationModule = notificationModule;

    private removeNotification(notification: INotification): void {
        this.notificationModule.removeNotification(notification);
    }
}
</script>
