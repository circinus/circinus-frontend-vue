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

<script>
import {mapActions, mapGetters} from 'vuex';
import { client } from "../../../environment"
import * as FlashDetect from 'flash-detect';
import bus from '@/helpers/bus'

export default {
    name: "Client",

    data() {
        return {
            ticket: null,
            isSessionActive: false,
            loadingWidth: 0,
            hideLoader: false,
            loadingText: this.$t('layout.client.starting'),
            url: process.env.VUE_APP_NITRO_ASSETS_URL
        }
    },

    computed: {
        ...mapGetters({
            user: 'auth/user',
            client: 'client/loaded',
            active: 'client/active',
            photo: 'photos/photos'
        }),

        classObject: function () {
            return {
                'hotel-visible': this.client
            }
        },

        flashDetect() {
            const flashDetected = new FlashDetect();
            return flashDetected.installed === false ? 'game' : 'game'
        }
    },

    methods: {
        ...mapActions({
            setClient: 'client/setClient',
            setActive: 'client/setActive',
            setTicket: 'client/setTicket',
            setPhotos: 'photos/getPhotos'
        }),

        random: function () {
            return Math.floor(Math.random() * this.photo.length);
        },

        hideClient: function () {
            this.setClient(!this.client);
        },

        getTicket: function () {
            return this.setTicket().then(response => {
                this.ticket = response.ticket
            })
        },

        initialize: function () {
            this.isSessionActive = this.user.online === 1;
            if (!this.isSessionActive) {
                this.loadClient()
            }
        },

        loadClient: function () {

            if (this.active) {
                return;
            }

            this.getTicket().then(() => {
                console.log(this.ticket)
                this.hideLoader = false
            })
            this.setActive(true)
        }
    },

    created() {
        bus.$on('loadClient', () => {
            this.initialize();
        })
    },

    mounted() {
        if(this.$router.currentRoute.name === "hotel") {
            this.setPhotos();
            this.initialize();
        }
    }
}
</script>