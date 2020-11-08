<template>
<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12">
    <div class="news--info d-flex flex-row align-items-center mb-3">
        <div class="user--rounded-image bg-white mr-2">
            <img v-bind:src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + this.photo.user.look + '&action=std&gesture=std&direction=3&head_direction=3'" alt="necmi" />
        </div>

        <div class="flex-fill d-inline-flex flex-column">
            <strong class="mb-0">{{ this.photo.user.username }}</strong>

            <div class="d-inline-flex flex-row">
                <span>{{ this.photo.timestamp}}</span>
            </div>
        </div>
    </div>

    <a href="#" class="opacity-1">
        <div class="card card--popular-news d-flex flex-column mb-4">
            <div class="card-img-top" v-bind:style="{ backgroundImage: 'url(' + this.photo.url + ')', backgroundSize: 'auto !important' }"></div>

                <div class="card-body d-flex flex-column">
                    <div class="d-inline-flex flex-row align-items-center">

                        <span class="mr-3 font-weight-bold" @click="votePhoto('likes')">
                            <i class="far fa-thumbs-up mr-2"></i>
                            {{ this.photo.likes }}
                        </span>

                        <span class="mr-3 font-weight-bold" @click="votePhoto('dislikes')">
                            <i class="far fa-thumbs-down mr-2"></i>
                            {{ this.photo.dislikes }}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {

    props: ['photo'],

    methods: {
        ...mapActions({
            setVote: 'photos/votePhoto'
        }),

        async votePhoto (vote) {
            const form_data = {
                entity_id: this.photo.id,
                vote_entity: 6,
                vote_type: vote === 'likes' ? 1 : 0
            }

            const result = await this.setVote(form_data)
            if(result) {
                this.photo[vote] = this.photo[vote] + 1
            }
        }
    }
}
</script>
