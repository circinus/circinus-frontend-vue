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

    computed: {
        ...mapGetters({
            user: 'auth/user',
            client: 'client/loaded',
            active: 'client/active'
        })
    },

    methods: {
        ...mapActions({
            loadClient: 'client/setstate',
            setActive: 'client/active'
        }),

        hideClient() {
            this.loadClient(!this.client);
        },

        initializeClient: function () {

            if(!this.active) {
                swfObject.embedSWF('https://images.projectmeteor.online/gordon/PRODUCTION-202003262139-739075797/ske.swf',
                    'game',
                    '100%',
                    '100%',
                    11,
                    '',
                    client.vars,
                    client.params);
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