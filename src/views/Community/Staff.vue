<template>
    <div>
        <ComponentLoader :state="permissionModule.getLoadingState('get-permissions')">

            <div class="row mt-5">
                <div class="col-md-7 mt-0 pt-0">
                    <div v-for="(rank, index) in permissionModule.ranks" :key="index" :ranks="rank">

                        <div v-if="rank.users" class="card d-flex flex-row">
                            <i class="icon icon--community mr-2"></i>
                            <span class="rank-name mt-2">{{ rank.rank_name }}</span>
                        </div>

                        <div class="row mb-2 mt-4">
                            <div class="col-md-6" v-for="(user, index) in rank.users" :key="index" :user="user">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="news--info d-flex flex-row align-items-center mb-3">
                                            <div class="user--rounded-image online mr-2">
                                                <div class="status" :class="user.online === 1 ? 'offline' : 'online'"></div>
                                                <img
                                                    v-bind:src="avatarImaging + user.look + '&action=std&gesture=std&direction=3&head_direction=3&headonly=1'"
                                                    :alt="user.username"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <h6 class="m-0">{{ user.username }}</h6>
                                        <span class="m-0 text-muted">{{ user.motto }}</span>
                                    </div>
                                    <div class="col-md-2 mt-3">
                                        <img
                                            :src="badgeImaging + rank.badge + '.gif'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 staffText">
                    <div class="card">
                        <div class="card-body">
                            <h5>
                                <img class="mt-2 mb-2"
                                     src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                                     width="40" alt="">
                                {{ title }} Staff
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem earum
                                eos incidunt
                                iure labore laborum molestias mollitia neque nostrum officiis provident quam quasi, quis
                                reiciendis
                                rerum sed veritatis!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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

@Observer
@Component({
    components: {
        ComponentLoader
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
