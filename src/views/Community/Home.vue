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
                <section id="roomComponent" class="habbo--section mt-5">
                    <div class="d-flex flex-row mb-4">
                        <i class="icon--friends"></i>
                        <div class="d-inline-flex flex-column justify-content-center">
                            <span class="section-title" v-t="'layout.component.rooms.title'"></span>
                            <span class="section-description" v-t="'layout.component.rooms.description'"></span>
                        </div>
                    </div>
                    <div class="card p-3">
                        <table class="table rooms table-striped table-borderless align-middle">
                            <tbody>
                            <ComponentLoader :state="roomModule.getLoadingState('get-roomList')">
                                <Room
                                    v-for="(rooms, index) in roomModule.rooms"
                                    :key="index"
                                    :room="rooms"
                                >
                                </Room>
                            </ComponentLoader>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <div class="col-md-1"></div>
            <div class="col-xl-4 col-lg-3 col-md-12 col-sm-12 mb-4">
                <section id="userOfTheWeekComponent" class="habbo--section">
                    <div class="d-flex flex-row mb-4">
                        <i class="sprite sprite--user-of-the-hotel"></i>
                        <div class="d-inline-flex flex-column justify-content-center pl-2">
                            <span class="section-title" v-t="'layout.component.useroftheweek.title'"></span>
                            <span class="section-description" v-t="'layout.component.useroftheweek.description'"></span>
                        </div>
                    </div>
                    <div class="card d-flex flex-column p-4">
                        <ComponentLoader :state="userOfTheWeekModule.getLoadingState('get-userOfTheWeek')">
                            <UserOfTheWeek
                                v-if="userOfTheWeek"
                                :userOfTheWeek="userOfTheWeek"
                            >
                            </UserOfTheWeek>
                        </ComponentLoader>
                    </div>
                </section>
                <section id="guildComponent" class="habbo--section mt-5">
                    <div class="d-flex flex-row mb-4">
                        <i class="sprite sprite--members mt-2"></i>
                        <div class="d-inline-flex flex-column justify-content-center pl-2">
                            <span class="section-title" v-t="'layout.component.guild.title'"></span>
                            <span class="section-description" v-t="'layout.component.guild.description'"></span>
                        </div>
                    </div>
                    <div class="card d-flex flex-column p-1">
                        <div class="card-body d-flex flex-row align-content-center">
                            <ul class="guild">
                                <ComponentLoader :state="guildModule.getLoadingState('get-guildList')">
                                        <Guild
                                            v-for="(guilds, index) in guildModule.guilds"
                                            :key="index"
                                            :guild="guilds"
                                        >
                                        </Guild>
                                </ComponentLoader>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';
import FriendList from '@/components/Community/FriendList.vue';
import UserOfTheWeek from '@/components/Community/UserOfTheWeek.vue';
import Guild from '@/components/Community/Guild.vue';
import Room from '@/components/Community/Rooms.vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { ComponentOptions } from 'vue';
import { FriendListModule, friendListModule } from '@/store/modules/friendlist/FriendListModule';
import { GuildModule, guildModule } from '@/store/modules/guilds/GuildModule';
import { RoomModule, roomModule } from '@/store/modules/rooms/RoomModule';
import { UserOfTheWeekModule, userOfTheWeekModule } from '@/store/modules/useroftheweek/UserOfTheWeekModule';
import { IUserOfTheWeek } from '@/store/modules/useroftheweek/IUserOfTheWeek';
import { environment } from '../../../environment';

@Observer
@Component({
    components: {
        UserOfTheWeek,
        FriendList,
        Guild,
        Room,
        ComponentLoader
    }
})
export default class Home extends Vue implements ComponentOptions<Vue> {
    private friendListModule: FriendListModule = friendListModule;
    private guildModule: GuildModule = guildModule;
    private roomModule: RoomModule = roomModule;
    private userOfTheWeekModule: UserOfTheWeekModule = userOfTheWeekModule;
    private userOfTheWeek: IUserOfTheWeek | null = null;

    private environmentRoom = environment.COMPONENTS.ROOMS

    async mounted(): Promise<void> {
        await this.friendListModule.getFriends();
        await this.guildModule.getGuilds();
        await this.roomModule.getRooms(this.environmentRoom.MAXROOMS);
        await this.refreshHabboOfTheWeek();
    }

    private async refreshHabboOfTheWeek(): Promise<void> {
        this.userOfTheWeek = await this.userOfTheWeekModule.getUser();
    }
}
</script>
