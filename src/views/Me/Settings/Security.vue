<template>
    <div>
        <section class="habbo--section mb-4">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.component.settings.security.password.title'" />
                </div>
            </div>
            <b-card class="card--content">
                <ValidationObserver v-slot="{ handleSubmit }" ref="passwordObserver">
                    <form @submit.prevent="handleSubmit(submitPassword)">
                        <ValidationProvider name="password" rules="required" v-slot="{ classes }">
                            <strong v-t="'layout.component.settings.security.password.current_password'" />
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="password"
                                    :placeholder="$t('layout.component.settings.security.password.current_password_label')"
                                    v-model="passwordSettings.password"
                                />
                                <label for="password" v-t="'layout.component.settings.security.password.current_password_label'" />
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="new_password" rules="required" v-slot="{ classes }">
                            <strong v-t="'layout.component.settings.security.password.new_password'" />
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="new_password"
                                    :placeholder="$t('layout.component.settings.security.password.new_password_label')"
                                    v-model="passwordSettings.new_password"
                                />
                                <label for="new_password" v-t="'layout.component.settings.security.password.new_password_label'" />
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="new_password_confirmation" rules="required|confirmed:new_password" v-slot="{ classes }">
                            <strong v-t="'layout.component.settings.security.password.new_password_confirmation'" />
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="new_password_confirmation"
                                    :placeholder="$t('layout.component.settings.security.password.new_password_confirmation_label')"
                                    v-model="passwordSettings.new_password_confirmation"
                                />
                                <label for="new_password_confirmation" v-t="'layout.component.settings.security.password.new_password_confirmation_label'" />
                            </div>
                        </ValidationProvider>
                        <div class="d-flex">
                            <button
                            type="submit"
                            class="ml-auto btn btn-primary mt-4"
                            v-t="'layout.component.settings.security.password.button_save'"
                            />
                        </div>
                    </form>
                </ValidationObserver>
            </b-card>
        </section>
        <section class="habbo--section">
            <div class="d-flex flex-row mb-4">
                <i class="icon--settings mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.component.settings.security.email.title'" />
                </div>
            </div>
            <b-card class="card--content">
                <i class="mb-4 d-block">
                    {{ $t('layout.component.settings.security.email.current_email', { email: authModule.user.mail }) }}
                </i>
                <ValidationObserver v-slot="{ handleSubmit }" ref="emailObserver">
                    <form @submit.prevent="handleSubmit(submitEmail)">
                        <ValidationProvider name="email_password" rules="required" v-slot="{ classes }">
                            <strong v-t="'layout.component.settings.security.email.current_password'" />
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    class="form-control"
                                    :class="classes"
                                    id="email_password"
                                    :placeholder="$t('layout.component.settings.security.email.current_password_label')"
                                    v-model="emailSettings.password"
                                />
                                <label for="email_password" v-t="'layout.component.settings.security.email.current_password_label'" />
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="new_email" rules="required" v-slot="{ classes }">
                            <strong v-t="'layout.component.settings.security.email.new_email'" />
                            <div class="form-label-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    :class="classes"
                                    id="new_email"
                                    :placeholder="$t('layout.component.settings.security.email.new_email_label')"
                                    v-model="emailSettings.email"
                                />
                                <label for="new_email" v-t="'layout.component.settings.security.email.new_email_label'" />
                            </div>
                        </ValidationProvider>
                        <div class="d-flex">
                            <button
                                type="submit"
                                class="ml-auto btn btn-primary mt-4"
                                v-t="'layout.component.settings.security.email.button_save'"
                            />
                        </div>
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

        if (response.code === ResponseStatus.OK) {
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

        if (response.code === ResponseStatus.OK) {
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
