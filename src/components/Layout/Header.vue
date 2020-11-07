<template>
    <div id="header--image" class="row">
      <div class="d-flex flex-column justify-content-center align-items-center my-4" style="position: absolute; width: 100%;">

        <p id="header--description">
          Chatten, vrienden maken en lekker jezelf zijn, dat bieden wij op de gezelligste community van Nederland! Kom jij ook?
        </p>

        <button class="btn btn--light w-25" v-if="!authenticated">Meld je aan!</button>
        <button class="btn btn--light w-25" v-if="authenticated" @click="toggleClientLoader">Ga naar binnen</button>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import bus from '../../helpers/bus'

export default {

    computed: {
      ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user',
          client: 'client/loaded'
      })
    },

    methods: {
        ...mapActions({
            loadClient: 'client/setstate'
        }),

        toggleClientLoader() {
            this.loadClient(!this.client)
            bus.$emit('loadClient');
        }
    }
}
</script>

<style scoped>

</style>