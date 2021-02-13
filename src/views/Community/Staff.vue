<template>
    <div>
        <load-component module="getList">

            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="header">
                        <h1 v-t="'layout.nav.members'"></h1>
                        <h5 v-t="'layout.staff.subtitle'" class="text-muted">Lorem ipsum dolor sit amet!</h5>
                    </div>
                </div>
            </div>


            <div class="row mt-5">
                <div class="col-md-7 mt-0 pt-0">
                    <div v-for="(rank, index) in list" :key="index" :ranks="rank">

                        <div v-if="rank.users" class="card d-flex flex-row">
                            <i class="icon icon--community mr-2"></i>
                            <span class="rank-name mt-2">{{ rank.rank_name }}</span>
                        </div>

                        <div class="row mb-2 mt-4">
                            <div class="col-md-6" v-for="(user, index) in rank.users" :key="index" :user="user">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="news--info d-flex flex-row align-items-center mb-3">
                                            <div class="user--rounded-image bg-white mr-2">
                                                <img :src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + user.look + '&amp;action=std&amp;gesture=std&amp;direction=3&amp;head_direction=3'" alt="necmi">
                                            </div>
                                            <span :class="user.online === 3 ? 'onlineDot' : 'offlineDot'"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <h6 class="m-0">{{ user.username }}</h6>
                                        <span class="m-0 text-muted">{{ user.motto }}</span>
                                    </div>
                                    <div class="col-md-2 mt-3">
                                        <img :src="'https://client.circinus.dev/assets/c_images/album1584/' + rank.badge + '.gif'">
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
                                <img class="mt-2 mb-2" src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7" width="40" alt="">
                                {{ title }} Staff
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem earum eos incidunt
                                iure labore laborum molestias mollitia neque nostrum officiis provident quam quasi, quis reiciendis
                                rerum sed veritatis!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </load-component>
    </div>
</template>

<script lang="ts">
import {mapGetters} from 'vuex';
import {Component, Vue} from "vue-property-decorator";
import { ComponentOptions } from 'vue';
import { Getter } from 'vuex-class';

export default class CommunityStaff extends Vue implements ComponentOptions<Vue> {
    @Getter('permissions/list') public list!: Array<any>;

    public created(): void {
        this.$store.dispatch('permissions/getStafflist');
    }


}
</script>

<style type="scss">
.icon--community  {
    height: 52px;
    width: 40px;
    position: relative;
    top: -0.7rem;
}
.rank-name {
    font-size: 1.2rem;
}
</style>
