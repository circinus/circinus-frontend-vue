<template>
    <b-container fluid class="text-light text-center container-fluid">
        <b-row id="header--image">
            <b-col class="d-flex flex-column justify-content-center align-items-center my-4"
                   style="position: absolute; width: 100%;">

                <p id="header--description">
                    {{ $t("layout.header.description") }}
                </p>

                <router-link class="btn btn--light w-25" v-if="!authModule.authenticated" :to="{ name: 'register' }"
                             v-t="'layout.header.create_account'"></router-link>
                <button class="btn btn--light w-25" v-if="authModule.authenticated" @click="toggleClientLoader"
                        v-t="'layout.header.go_hotel'"></button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import bus from '@/helpers/bus';
import { Component, Vue } from 'vue-property-decorator';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';
import { clientModule } from '@/store/modules/client/ClientModule';
import { BRow, BCol, BContainer } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        BContainer,
        BRow,
        BCol
    }
})
export default class Header extends Vue {
    private authModule = authModule;
    private clientModule = clientModule;

    private toggleClientLoader() {
        this.clientModule.setClient(!this.clientModule.loaded);
        bus.$emit('loadClient');
    }
}
</script>

<style scoped>

</style>
