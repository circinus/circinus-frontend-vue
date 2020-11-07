<template>
    <div id="client-loader" v-bind:class="{'hotel-visible': client}">
        <div id="hotel-container">
            <div id="game" class="client-frame"></div>
            <div class="client-buttons">
                <button class="client-close rounded-button blue plain" @click="hideClient">
                    <i class="client-icon fas fa fa-backspace"></i>
                    <span class="client-close-expand"><span>Web</span></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import { client } from "../../../environment"
import * as swfObject from 'es-swfobject';
import bus from '../../helpers/bus'

export default {
    name: "Client",

    data() {
        return {
            ticket: null
        }
    },

    computed: {
        ...mapGetters({
            user: 'auth/user',
            client: 'client/loaded',
            active: 'client/active'
        })
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

        initializeClient: function () {

            if(!this.active) {
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
            }
            this.setActive(true)
        }
    },

    created() {
        bus.$on('loadClient', () => {
            this.initializeClient();
        })
    },

    mounted() {
        if(this.$router.currentRoute.name === "hotel") {
            this.initializeClient();
        }
    }
}
</script>