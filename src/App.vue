<template>
    <div id="app">

        <header class="bg-primary mb-4">
            <Login/>
            <Header/>
            <Navigation/>
        </header>

        <main class="flex-fill container">
            <notifications></notifications>
            <router-view />
        </main>

        <Client/>
        <Footer/>

    </div>
</template>

<script>
import Login from './components/Layout/Login';
import Navigation from './components/Layout/Navigation';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Notifications from './components/Notifications';
import Client from './components/Client/Client';

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

