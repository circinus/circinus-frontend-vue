<template>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-container>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-list-group class="navbar-nav mr-auto" v-if="authModule.authenticated">
                        <b-row>
                            <b-col class="user--statics">
                                <div class="icon icon--credits"></div>
                                <div class="pt-1" style="margin-left: 50px;">
                                    <div class="font-weight-bold">{{authModule.user.credits}}</div> <span>CREDITS</span>
                                </div>
                            </b-col>
                            <b-col class="user--statics" v-for="currency in authModule.user.currencies" :key="currency.name">
                                <div class="icon" :class="'icon--' + currency.name"></div>
                                <div class="pt-1" style="margin-left: 50px;">
                                    <div class="font-weight-bold">{{ currency.amount }}</div>
                                    <span>{{ currency.name }}</span>
                                </div>
                            </b-col>
                        </b-row>
                    </b-list-group>
                    <Login/>
                </b-collapse>
            </b-container>
        </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Auth/Login/Login.vue';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';
import { BNavbar, BNavbarToggle, BCollapse, BContainer, BRow, BListGroup, BCol } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        Login,
        BNavbar,
        BNavbarToggle,
        BCollapse,
        BContainer,
        BRow,
        BListGroup,
        BCol
    }
})
export default class Top extends Vue {
    private authModule = authModule;
}
</script>
