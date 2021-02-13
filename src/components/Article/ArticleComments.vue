<template>
    <div class="col-12 comment ng-star-inserted">
        <div class="d-flex justify-content-start">
            <img class="align-self-start offline" v-bind:src="'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=' + this.comment.user.look + '&amp;action=std&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=l'">
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
import { IComment } from '@/store/modules/home/IComment';

@Component({
    name: 'ArticleComments'
})
export default class ArticleComments extends Vue {
    @Prop() private comment!: IComment;
}
</script>

<style scoped>

</style>
