<template>
    <div>
        <section class="habbo--section mb-4">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.component.settings.account.avatar.title'" />
                </div>
            </div>
            <b-card class="card--content">
                <form
                    @submit.prevent="submitHotel"
                >
                    <div class="d-flex mb-4 align-items-center">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.friends_can_follow_label'" />
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.block_following === '0'"
                            @change="changeSetting('block_following', !$event)"
                        />
                    </div>
                    <div class="d-flex mb-4 align-items-center">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.friend_requests_label'" />
                             <span v-t="'layout.component.settings.account.avatar.friend_requests_desc'"></span>
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.block_friendrequests === '0'"
                            @change="changeSetting('block_friendrequests', !$event)"
                        />
                    </div>
                    <div class="d-flex mb-4 align-items-center">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.roominvites_label'" />
                             <span v-t="'layout.component.settings.account.avatar.roominvites_desc'"></span>
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.block_roominvites === '0'"
                            @change="changeSetting('block_roominvites', !$event)"
                        />
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.camera_follow_label'" />
                             <span v-t="'layout.component.settings.account.avatar.camera_follow_desc'"></span>
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.block_camera_follow === '0'"
                            @change="changeSetting('block_camera_follow', !$event)"
                        />
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.notifications_label'" />
                             <span v-t="'layout.component.settings.account.avatar.notifications_desc'"></span>
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.block_alerts === '0'"
                            @change="changeSetting('block_alerts', !$event)"
                        />
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.ignore_bots_label'" />
                             <span v-t="'layout.component.settings.account.avatar.ignore_bots_desc'"></span>
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.ignore_bots === '1'"
                            @change="changeSetting('ignore_bots', $event)"
                        />
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <div>
                             <strong class="d-block" v-t="'layout.component.settings.account.avatar.ignore_pets_label'" />
                             <span v-t="'layout.component.settings.account.avatar.ignore_pets_desc'"></span>
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.ignore_pets === '1'"
                            @change="changeSetting('ignore_pets', $event)"
                        />
                    </div>
                    <div class="d-flex">
                        <button
                        type="submit"
                        class="btn btn-primary mt-4 ml-auto"
                        v-t="'layout.component.settings.account.avatar.button_save'"
                        />
                    </div>
                </form>
            </b-card>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BCard, BFormCheckbox, BFormGroup } from 'bootstrap-vue';
import { userModule } from '@/store/modules/users/UserModule';
import { Observer } from 'mobx-vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { IChangableUserSettings } from '@/store/modules/users/interfaces/IChangableUserSettings';
import { notificationModule } from '@/store/modules/notifications/NotificationModule';

@Observer
@Component({
    components: {
        BCard,
        BFormGroup,
        BFormCheckbox,
        ComponentLoader
    }
})
export default class AccountSettings extends Vue {
    private userModule = userModule;

    private settings: IChangableUserSettings = {
        block_following: '0',
        block_friendrequests: '0',
        block_roominvites: '0',
        block_camera_follow: '0',
        block_alerts: '0',
        ignore_bots: '0',
        ignore_pets: '0'
    };

    public async mounted() {
        await this.userModule.getUserSettings();

        if (userModule.userSettings) {
            this.settings = {
                block_following: userModule.userSettings.block_following,
                block_friendrequests: userModule.userSettings.block_friendrequests,
                block_roominvites: userModule.userSettings.block_roominvites,
                block_camera_follow: userModule.userSettings.block_camera_follow,
                block_alerts: userModule.userSettings.block_alerts,
                ignore_bots: userModule.userSettings.ignore_bots,
                ignore_pets: userModule.userSettings.ignore_pets
            };
        }
    }

    private changeSetting(name: keyof IChangableUserSettings, value: boolean) {
        this.settings[name] = value ? '1' : '0';
    }

    private async submitHotel(): Promise<void> {
        this
            .userModule
            .updateGeneralSettings(this.settings)
            .then(() => {
                notificationModule.addNotification({
                    text: this.$t('layout.component.settings.alert_success') as string,
                    type: 'success'
                });
            });
    }
}
</script>
