<template>
    <div>
        <load-component module="getArticle">
            <article-content
                v-if="article"
                :article="article"
                :articles="articles"
            >
            </article-content>
        </load-component>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ComponentOptions } from 'vue';

import { IArticle } from '@/store/modules/home/IArticle';
import { Getter } from 'vuex-class';
import ArticleContent from '@/components/Article/ArticleContent.vue';

@Component({
    name: 'Article',
    components: {
        ArticleContent
    }
})
export default class Article extends Vue implements ComponentOptions<Vue> {
    @Getter('articles/article') private article!: IArticle | null;
    @Getter('articles/articles') private articles!: Array<IArticle>;

    public created() {
        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
        this.$store.dispatch('articles/getArticles');
    }
}
</script>
