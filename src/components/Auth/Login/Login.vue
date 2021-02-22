<template>
    <b-list-group class="navbar-nav ml-auto" v-if="!authModule.authenticated">
        <b-list-group-item class="dropdown mb-xl-0 mb-lg-0 mb-md-0 mb-sm-4 nav-item">

            <b-link v-t="'layout.header.login'" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></b-link>

            <div class="dropdown-menu user--login p-4" aria-labelledby="dropdownMenuLink">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <b-form @submit.prevent="handleSubmit(submit)">

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

                        <b-button block variant="warning" type="submit">Login</b-button>
                    </b-form>
                </ValidationObserver>
            </div>
        </b-list-group-item>

        <b-list-group-item class="p-0">
            <router-link :to="{ name: 'register' }">
                <b-button variant="warning" v-t="'layout.header.create_account'"></b-button>
            </router-link>
        </b-list-group-item>
    </b-list-group>

    <b-list-group v-else-if="authModule.user" class="navbar-nav ml-auto">
        <b-list-group-item class="nav-item p-0">

            <b-dropdown variant="outline-dark">
                <template #button-content>
                    <img
                        :src="avatarImaging + authModule.user.look + '&amp;gesture=sml&size=s&amp;headonly=1'"
                        :alt="authModule.user.username" class="pixelated"
                    >
                    {{ authModule.user.username }}
                </template>
                <b-dropdown-item>
                    <router-link class="dropdown-item" :to="{ name: 'settings' }" v-t="'layout.header.settings'"></router-link>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                    <router-link class="dropdown-item" :to="{ name: 'logout' }" v-on:click.native="signOut" v-t="'layout.header.logout'"></router-link>
                </b-dropdown-item>
            </b-dropdown>
        </b-list-group-item>
    </b-list-group>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { BDropdownDivider, BDropdownItem, BListGroup, BListGroupItem, BDropdown, BButton, BLink, BForm } from 'bootstrap-vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';
import { ICredentials } from '@/store/modules/auth/ICredentials';
import { environment } from '../../../../environment';

@Observer
@Component({
    components: {
        ComponentLoader,
        BDropdownDivider,
        BListGroupItem,
        BDropdownItem,
        BListGroup,
        BDropdown,
        BButton,
        BLink,
        BForm
    }
})
export default class Login extends Vue {
    private authModule = authModule;
    private avatarImaging = environment.SITE.FIGUREIMAGING

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
