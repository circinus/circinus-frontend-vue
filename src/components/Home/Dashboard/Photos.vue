<template>
    <b-col xl="3" lg="4" md="12" sm="12">
        <div class="news--info d-flex flex-row align-items-center mb-3">
            <div class="user--rounded-image online mr-2">
                <div class="status" :class="this.photo.user.online === 1 ? 'offline' : 'online'"></div>
                <img
                    v-bind:src="this.avatarImaging + this.photo.user.look + '&action=std&gesture=std&direction=3&head_direction=3&headonly=1'"
                    :alt="this.photo.user.username"/>
            </div>

            <div class="flex-fill d-inline-flex flex-column">
                <strong class="mb-0">{{ this.photo.user.username }}</strong>

                <div class="d-inline-flex flex-row">
                    <span>{{ this.photo.timestamp | moment("dddd, MMMM Do YYYY") }}</span>
                </div>
            </div>
        </div>

        <modal ref="photo" :saveButton="false">
            <template v-slot:body v-slot:[url]="{ photo }">
                <img :src="photo.url" class="pixelated">
            </template>
        </modal>

        <div class="opacity-1">
            <b-card no-body class="card--popular-news d-flex flex-column mb-4">
                <div @click="$refs.photo.openClose()" class="card-img-top"
                     v-bind:style="{ backgroundImage: 'url(' + this.photo.url + ')', backgroundSize: 'auto !important' }"></div>

                <b-card-body class="d-flex flex-column">
                    <div class="d-inline-flex flex-row align-items-center">

                        <span class="mr-3 font-weight-bold" @click="votePhoto('likes')">
                            <font-awesome-icon :style="{color: voted(1)}" icon="thumbs-up"
                                               class="mr-2"></font-awesome-icon>
                            {{ this.photo.likes }}
                        </span>

                        <span class="mr-3 font-weight-bold" @click="votePhoto('dislikes')">
                            <font-awesome-icon :style="{color: voted(0)}" icon="thumbs-down"
                                               class="mr-2"></font-awesome-icon>
                            {{ this.photo.dislikes }}
                        </span>
                    </div>
                </b-card-body>
            </b-card>
        </div>
    </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { INewVote } from '@/store/modules/photos/INewVote';
import { IVoteType } from '@/store/modules/votes/IVoteType';
import { IPhoto } from '@/store/modules/photos/IPhoto';
import { authModule } from '@/store/modules/auth/AuthModule';
import { voteModule } from '@/store/modules/votes/VoteModule';
import { environment } from '../../../../environment';
import { Observer } from 'mobx-vue';
import Modal from '@/components/Modal.vue';
import { BCard, BCardBody, BCol } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        Modal,
        BCard,
        BCardBody,
        BCol
    }
})
export default class Photos extends Vue {
    @Prop({ required: true }) private photo!: IPhoto;

    private authModule = authModule;
    private voteModule = voteModule;
    private avatarImaging = environment.SITE.FIGUREIMAGING
    public $refs!: {
        photo: Modal;
    }

    private voted(type: number): string {
        if (this.authModule.authenticated) {
            const voteColor = type === 1 ? 'green' : 'red';
            return this.voteModule.exists(this.photo.id, type) ? voteColor : 'black';
        }

        return 'black';
    }

    private votePhoto(vote: keyof IVoteType) {
        const newVote: INewVote = {
            entity_id: this.photo.id,
            vote_entity: this.voteModule.entityTypes.photo_vote_entity,
            vote_type: this.voteModule.voteTypes[vote]
        };

        this.voteModule.createVote(newVote).then(() => {
            this.photo[vote] = this.photo[vote] + 1;
        });
    }
}
</script>
