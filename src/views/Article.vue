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

<script>
import {mapGetters} from 'vuex'

import ArticleContent from '@/components/Article/ArticleContent';

export default {
    name: 'ArticleView',

    components: {
        ArticleContent
    },

    computed: {
        ...mapGetters({
            article: 'articles/article',
            articles: 'articles/articles'
        })
    },

    created: function () {
        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
        this.$store.dispatch('articles/getArticles');
    }

}
</script>