<template>
    <b-row>
        <b-col md="12" class="mt-2 mb-3 ng-star-inserted card card--article card--article--sidebar">
            <router-link :to="{ name: 'article', params: { id: this.articles.id, slug: this.articles.slug }}" class="opacity-1">
                <div class="list cursor-pointer">
                    <b-col cols="4" class="left card-bg">
                        <div class="background left" :style=" { 'background-image': 'url(' + this.articles.image + ')' }"></div>
                    </b-col>
                    <b-col cols="7" class="p-2 article--info mt-3">
                        <span class="article--title"><b>{{ this.articles.title }}</b></span><br />
                        <span class="article--description flex-fill">{{ this.articles.description }}</span>
                    </b-col>
                </div>
            </router-link>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IArticle } from '@/store/modules/articles/IArticle';
import { BRow, BCol, BCard } from 'bootstrap-vue';

@Component({
    components: {
        BCard,
        BRow,
        BCol
    }
})
export default class ArticleSidebar extends Vue {
    @Prop() private articles!: Array<IArticle>;
    private name: string = this.$route.params.name
}
</script>
