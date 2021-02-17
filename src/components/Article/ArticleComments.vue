<template>
    <div class="col-12 comment ng-star-inserted">
        <div class="d-flex justify-content-start">
            <img class="align-self-start offline"
                 v-bind:src="this.avatarImaging + this.comment.user.look + '&amp;action=std&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=l'">
            <div class="flex-grow-1 d-inline-flex flex-column">
                <div class="d-inline-flex flex-row">
                    <strong class="pb-1 pt-2">{{ this.comment.user.username }}</strong>
                </div>
                <span class="pb-3 mr-2">{{ this.comment.content }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IComment } from '@/store/modules/articles/IComment';
import { environment } from '../../../environment';

@Component
export default class ArticleComments extends Vue {
    private avatarImaging = environment.SITE.FIGUREIMAGING;
    @Prop() private comment!: IComment;
}
</script>

<style scoped>

</style>
