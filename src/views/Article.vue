<template>
    <div>
        <article-content :article="article" v-if="article"></article-content>
        <article-comments :article="article"></article-comments>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import ArticleContent from '../components/Home/ArticleContent';
import ArticleComments from '../components/Home/ArticleComments';

export default {
    name: 'ArticleView',

    components: {
        ArticleContent,
        ArticleComments
    },

    computed: {
        ...mapGetters({
            article: 'articles/article',
        })
    },

    created: function () {
        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
        this.$store.dispatch('articles/getStories');
    }

}
</script>