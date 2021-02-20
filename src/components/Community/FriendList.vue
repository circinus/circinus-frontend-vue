<template>
    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
            <img
                v-bind:src="this.avatarImaging + this.friend.look + '&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0'"
                :alt="this.friend.username"/>
            <div class="user-info d-inline-flex flex-column text-ellipsis">
                <span class="username text-ellipsis mb-0">{{ this.friend.username }}</span>
                <span class="motto text-ellipsis">{{ this.friend.motto }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IFriendList } from '@/store/modules/friendlist/IFriendList';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { environment } from '../../../environment';

@Component({})
export default class FriendList extends Vue {
    @Prop({ required: true }) private friend!: IFriendList;

    private avatarImaging = environment.SITE.FIGUREIMAGING
}
</script>
