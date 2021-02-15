<template>
    <div id="header--image" class="row">
        <div class="d-flex flex-column justify-content-center align-items-center my-4" style="position: absolute; width: 100%;">

            <p id="header--description">
                {{$t("layout.header.description")}}
            </p>

            <router-link class="btn btn--light w-25" v-if="!authModule.authenticated" :to="{ name: 'register' }" v-t="'layout.header.create_account'"></router-link>
            <button class="btn btn--light w-25" v-if="authModule.authenticated" @click="toggleClientLoader" v-t="'layout.header.go_hotel'"></button>
        </div>
    </div>
</template>

<script lang="ts">
import bus from '@/helpers/bus'
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { IUser } from '@/store/modules/user/IUser';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';

@Observer
@Component
export default class Header extends Vue {
    private authModule = authModule;

    @Getter('client/loaded') private client!: boolean;
    @Action('client/setClient') private setClient!: (loaded: boolean) => void;

    private toggleClientLoader() {
        this.setClient(!this.client);
        bus.$emit('loadClient');
    }
}
</script>

<style scoped>

</style>
