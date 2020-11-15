<template>
    <div>
        <article-content
            v-if="article"
            :article="article"
            :articles="articles"
            :comments="comments"
        >
        </article-content>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import ArticleContent from '../components/Article/ArticleContent';

export default {
    name: 'ArticleView',

    components: {
        ArticleContent
    },

    computed: {
        ...mapGetters({
            article: 'articles/article',
            articles: 'articles/articles',
            comments: 'articles/comments'
        })
    },

    created: function () {
        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
        this.$store.dispatch('articles/getComments', this.$route.params.id);
        this.$store.dispatch('articles/getArticles');
    }

}
</script>