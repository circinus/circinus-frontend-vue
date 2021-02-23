<template>
    <b-col xl="4" lg="4" md="12" sm="12">
        <b-card class="friend mb-2 d-flex flex-row align-items-center offline">
            <img
                v-bind:src="this.avatarImaging + this.friend.look + '&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0'"
                :alt="this.friend.username"/>
            <div class="user-info d-inline-flex flex-column text-ellipsis">
                <span class="username text-ellipsis mb-0">{{ this.friend.username }}</span>
                <span class="motto text-ellipsis">{{ this.friend.motto }}</span>
            </div>
        </b-card>
    </b-col>
</template>

<script lang="ts">
import { IFriendList } from '@/store/modules/friendlist/IFriendList';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { environment } from '../../../environment';
import { BCol, BCard } from 'bootstrap-vue';

@Component({
    components: {
        BCol,
        BCard
    }
})
export default class FriendList extends Vue {
    @Prop({ required: true }) private friend!: IFriendList;

    private avatarImaging = environment.SITE.FIGUREIMAGING
}
</script>
