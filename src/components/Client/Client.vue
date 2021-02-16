<template>
    <div id="client-loader" :class="this.client && 'hotel-visible'">
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
import { Action, Getter } from 'vuex-class';
import { IUser } from '@/store/modules/user/IUser';
import { ITicketResponse } from '@/store/modules/client/ITicketResponse';
import { ComponentOptions } from 'vue';
import { TranslateResult } from 'vue-i18n';
import { IPhoto } from '@/store/modules/home/IPhoto';
import { environment } from '../../../environment';

@Component
export default class Client extends Vue implements ComponentOptions<Vue> {
    private ticket: string | null = null;
    private isSessionActive = false;
    private loadingWidth = 0;
    private hideLoader = false;
    private loadingText: TranslateResult = this.$t('layout.client.starting');
    private nitroPath = environment.SITE.NITROPATH;
    @Getter('auth/user') private user!: IUser;
    @Getter('client/loaded') private client!: boolean;
    @Getter('client/active') private active!: boolean;
    @Getter('photos/photos') private photo!: Array<IPhoto>;

    @Action('client/setClient') private setClient!: (loaded: boolean) => void;
    @Action('client/setActive') private setActive!: (active: boolean) => void;
    @Action('client/setTicket') private setTicket!: () => Promise<ITicketResponse>;
    @Action('photos/setPhotos') private setPhotos!: () => void;

    public created(): void {
        bus.$on('loadClient', () => {
            this.initialize();
        });
    }

    public mounted(): void {
        if (this.$router.currentRoute.name === 'hotel') {
            this.setPhotos();
            this.initialize();
        }
    }

    private hideClient(): void {
        this.setClient(!this.client);
    }

    private getTicket(): Promise<void> {
        return this.setTicket().then((response: ITicketResponse) => {
            this.ticket = response.ticket;
        });
    }

    private loadClient(): void {
        if (this.active) {
            return;
        }

        this.getTicket().then(() => {
            this.hideLoader = false;
        });
        this.setActive(true);
    }

    private initialize(): void {
        this.isSessionActive = this.user.online === 1;
        if (!this.isSessionActive) {
            this.loadClient();
        }
    }
}
</script>
