<template>
    <div>
        <LoadComponent module="getArticle">
            <article-content
                v-if="article"
                :article="article"
                :articles="articles"
            >
            </article-content>
        </LoadComponent>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ComponentOptions } from 'vue'

import { IArticle } from '@/store/modules/home/IArticle'
import { Getter } from 'vuex-class'
import ArticleContent from '@/components/Article/ArticleContent.vue'
import ComponentLoader from '@/components/ComponentLoader.vue'
import LoadComponent from '@/components/ComponentLoader.vue'

@Component({
    components: {
        LoadComponent,
        ArticleContent,
        ComponentLoader
    }
})
export default class Article extends Vue implements ComponentOptions<Vue> {
    @Getter('articles/article') private article!: IArticle | null;
    @Getter('articles/articles') private articles!: Array<IArticle>;

    public created(): void {
        this.$store.dispatch('articles/getArticle', this.$route.params.slug)
        this.$store.dispatch('articles/getArticles')
    }
}
</script>
