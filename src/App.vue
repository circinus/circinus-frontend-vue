<template>
    <div id="app">

        <header class="bg-primary mb-4">
            <Login/>
            <Header/>
            <Navigation/>
        </header>

        <main class="flex-fill container">
            <notifications></notifications>
            <router-view :key="$route.fullPath" />
        </main>

        <Client/>
        <Footer/>

    </div>
</template>

<script>
import "@/assets/css/app.scss"

import Login from '@/components/Home/Login';
import Navigation from '@/views/Layout/Navigation';
import Header from '@/views/Layout/Header';
import Footer from '@/views/Layout/Footer';
import Notifications from '@/components/Notifications';
import Client from '@/components/Client/Client';
import { mapGetters } from 'vuex';

export default {
    components: {
        Login,
        Navigation,
        Header,
        Footer,
        Notifications,
        Client
    },
    computed: {
        ...mapGetters({
            notifications: 'notifications/list'
        })
    }
}
</script>