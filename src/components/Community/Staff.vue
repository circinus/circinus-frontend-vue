<template>
    <div>
        <LoadComponent module="getList">

            <div class="row">
                <div class="col-md-8 mt-0 pt-0">

                    <div v-for="(rank, index) in list" :key="index" :ranks="rank">

                        <h5>
                            {{ rank.rank_name }}
                        </h5>

                        <div class="col-md-8 ml-0 pl-0">

                            <div class="row">
                                <div class="col-md-6 mt-2 mb-2" v-for="(user, index) in rank.users" :key="index"
                                     :user="user">
                                    <div class="card">
                                        <img class="img-fluid align-self-center"
                                             :src="'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=' + user.look + '&amp;action=std&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=l&headonly=1'"
                                             width="100">
                                        {{ user.username }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5>{{ title }} Staff</h5>
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
        </LoadComponent>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { IPermission } from '@/store/modules/permissions/IPermission'
import { Getter } from 'vuex-class'
import ComponentLoader from '@/components/ComponentLoader.vue'
import LoadComponent from '@/components/ComponentLoader.vue'

@Component({
    components: {
        LoadComponent,
        ComponentLoader
    }
})
export default class Staff extends Vue {
    protected title = process.env.VUE_APP_TITLE;
    @Getter('permissions/list') private list: Array<IPermission> = [];

    public created(): void {
        this.$store.dispatch('permissions/getStafflist')
    }
}
</script>
