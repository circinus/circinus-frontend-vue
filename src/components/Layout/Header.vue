<template>
    <div id="header--image" class="row">
        <div class="d-flex flex-column justify-content-center align-items-center my-4" style="position: absolute; width: 100%;">

            <p id="header--description">
                {{$t("layout.header.description")}}
            </p>

            <router-link class="btn btn--light w-25" v-if="!authenticated" :to="{ name: 'register' }" v-t="'layout.header.create_account'"></router-link>
            <button class="btn btn--light w-25" v-if="authenticated" @click="toggleClientLoader" v-t="'layout.header.go_hotel'"></button>
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
            setClient: 'client/setClient'
        }),

        toggleClientLoader() {
            this.setClient(!this.client)
            bus.$emit('loadClient');
        }
    }
}
</script>

<style scoped>

</style>