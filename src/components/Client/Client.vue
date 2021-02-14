<template>
    <div id="client-loader" v-bind:class="classObject">
        <div id="hotel-container">

            <div v-if="client && hideLoader" class="loading-container">
                <div id="loading-background"></div>
                <div class="loading-content" >

                    <div class="container vertical-center" v-if="this.photo">
                        <div class="row">
                            <div class="col-4">
                                <div class="photo" style="margin-left: 130px;" v-bind:style="{ backgroundImage: 'url(' + this.photo[random()].url + ')' }"></div>
                            </div>
                            <div class="col-4">
                                <div class="photo" style="margin-top: -85px;z-index: 2;position: inherit;" v-bind:style="{ backgroundImage: 'url(' + this.photo[random()].url + ')' }"></div>
                            </div>
                            <div class="col-4">
                                <div class="photo" style="margin-left: -115px;" v-bind:style="{ backgroundImage: 'url(' + this.photo[random()].url + ')' }"></div>
                            </div>
                        </div>
                    </div>

                    <div class="container vertical-center" style="min-height: 0% !important;">
                        <div class="row">
                            <div class="col-4">
                                <div class="loading_bar">
                                    <div class="text">{{this.loadingText}}</div>
                                    <div class="percent" id="loader_bar" :style="{width: loadingWidth + '%'}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div :id="flashDetect" v-if="flashDetect" class="row d-block align-items-center text-center">
                <iframe v-if="ticket !== null" id="game" :src="url + '/?sso=' + ticket" />
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
import * as FlashDetect from 'flash-detect';
import bus from '@/helpers/bus'
import {Component, Vue} from "vue-property-decorator";
import { Action, Getter } from 'vuex-class';
import { IUser } from '@/store/modules/user/IUser';
import { IPhoto } from '@/store/modules/home/photos';
import { ITicketResponse } from '@/store/modules/client/ITicketResponse';
import { ComponentOptions } from 'vue';
import { TranslateResult } from 'vue-i18n';

@Component
export default class Client extends Vue implements ComponentOptions<Vue> {
    private ticket: string = '';
    private isSessionActive = false;
    private loadingWidth = 0;
    private hideLoader = false;
    private loadingText: TranslateResult = this.$t('layout.client.starting');
    private url = process.env.VUE_APP_NITRO_ASSETS_URL;
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
        })
    }

    public mounted(): void {
        if(this.$router.currentRoute.name === "hotel") {
            this.setPhotos();
            this.initialize();
        }
    }

    private classObject(): Record<string, boolean> {
        return {
            'hotel-visible': this.client
        }
    }

    private flashDetect(): string {
        const flashDetected = new FlashDetect();
        return flashDetected.installed === false ? 'game' : 'game';
    }

    private random() {
        return Math.floor(Math.random() * this.photo.length);
    }

    private hideClient(): void {
        this.setClient(!this.client);
    }

    private getTicket(): Promise<void> {
        return this.setTicket().then((response: ITicketResponse) => {
            this.ticket = response.ticket
        })
    }

    private loadClient(): void {
        if (this.active) {
            return;
        }

        this.getTicket().then(() => {
            console.log(this.ticket)
            this.hideLoader = false
        })
        this.setActive(true)
    }

    private initialize(): void {
        this.isSessionActive = this.user.online === 1;
        if (!this.isSessionActive) {
            this.loadClient()
        }
    }
}
</script>
