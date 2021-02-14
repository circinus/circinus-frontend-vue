<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';
import { INotification } from '@/store/modules/notifications/INotification';

@Component
export default class Notification extends Vue implements ComponentOptions<Vue> {
    @Prop({ required: true }) private notification!: INotification;

    public mounted(): void {
        if (this.notification.type === 'success') {
            this.$iziToast.success({
                title: 'Success!',
                message: this.notification.text,
                icon: "fas fa fa-check-circle",
                balloon: false,
                close: true,
                pauseOnHover: true,
                displayMode: 1
            });
        } else {
            this.$iziToast.error({
                title: 'Oops..',
                message: this.notification.text,
                icon: "fas fa fa-exclamation-circle",
                balloon: false,
                close: true,
                pauseOnHover: true,
                displayMode: 1
            });
        }
    }
}
</script>
