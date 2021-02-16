<template>
    <div class="notifications">
        <Notification
            v-for="(notification, index) in notifications"
            :key="(notification.text || '') + index"
            :notification="notification"
            @close-notification="removeNotification"
        ></Notification>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { INotification } from '@/store/modules/notifications/INotification';
import Notification from '@/components/Notification.vue';

@Component({
    components: {
        Notification
    }
})
export default class Notifications extends Vue {
    @Getter('notifications/list') private notifications!: Array<INotification>;

    private removeNotification(notification: INotification): void {
        this.$store.commit('notifications/REMOVE_NOTIFICATION', notification);
    }
}
</script>
