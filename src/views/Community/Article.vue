<template>
    <div>
        <ComponentLoader module="getArticle">
            <ArticleContent
                v-if="article"
                :article="article"
                :articles="articles"
            >
            </ArticleContent>
        </ComponentLoader>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';

import { IArticle } from '@/store/modules/home/IArticle';
import { Getter } from 'vuex-class';
import ArticleContent from '@/components/Article/ArticleContent.vue';
import ComponentLoader from '@/components/ComponentLoader.vue';

@Component({
    components: {
        ArticleContent,
        ComponentLoader
    }
})
export default class Article extends Vue implements ComponentOptions<Vue> {
    @Getter('articles/article') private article!: IArticle | null;
    @Getter('articles/articles') private articles!: Array<IArticle>;

    public created(): void {
        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
        this.$store.dispatch('articles/getArticles');
    }
}
</script>
