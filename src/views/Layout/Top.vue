<template>
    <nav id="navbar--primary" class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar--primary-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar--primary-collapse">
                <ul class="navbar-nav mr-auto" v-if="authenticated">
                    <div class="row">
                        <div class="col user--statics">
                            <div class="icon icon--credits"></div>
                            <div class="pt-1" style="margin-left: 50px;">
                                <div class="font-weight-bold">{{ user.credits }}</div>
                                <span>CREDITS</span>
                            </div>
                        </div>
                        <div v-for="currency in user.currencies" :key="currency.name" class="col user--statics">
                            <div class="icon" :class="'icon--' + currency.name"></div>
                            <div class="pt-1" style="margin-left: 50px;">
                                <div class="font-weight-bold">{{ currency.amount }}</div>
                                <span>{{ currency.name }}</span>
                            </div>
                        </div>
                    </div>
                </ul>

                <Login/>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IUser } from '@/store/modules/user/IUser';
import Login from '@/components/Auth/Login/Login.vue';

@Component({
    components: {
        Login
    }
})
export default class Top extends Vue {
    @Getter('auth/authenticated') private authenticated!: boolean;
    @Getter('auth/user') private user!: IUser;
}
</script>
