<template>
    <div>
        <section class="habbo--section mb-4">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title">Gebruikersnaam</span>
                </div>
            </div>
            <b-card class="card--content">
                <ValidationObserver v-slot="{ handleSubmit }" ref="passwordObserver">
                    <form
                        @submit.prevent="handleSubmit(submit)"
                        class="d-flex flex-column"
                    >
                        <ValidationProvider name="password" rules="required" v-slot="{ classes }">
                            <strong>Wat is je huidige wachtwoord?</strong>
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="password"
                                    placeholder="Je huidige wachtwoord"
                                    v-model="passwordSettings.password"
                                />
                                <label for="password">Je huidige wachtwoord</label>
                            </div>
                        </ValidationProvider>
                    </form>
                </ValidationObserver>
            </b-card>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BCard, BFormGroup } from 'bootstrap-vue';
import { userModule } from '@/store/modules/users/UserModule';
import { Observer } from 'mobx-vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { IChangableUserSettings } from '@/store/modules/users/interfaces/IChangableUserSettings';

@Observer
@Component({
    components: {
        BCard,
        BFormGroup,
        ComponentLoader
    }
})
export default class AccountSettings extends Vue {
    private userModule = userModule;

    private settings: IChangableUserSettings = {
        block_following: '0',
        block_friendrequests: '0',
        block_roominvites: '0',
        block_camera_following: '0',
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
                block_camera_following: userModule.userSettings.block_camera_following,
                block_alerts: userModule.userSettings.block_alerts,
                ignore_bots: userModule.userSettings.ignore_bots,
                ignore_pets: userModule.userSettings.ignore_pets
            };
        }
    }

    private async submitAccount(): Promise<void> {
        //
    }
}
</script>
