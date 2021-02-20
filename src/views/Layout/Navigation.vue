<template>
    <nav id="navbar--secondary" class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar--secondary-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navigation" id="navbar--secondary-collapse">
                <ul>
                    <li>
                        <div class="icon">
                            <div class="icon--home p-lg-1 mt-2"></div>
                        </div>
                        <router-link :to="{ name: 'home' }">
                            <span v-t="'layout.nav.homepage'"></span>
                        </router-link>
                    </li>
                    <li>
                        <div class="icon">
                            <div class="icon--chair p-lg-1 mt-2"></div>
                        </div>
                        <router-link :to="{ name: 'community' }">
                            <span v-t="'layout.nav.community'"></span>
                        </router-link>
                    </li>
                    <li>
                        <div class="icon">
                            <div class="icon--pixel p-lg-1 mt-2"></div>
                        </div>
                        <router-link :to="{ name: 'communityStaff' }">
                            <span v-t="'layout.nav.staff'"></span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
// @ts-ignore
import DropdownMenu from '@innologica/vue-dropdown-menu';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        DropdownMenu
    }
})
export default class Navigation extends Vue {
    private show = false;
    private hover = true;
}
</script>
