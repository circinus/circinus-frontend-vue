<template>
    <div>
        <section class="habbo--section mb-4">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title">Hotelinstellingen</span>
                </div>
            </div>
            <b-card class="card--content">
                <form
                    @submit.prevent="submitHotel"
                    class="d-flex flex-column"
                >
                    <div class="d-flex mb-4 align-items-center">
                        <div>
                             <strong class="d-block">Vrienden mogen je volgen</strong>
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
                             <strong class="d-block">Vriendschapsverzoeken</strong>
                             Sta het toe dat onbekenden je vriendschapsverzoeken sturen
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
                             <strong class="d-block">Kameruitnodigingen</strong>
                             Sta het toe dat vrienden je een uitnodiging mogen sturen voor hun kamer
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
                             <strong class="d-block">Camera volgt je</strong>
                             Sta het toe dat de camera in het hotel gefocust blijft op je avatar
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
                             <strong class="d-block">Notificaties</strong>
                             Sta het toe dat je notificaties krijgt van gebeurtenissen, bijvoorbeeld wanneer een vriend online komt
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
                             <strong class="d-block">Negeer bots</strong>
                             Hoor bots niet praten
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
                             <strong class="d-block">Negeer huisdieren</strong>
                             Hoor huisdieren niet praten
                        </div>
                        <b-form-checkbox
                            class="ml-auto"
                            switch
                            size="lg"
                            :checked="settings.ignore_pets === '1'"
                            @change="changeSetting('ignore_pets', $event)"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Verander instellingen</button>
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
