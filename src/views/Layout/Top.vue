<template>
    <nav id="navbar--primary" class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar--primary-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar--primary-collapse">
                <ul class="navbar-nav mr-auto" v-if="authModule.authenticated">
                    <div class="row">
                        <div class="col user--statics">
                            <div class="icon icon--credits"></div>
                            <div class="pt-1" style="margin-left: 50px;">
                                <div class="font-weight-bold">{{authModule.user.credits}}</div> <span>CREDITS</span>
                            </div>
                        </div>
                        <div v-for="currency in authModule.user.currencies" :key="currency.name" class="col user--statics">
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
import Login from '@/components/Auth/Login/Login.vue';
import { authModule } from '@/store/modules/auth/AuthModule';
import { Observer } from 'mobx-vue';

@Observer
@Component({
    components: {
        Login
    }
})
export default class Top extends Vue {
    private authModule = authModule;
}
</script>
