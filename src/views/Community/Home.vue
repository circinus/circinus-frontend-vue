<template>
    <div>
        <b-row class="mt-5">
            <b-col xl="6" lg="9" md="12" sm="12" class="mb-4">
                <section id="friendComponent" class="habbo--section">
                    <div class="d-flex flex-row mb-4">
                        <i class="icon--friends"></i>
                        <div class="d-inline-flex flex-column justify-content-center">
                            <span class="section-title" v-t="'layout.component.friendlist.title'"></span>
                            <span class="section-description" v-t="'layout.component.friendlist.description'"></span>
                        </div>
                    </div>

                    <b-card>
                        <b-card-title>
                            <div id="search" class="input-group bg-white w-50">
                                <input placeholder="..." type="search" class="form-control" maxlength="12">
                            </div>
                        </b-card-title>
                        <b-card-body class="d-flex flex-column">
                            <b-row id="friends">
                                <ComponentLoader :state="friendListModule.getLoadingState('get-friendList')">
                                    <b-row>
                                        <FriendList
                                            v-for="(friend, index) in friendListModule.friends"
                                            :key="index"
                                            :friend="friend"
                                        >
                                        </FriendList>
                                    </b-row>
                                </ComponentLoader>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </section>
                <section id="roomComponent" class="habbo--section mt-5">
                    <div class="d-flex flex-row mb-4">
                        <i class="icon--other pl-5"></i>
                        <div class="d-inline-flex flex-column justify-content-center">
                            <span class="section-title" v-t="'layout.component.rooms.title'"></span>
                            <span class="section-description" v-t="'layout.component.rooms.description'"></span>
                        </div>
                    </div>
                    <b-container>
                        <ComponentLoader :state="roomModule.getLoadingState('get-roomList')" class="row row-cols-3">
                            <Room
                                v-for="(rooms, index) in roomModule.rooms"
                                :key="index"
                                :room="rooms"
                            >
                            </Room>
                        </ComponentLoader>
                    </b-container>
                </section>
            </b-col>
            <b-col md="1"></b-col>
            <b-col xl="4" lg="3" md="12" sm="12" class="mb-4">
                <section id="userOfTheWeekComponent" class="habbo--section">
                    <div class="d-flex flex-row mb-4">
                        <i class="sprite sprite--user-of-the-hotel"></i>
                        <div class="d-inline-flex flex-column justify-content-center pl-2">
                            <span class="section-title" v-t="'layout.component.useroftheweek.title'"></span>
                            <span class="section-description" v-t="'layout.component.useroftheweek.description'"></span>
                        </div>
                    </div>
                    <ComponentLoader :state="userOfTheWeekModule.getLoadingState('get-userOfTheWeek')">
                        <UserOfTheWeek
                            v-if="userOfTheWeek"
                            :userOfTheWeek="userOfTheWeek"
                        >
                        </UserOfTheWeek>
                    </ComponentLoader>
                </section>
                <section id="guildComponent" class="habbo--section mt-5">
                    <div class="d-flex flex-row mb-4">
                        <i class="sprite sprite--members mt-2"></i>
                        <div class="d-inline-flex flex-column justify-content-center pl-2">
                            <span class="section-title" v-t="'layout.component.guild.title'"></span>
                            <span class="section-description" v-t="'layout.component.guild.description'"></span>
                        </div>
                    </div>
                    <b-card>
                        <b-nav class="guild">
                            <ComponentLoader :state="guildModule.getLoadingState('get-guildList')">
                                <Guild
                                    v-for="(guilds, index) in guildModule.guilds"
                                    :key="index"
                                    :guild="guilds"
                                >
                                </Guild>
                            </ComponentLoader>
                        </b-nav>
                    </b-card>
                </section>
            </b-col>
        </b-row>
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
import { BRow, BCol, BCard, BNav, BCardBody, BCardTitle, BContainer } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        UserOfTheWeek,
        FriendList,
        Guild,
        Room,
        ComponentLoader,
        BCardBody,
        BContainer,
        BNav,
        BRow,
        BCol,
        BCard,
        BCardTitle
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
