<template>
  <div id="client-loader" v-if="client" v-bind:class="classObject">
      <div id="hotel-container">
          <div id="game" class="client-frame"></div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { client } from "../../../config"
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

    mounted() {
        console.log(this.client)
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