<template>
    <b-card no-body>
        <b-card-body class="d-flex flex-row align-content-center">
            <img class="image-pixelated img-fluid offline" :src="avatarImaging + this.userOfTheWeek.user.look + '&amp;action=std&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=l&amp;headonly=0'">
            <div  class="d-inline-flex flex-column align-content-center text-ellipsis">
                <span class="user--username">{{ this.userOfTheWeek.user.username }}</span>
                <span class="user--motto pt-1 text-ellipsis">" {{ this.userOfTheWeek.user.motto }} "</span>
            </div>
        </b-card-body>
    </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { environment } from '../../../environment';
import { IUserOfTheWeek } from '@/store/modules/useroftheweek/IUserOfTheWeek';
import { BCard, BCardBody } from 'bootstrap-vue';

@Component({
    components: {
        BCard,
        BCardBody
    }
})
export default class UserOfTheWeek extends Vue {
    @Prop({ required: true }) private userOfTheWeek!: IUserOfTheWeek;

    private avatarImaging = environment.SITE.FIGUREIMAGING
}
</script>
