<template>
    <div id="app">
        <b-container>
            <header class="bg-primary mb-4 app-header">
                <Top/>
                <Header/>
                <Navigation/>
            </header>

            <main class="flex-fill container">
                <Notifications></Notifications>
                <router-view :key="$route.fullPath"/>
            </main>

            <Client/>
            <Footer/>
        </b-container>
    </div>
</template>

<script lang="ts">
import '@/assets/scss/index.scss';
import Top from '@/views/Layout/Top.vue';
import Navigation from '@/views/Layout/Navigation.vue';
import Header from '@/views/Layout/Header.vue';
import { Component, Vue } from 'vue-property-decorator';
import Client from '@/components/Client/Client.vue';
import Notifications from '@/components/Notifications.vue';
import Footer from '@/views/Layout/Footer.vue';

@Component({
    components: {
        Top,
        Navigation,
        Header,
        Footer,
        Notifications,
        Client
    }
})
export default class App extends Vue {
}
</script>
