<template>
    <div id="app">

        <header class="bg-primary mb-4">
            <Top/>
            <Header/>
            <Navigation/>
        </header>

        <main class="flex-fill container">
            <Notifications></Notifications>
            <router-view :key="$route.fullPath" />
        </main>

        <Client/>
        <Footer/>

    </div>
</template>

<script lang="ts">
import "@/assets/css/app.scss"
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
export default class App extends Vue {}
</script>
