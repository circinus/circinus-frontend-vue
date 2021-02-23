<template>
    <div>
        <ComponentLoader :state="permissionModule.getLoadingState('get-permissions')">
            <b-row class="mt-5">
                <b-col col md="7" class="mt-0 pt-0">
                    <div v-for="(rank, index) in permissionModule.ranks" :key="index" :ranks="rank">

                        <div v-if="rank.users" class="card d-flex flex-row">
                            <i class="icon icon--community mr-2"></i>
                            <span class="rank-name mt-2">{{ rank.rank_name }}</span>
                        </div>

                        <b-row class="mb-2 mt-4">
                            <b-col md="6" v-for="(user, index) in rank.users" :key="index" :user="user">
                                <b-row class="row">
                                    <b-col md="4">
                                        <div class="news--info d-flex flex-row align-items-center mb-3">
                                            <div class="user--rounded-image online mr-2">
                                                <div class="status" :class="user.online === 1 ? 'offline' : 'online'"></div>
                                                <img
                                                    v-bind:src="avatarImaging + user.look + '&action=std&gesture=std&direction=3&head_direction=3&headonly=1'"
                                                    :alt="user.username"
                                                />
                                            </div>

                                        </div>
                                    </b-col>
                                    <b-col md="4" class="mt-3">
                                        <h6 class="m-0">{{ user.username }}</h6>
                                        <span class="m-0 text-muted">{{ user.motto }}</span>
                                    </b-col>
                                    <b-col md="2" class="mt-3">
                                        <img
                                            :src="badgeImaging + rank.badge + '.gif'">
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>

                <b-col md="4" class="staffText">
                    <b-card no-body class="p-2">
                        <b-card-title>
                            <h5>
                                <img class="mt-2 mb-2"
                                     src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                                     width="40" alt="">
                                {{ title }} Staff
                            </h5>
                        </b-card-title>
                        <b-card-body>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem earum
                            eos incidunt
                            iure labore laborum molestias mollitia neque nostrum officiis provident quam quasi, quis
                            reiciendis
                            rerum sed veritatis!
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </ComponentLoader>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { permissionModule } from '@/store/modules/permissions/PermissionModule';
import { Observer } from 'mobx-vue';
import { environment } from '../../../environment';
import { BRow, BCol, BCard, BCardBody } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        ComponentLoader,
        BRow,
        BCol,
        BCard,
        BCardBody
    }
})
export default class CommunityStaff extends Vue implements ComponentOptions<Vue> {
    private title = process.env.VUE_APP_TITLE;
    private avatarImaging = environment.SITE.FIGUREIMAGING;
    private badgeImaging = environment.SITE.BADGEMIMAGING;
    private permissionModule = permissionModule;

    public created(): void {
        this.permissionModule.getRanks();
    }
}
</script>

<style type="scss">
.icon--community {
    height: 52px;
    width: 40px;
    position: relative;
    top: -0.7rem;
}

.rank-name {
    font-size: 1.2rem;
}
</style>
