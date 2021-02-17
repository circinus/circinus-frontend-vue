<template>
    <div id="client-loader" :class="clientModule.loaded && 'hotel-visible'">
        <div id="hotel-container">

            <div class="row d-block align-items-center text-center">
                <iframe v-if="ticket !== null" id="game" :src="this.nitroPath + '/?sso=' + ticket"/>
            </div>

            <div class="client-buttons">
                <button class="client-close rounded-button blue plain" @click="hideClient">
                    <font-awesome-icon icon="backspace" class="client-icon f"></font-awesome-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import bus from '@/helpers/bus';
import { Component, Vue } from 'vue-property-decorator';
import { ITicketResponse } from '@/store/modules/client/ITicketResponse';
import { ComponentOptions } from 'vue';
import { TranslateResult } from 'vue-i18n';
import { photoModule } from '@/store/modules/photos/PhotoModule';
import { clientModule } from '@/store/modules/client/ClientModule';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';
import { environment } from '../../../environment';

@Observer
@Component
export default class Client extends Vue implements ComponentOptions<Vue> {
    private ticket: string | null = null;
    private isSessionActive = false;
    private loadingWidth = 0;
    private hideLoader = false;
    private loadingText: TranslateResult = this.$t('layout.client.starting');
    private url = process.env.VUE_APP_NITRO_ASSETS_URL;
    private authModule = authModule;
    private clientModule = clientModule;
    private photoModule = photoModule;

    public created(): void {
        bus.$on('loadClient', () => {
            this.initialize();
        });
    }

    public mounted(): void {
        if (this.$router.currentRoute.name === 'hotel') {
            this.photoModule.getPhotos();
            this.initialize();
        }
    }

    private hideClient(): void {
        this.clientModule.setClient(!this.clientModule.loaded);
    }

    private getTicket(): Promise<void> {
        return this.clientModule.getTicket().then((response: ITicketResponse) => {
            this.ticket = response.ticket;
        });
    }

    private loadClient(): void {
        if (this.clientModule.pageActive) {
            return;
        }

        this.getTicket().then(() => {
            this.hideLoader = false;
        });
        this.clientModule.setPageActive(true);
    }

    private initialize(): void {
        this.isSessionActive = this.authModule.user?.online === 1;
        if (!this.isSessionActive) {
            this.loadClient();
        }
    }
}
</script>
