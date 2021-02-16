<template>
    <nav id="navbar--secondary" class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar--secondary-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar--secondary-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }" v-t="'layout.nav.homepage'"></router-link>
                    </li>
                    <li class="nav-item">
                        <dropdown-menu
                            v-model="show"
                            :hover="hover"
                        >
                            <a class="nav-link dropdown-toggle">
                                <span v-t="'layout.nav.community.nav'"></span>
                            </a>
                            <div slot="dropdown">
                                <router-link class="nav-dropdown" :to="{ name: 'staff' }"
                                             v-t="'layout.nav.community.staff'"></router-link>
                            </div>
                        </dropdown-menu>
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
