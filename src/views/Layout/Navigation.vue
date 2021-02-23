<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
            <b-navbar-toggle target="nav-collapse-bottom"></b-navbar-toggle>

            <b-collapse class="navbar-collapse-bottom navigation" is-nav>
                <b-nav>
                    <b-nav-item>
                        <router-link :to="{ name: 'home' }">
                            <span v-t="'layout.nav.homepage'"></span>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item v-if="authModule.authenticated">
                        <router-link :to="{ name: 'community' }">
                            <span v-t="'layout.nav.community'"></span>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link :to="{ name: 'communityStaff' }">
                            <span v-t="'layout.nav.staff'"></span>
                        </router-link>
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-container>>
    </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';
import { BNavbar, BContainer, BNavbarToggle, BCollapse, BNav, BNavItem } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        BNavbar,
        BContainer,
        BNavbarToggle,
        BCollapse,
        BNav,
        BNavItem
    }
})
export default class Navigation extends Vue {
    private authModule = authModule;
}
</script>
