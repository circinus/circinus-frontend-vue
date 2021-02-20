<template>
    <div>
        <section class="habbo--section mb-4">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title">Wachtwoord</span>
                </div>
            </div>
            <b-card class="card--content">
                <ValidationObserver v-slot="{ handleSubmit }" ref="passwordObserver">
                    <form
                        @submit.prevent="handleSubmit(submitPassword)"
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
                        <ValidationProvider name="new_password" rules="required" v-slot="{ classes }">
                            <strong>Wat wordt je nieuwe wachtwoord?</strong>
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="new_password"
                                    placeholder="Nieuwe wachtwoord"
                                    v-model="passwordSettings.new_password"
                                />
                                <label for="new_password">Nieuw wachtwoord</label>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="new_password_confirmation" rules="required|confirmed:new_password" v-slot="{ classes }">
                            <strong>Je nieuwe wachtwoord nogmaals, ter controle</strong>
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="new_password_confirmation"
                                    placeholder="Nieuwe wachtwoord opnieuw"
                                    v-model="passwordSettings.new_password_confirmation"
                                />
                                <label for="new_password_confirmation">Nieuwe wachtwoord opnieuw</label>
                            </div>
                        </ValidationProvider>
                        <button type="submit" class="btn btn-primary mt-4">Verander wachtwoord</button>
                    </form>
                </ValidationObserver>
            </b-card>
        </section>
        <section class="habbo--section">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title">E-mailadres</span>
                </div>
            </div>
            <b-card class="card--content">
                <i class="mb-2">Je huidge e-mailadres is</i>
                <ValidationObserver v-slot="{ handleSubmit }" ref="emailObserver">
                    <form
                        @submit.prevent="handleSubmit(submitEmail)"
                        class="d-flex flex-column"
                    >
                        <ValidationProvider name="email_password" rules="required" v-slot="{ classes }">
                            <strong>Wat is je wachtwoord?</strong>
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="email_password"
                                    placeholder="Je wachtwoord"
                                    v-model="emailSettings.password"
                                />
                                <label for="email_password">Je wachtwoord</label>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="new_email" rules="required" v-slot="{ classes }">
                            <strong>Wat wordt je nieuwe e-mailadres?</strong>
                            <div class="form-label-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    :class="classes"
                                    id="new_email"
                                    placeholder="Nieuwe wachtwoord"
                                    v-model="emailSettings.email"
                                />
                                <label for="new_email">Nieuw e-mailadres</label>
                            </div>
                        </ValidationProvider>
                        <button type="submit" class="btn btn-primary mt-4">Verander e-mailadres</button>
                    </form>
                </ValidationObserver>
            </b-card>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BCard, BCardBody } from 'bootstrap-vue';
import { Observer } from 'mobx-vue';
import { ValidationObserver } from 'vee-validate';
import { userModule } from '@/store/modules/users/UserModule';
import { INewPassword } from '@/store/modules/users/INewPassword';
import { ResponseStatus } from '@/helpers/api/ResponseStatus';
import { notificationModule } from '@/store/modules/notifications/NotificationModule';
import { INewEmail } from '@/store/modules/users/INewEmail';
import { authModule } from '@/store/modules/auth/AuthModule';

@Observer
@Component({
    components: {
        BCard,
        BCardBody
    }
})
export default class SecuritySettings extends Vue {
    private authModule = authModule;
    private passwordSettings: INewPassword = {
        password: '',
        new_password: '',
        new_password_confirmation: ''
    }

    private emailSettings: INewEmail = {
        mail: '',
        password: ''
    }

    public $refs!: {
        passwordObserver: InstanceType<typeof ValidationObserver>;
        emailObserver: InstanceType<typeof ValidationObserver>;
    }

    private async submitPassword(): Promise<void> {
        const response = await userModule.updatePassword(this.passwordSettings);

        if (response.status === ResponseStatus.OK) {
            notificationModule.addNotification({
                text: 'Wachtwoord gewijzigd',
                type: 'success'
            });
            this.passwordSettings = {
                password: '',
                new_password: '',
                new_password_confirmation: ''
            };
            this.$refs.passwordObserver.reset();
        }
    }

    private async submitEmail(): Promise<void> {
        const response = await userModule.updateEmail(this.emailSettings);

        if (response.status === ResponseStatus.OK) {
            notificationModule.addNotification({
                text: 'E-mailadres gewijzigd',
                type: 'success'
            });
            this.emailSettings = {
                password: '',
                mail: ''
            };
            this.$refs.emailObserver.reset();
        }
    }
}
</script>
