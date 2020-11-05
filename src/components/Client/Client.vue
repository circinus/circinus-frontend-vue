<template>
    <div id="client-loader" v-if="client" v-bind:class="classObject">
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

export default {
    name: "Client",

    computed: {
        ...mapGetters({
            client: 'client/loaded'
        }),

        classObject: function () {
            return {
                'hotel-visible': client
            }
        }
    },

    methods: {
        ...mapActions({
            loadClient: 'client/setstate'
        }),

        hideClient() {
            this.loadClient(!this.client)
        }
    },

    mounted() {

        swfObject.embedSWF(client.swf,
            document.getElementById('game'),
            '100%',
            '100%',
            11,
            '',
            client.vars,
            client.params);
    }
}
</script>