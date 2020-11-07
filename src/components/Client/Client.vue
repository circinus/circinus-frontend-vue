<template>
    <div id="client-loader" v-bind:class="classObject">
        <div id="hotel-container">
            <div :id="flashDetect" v-if="flashDetect" class="row d-block align-items-center text-center">
                <div class="flash-illustration"></div>
                <div class="flash-title mb-1 mt-5 d-block" v-t="'client.flash_detected.message'"></div>
                <span class="flash-description w-25" v-html="$t('client.flash_detected.description', {
                    url: `<a href='https://get.adobe.com/en/flashplayer' target='_blank'>${$t('client.flash_detected.here')}</a>`
                  })"
                />
            </div>
            <div class="client-buttons">
                <button class="client-close rounded-button blue plain" @click="hideClient">
                    <i class="client-icon fas fa fa-backspace"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import { client } from "../../../environment"
import * as FlashDetect from 'flash-detect';
import * as swfObject from 'es-swfobject';
import bus from '../../helpers/bus'

export default {
    name: "Client",

    data() {
        return {
            ticket: null,
            isSessionActive: false,
            isFlashInstalled: false

        }
    },

    computed: {
        ...mapGetters({
            user: 'auth/user',
            client: 'client/loaded',
            active: 'client/active'
        }),

        classObject: function () {
            return {
                'hotel-visible': this.client
            }
        },

        flashDetect() {
            const flashDetected = new FlashDetect();
            return flashDetected.installed === false ? 'flash-detect' : 'game'
        }
    },

    methods: {
        ...mapActions({
            setClient: 'client/setClient',
            setActive: 'client/setActive',
            setTicket: 'client/setTicket'
        }),

        hideClient() {
            this.setClient(!this.client);
        },

        getTicket() {
            return this.setTicket().then(response => {
                this.ticket = response.ticket
            })
        },

        initialize() {
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
                client.vars["sso.ticket"] = this.ticket
                swfObject.embedSWF(client.swf,
                    'game',
                    '100%',
                    '100%',
                    11,
                    '',
                    client.vars,
                    client.params);

                window.FlashExternalInterface = {};
                window.FlashExternalGameInterface = {};

                window.FlashExternalInterface.logLoginStep = (e) => {
                    console.log(e)
                    //window.FlashExternalInterface.disconnect = () => this.zone.run(() => this.isDisconnected = true);
                };

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
            this.initialize();
        }
    }
}
</script>