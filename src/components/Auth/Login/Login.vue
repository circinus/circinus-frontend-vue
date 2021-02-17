<template>
    <ul class="navbar-nav ml-auto" v-if="!authModule.authenticated">
        <li class="nav-item dropdown mb-xl-0 mb-lg-0 mb-md-0 mb-sm-4">
            <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
               v-t="'layout.header.login'"></a>
            <div class="dropdown-menu user--login p-4" aria-labelledby="dropdownMenuLink">

                <ValidationObserver v-slot="{ handleSubmit }">
                    <form class="d-flex flex-column " @submit.prevent="handleSubmit(submit)">

                        <ValidationProvider name="username" rules="required" v-slot="{ classes }">
                            <div class="form-label-group">
                                <input type="text" class="form-control" :class="classes" id="username"
                                       placeholder="Username" v-model="form.username" required="" autofocus="">
                                <label for="username">Username</label>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="password" rules="required" v-slot="{ classes }">
                            <div class="form-label-group">
                                <input type="password" class="form-control" :class="classes" name="password"
                                       placeholder="Password" id="password" v-model="form.password">
                                <label for="password">Password</label>
                            </div>
                        </ValidationProvider>

                        <button class="btn btn-primary btn-block" type="submit">
                            <span>Login</span>
                        </button>
                    </form>
                </ValidationObserver>
            </div>
        </li>
        <li class="nav-item">
            <router-link class="nav-link btn btn-warning" :to="{ name: 'register' }"
                         v-t="'layout.header.create_account'"></router-link>
        </li>
    </ul>

    <ul v-else-if="authModule.user" class="navbar-nav ml-auto">
        <li class="nav-item">
            <div class="dropdown">
                <button type="button" class="btn btn--light-dark dropdown-toggle" data-toggle="dropdown">
                    <img src="https://habbo.com.br/habbo-imaging/avatarimage?figure=hr-802-37.hd-185-1.ch-804-82.lg-280-73.sh-3068-1408-1408.wa-2001&amp;gesture=sml&size=s&amp;headonly=1" alt="Raizers" class="pixelated">
                    {{ authModule.user.username }}
                </button>
                <div class="dropdown-menu">
                    <router-link class="dropdown-item" :to="{ name: 'logout' }" v-on:click.native="signOut"
                                 v-t="'layout.header.logout'"></router-link>
                </div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';
import { ICredentials } from '@/store/modules/auth/ICredentials';

@Observer
@Component({
    components: {
        ComponentLoader
    }
})
export default class Login extends Vue {
    private authModule = authModule;

    public form: ICredentials = {
        username: '',
        password: ''
    }

    private submit(): void {
        this.authModule.signIn(this.form).then(() => {
            this.$router.replace({
                name: 'dashboard'
            });
        });
    }

    private signOut() {
        this.authModule.signOut().then(() => {
            this.$router.push('/');
        });
    }
}
</script>
