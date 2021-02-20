<template>
    <div class="card friend mb-2 d-flex flex-row align-items-center offline">
        <img
            v-bind:src="this.avatarImaging + this.friends.look + '&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0'"
            :alt="this.friends.username"/>
        <div class="user-info d-inline-flex flex-column text-ellipsis">
            <span class="username text-ellipsis mb-0">{{ this.friends.username }}</span>
            <span class="motto text-ellipsis">{{ this.friends.motto }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { IFriendList } from '@/store/modules/friendlist/IFriendList';
import { Prop, Vue } from 'vue-property-decorator';
import { environment } from '../../../environment';

export default class FriendList extends Vue {
    @Prop({ required: true }) private friends!: IFriendList;

    private avatarImaging = environment.SITE.FIGUREIMAGING
}
</script>
