<template>
    <tr>
        <td>
            <img src="https://cosmic.circinus.dev/assets/images/web/pages/community/rooms/room_icon_1.gif">
        </td>
        <td>{{ this.room.name }}e</td>
        <td><img src="https://cosmic.circinus.dev/assets/images/web/pages/community/rooms/visitors.gif"> {{ this.room.users }}</td>
        <td><button class="btn-danger btn btn-light">Ga naar kamer</button></td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRoom } from '@/store/modules/rooms/IRoom';

@Component({})
export default class Rooms extends Vue {
    @Prop({ required: true }) private room!: IRoom;
}
</script>
