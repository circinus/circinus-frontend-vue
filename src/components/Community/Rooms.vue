<template>
    <b-col class="p-1">
        <b-card no-body>
            <b-row no-gutters>
                <b-col md="3" class="text-center d-flex" style="background-color: rgba(198, 71, 7, 0.43);">
                    <img class="mx-auto my-auto" src="@/assets/images/web/room/room_state_4_icon.png">
                </b-col>
                <b-col md="7">
                    <b-card class="text-center title">
                        <span>{{ this.room.name }}</span>
                    </b-card>
                </b-col>
                <b-col md="2" class=" text-center d-flex" style="background-color: rgb(195 210 198);">
                    <font-awesome-icon icon="sign-in-alt" class="mx-auto my-auto" style="font-size: 24px; color: #fff"></font-awesome-icon>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRoom } from '@/store/modules/rooms/IRoom';
import { BCol, BCard, BRow, BCardBody } from 'bootstrap-vue';

@Component({
    components: {
        BCol,
        BCard,
        BRow,
        BCardBody
    }
})
export default class Rooms extends Vue {
    @Prop({ required: true }) private room!: IRoom;
}
</script>
