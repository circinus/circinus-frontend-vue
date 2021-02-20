<template>
    <div>
        <div class="row mt-5">
            <div class="col-xl-6 col-lg-9 col-md-12 col-sm-12 mb-4">
                <section id="friendComponent" class="habbo--section">
                    <div class="d-flex flex-row mb-4">
                        <i class="icon--friends"></i>
                        <div class="d-inline-flex flex-column justify-content-center">
                            <span class="section-title" v-t="'layout.component.friendlist.title'"></span>
                            <span class="section-description" v-t="'layout.component.friendlist.description'"></span>
                        </div>
                    </div>
                    <div class="card friends">
                        <div class="card-body d-flex flex-column">
                            <div class="d-inline-flex align-items-center">
                                <div id="search" class="input-group bg-white w-50">
                                    <input placeholder="..." type="search" class="form-control" maxlength="12">
                                </div>
                            </div>
                            <div id="friends" class="row">
                                <ComponentLoader :state="friendListModule.getLoadingState('get-friendList')">
                                    <div class="row">
                                        <FriendList
                                            v-for="(friend, index) in friendListModule.friends"
                                            :key="index"
                                            :friend="friend"
                                        >
                                        </FriendList>
                                    </div>
                                </ComponentLoader>
                            </div>
                        </div>
                    </div>
                </section>
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
import ComponentLoader from '@/components/ComponentLoader.vue';
import { ComponentOptions } from 'vue';
import { friendListModule } from '@/store/modules/friendlist/FriendListModule';

@Observer
@Component({
    components: {
        UserOfTheWeek,
        FriendList,
        Guilds,
        Rooms,
        ComponentLoader
    }
})
export default class Home extends Vue implements ComponentOptions<Vue> {
    private friendListModule = friendListModule;

    public mounted(): void {
        this.friendListModule.getFriends();
    }
}
</script>
