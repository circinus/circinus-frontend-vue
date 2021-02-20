<template>
    <div>
        <div class="row mt-5">
            <div class="col-xl-6 col-lg-9 col-md-12 col-sm-12 mb-4">
                <FriendList/>
                <Rooms/>
            </div>
            <div class="col-md-1"></div>
            <div class="col-xl-4 col-lg-3 col-md-12 col-sm-12 mb-4">
                <UserOfTheWeek/>
                <Guilds/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';
import FriendList from '@/components/Community/FriendList.vue';
import UserOfTheWeek from '@/components/Community/UserOfTheWeek.vue';
import Guilds from '@/components/Community/Guilds.vue';
import Rooms from '@/components/Community/Rooms.vue';

@Observer
@Component({
    components: {
        UserOfTheWeek,
        FriendList,
        Guilds,
        Rooms
    }
})
export default class Home extends Vue {
}
</script>
