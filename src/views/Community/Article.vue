<template>
    <div>
        <ComponentLoader :state="articleModule.getLoadingState('get-article')">
            <ArticleContent
                v-if="article"
                :article="article"
                :articles="articleModule.articles"
            >
            </ArticleContent>
        </ComponentLoader>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';
import ArticleContent from '@/components/Article/ArticleContent.vue';
import ComponentLoader from '@/components/ComponentLoader';
import { ArticleModule, articleModule } from '@/store/modules/articles/ArticleModule';
import { IArticle } from '@/store/modules/articles/IArticle';
import { Observer } from 'mobx-vue';

@Observer
@Component({
    components: {
        ArticleContent,
        ComponentLoader
    }
})
export default class Article extends Vue implements ComponentOptions<Vue> {
    private articleModule: ArticleModule = articleModule;
    private article: IArticle | null = null;

    async mounted(): Promise<void> {
        this.articleModule.getArticles();
        this.refreshArticle();
    }

    private async refreshArticle(): Promise<void> {
        this.article = await this.articleModule.getArticle(this.$route.params.slug);
    }
}
</script>
