<template>
    <div>
        <section id="register" class="habbo--section mt-5">

            <div class="row register--body">

                <div class="col-md-6">

                    <div class="d-flex flex-row mb-4">
                        <img class="mr-2 object-contain image-pixelated"
                             src="@/assets/images/web/register/hotel-button-medium-icon.gif" alt="Register"/>
                        <div class="d-inline-flex flex-column justify-content-center">
                            <span class="section-title">Registreren op Meteor</span>
                            <span class="section-description">Maak je eigen account aan!</span>
                        </div>
                    </div>

                    <div class="card card--content">
                        <div class="card-body">
                            <div class="row text-left">
                                <div class="col-md-12">
                                    <ValidationObserver v-slot="{ handleSubmit }">
                                        <form class="d-flex flex-column " @submit.prevent="handleSubmit(submit)">

                                            <ValidationProvider name="username" rules="required|min:6"
                                                                v-slot="{ classes, errors }">
                                                <div class="form-label-group">
                                                    <input type="text" class="form-control" :class="classes"
                                                           id="usernameRegister" placeholder="Username"
                                                           v-model="form.username">
                                                    <label for="usernameRegister">Username</label>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </div>

                                            </ValidationProvider>

                                            <ValidationProvider name="password"
                                                                :rules="{required: true, min: 6, regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/}"
                                                                v-slot="{ classes, errors }" vid="passwordRegister">
                                                <div class="form-label-group">
                                                    <input type="password" class="form-control" :class="classes"
                                                           id="passwordRegister" placeholder="Password"
                                                           v-model="form.password">
                                                    <label for="passwordRegister">Password</label>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>

                                            <ValidationProvider name="passwordRepeat"
                                                                :rules="{required: true, min: 6, confirmed: 'passwordRegister', regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/}"
                                                                v-slot="{ classes, errors }">
                                                <div class="form-label-group">
                                                    <input type="password" class="form-control" :class="classes"
                                                           id="passwordRepeatRegister"
                                                           placeholder="Password confirmation"
                                                           v-model="form.password_confirmation">
                                                    <label for="passwordRepeatRegister">Password</label>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>

                                            <ValidationProvider name="email" rules="required|email"
                                                                v-slot="{ classes, errors }">
                                                <div class="form-label-group">
                                                    <input type="email" class="form-control" :class="classes"
                                                           id="emailRegister" placeholder="Email adress"
                                                           v-model="form.mail">
                                                    <label for="emailRegister">Email adress</label>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>

                                            <ValidationProvider name="gender" rules="required">
                                                <select class="form-control display" v-model="form.gender"
                                                        @change="changeGender($event)">
                                                    <option value="" :selected="true" disabled>Gender</option>
                                                    <option
                                                        v-for="gender in genders"
                                                        :value="gender.value"
                                                        :key="gender.value"
                                                        :data-gender="gender.gender"
                                                    >
                                                        {{ gender.text }}
                                                    </option>
                                                </select>
                                            </ValidationProvider>

                                            <button type="submit" class="btn btn-primary btn-block mt-4"><span>Create Account</span>
                                            </button>
                                        </form>
                                    </ValidationObserver>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">

                    <div class="d-flex flex-row mb-4">
                        <img class="mr-2 object-contain image-pixelated"
                             src="@/assets/images/web/register/progress_habbos.gif" alt="Look"/>
                        <div class="d-inline-flex flex-column justify-content-center">
                            <span class="section-title">Creeër je persoonlijkheid</span>
                            <span class="section-description">Kies de look die bij jouw past!</span>
                        </div>
                    </div>

                    <div class="col-md-12 p-0 flex-column">
                        <div class="card card card--content flex-column">
                            <div class="card-body">
                                <div class="row text-left">
                                    <div class="col-md-8">
                                        Na het aanmaken van je account wordt doorgelinkt naar ons hotel. Daar kun je je
                                        Meteor poppetje en naam geven en persionaliseren van je uiterlijk.
                                        Ook kun je een startkamer kiezen waar je eerste meubeltjes in staan om zo een
                                        beeld te geven wat je hier allemaal kunt doen!

                                        <div class="row mt-4">
                                            <div class="pl-5" v-for="(item, index) in looks" :key="index"
                                                 @click="changeAvatar(item)">
                                                <img :class="{selected:item === form.look}" class="looks"
                                                     v-bind:src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + item + '&headonly=1'"/>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <div class="selected-look" :data-random="avatarPreload">
                                            <img style="margin-left: 35px;" v-if="!form.look"
                                                 src="https://www.habbo.com/habbo-imaging/avatarimage?figure=&size=l">
                                            <img style="margin-left: 35px;" v-if="form.look"
                                                 :src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + form.look + '&amp;size=l'">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { INewUser } from '@/store/modules/users/INewUser';
import Looks from '@/components/Auth/Register/Looks.vue';
import { Observer } from 'mobx-vue';
import { authModule } from '@/store/modules/auth/AuthModule';

@Observer
@Component({
    components: {
        Looks
    }
})
export default class Register extends Vue {
    private authModule = authModule;
    private avatarPreload = 8;
    private looks: Array<string> = [];
    private genders = [
        { value: 'M', text: 'Boys', gender: 'boys' },
        { value: 'F', text: 'Girls', gender: 'girls' }
    ];

    private form: INewUser = {
        username: '',
        password: '',
        password_confirmation: '',
        mail: '',
        gender: '',
        look: ''
    };

    private submit(): void {
        this.authModule.register(this.form).then(() => {
            this.$router.replace({
                name: 'dashboard'
            });
        });
    }

    private preLoad(): void {
        if (this.avatarPreload > 0) {
            setTimeout(() => {
                this.avatarPreload -= 1;
                this.preLoad();
            }, 50);
        } else {
            this.avatarPreload = 8;
        }
    }

    private changeAvatar(chosenLook: string): void {
        if (this.form.look === chosenLook) {
            return;
        }

        this.form.look = chosenLook;
        this.preLoad();
    }

    private changeGender(event: Event): void {
        this.authModule.getRegisterLooks(
            (event.target as HTMLSelectElement).options[(event.target as HTMLSelectElement).selectedIndex].value
        ).then((response) => {
            this.form.look = response[1] ?? response[5];
            this.looks = response;
            this.preLoad();
        });
    }
}
</script>
