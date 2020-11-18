<template>
    <div>
        <load-component module="getArticle">
            <article-content
                v-if="article"
                :article="article"
                :articles="articles"
                :comments="comments"
            >
            </article-content>
        </load-component>
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

        const pagination = {
            id: this.$route.params.id,
            page: 1,
            offset: 8
        }

        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
        this.$store.dispatch('articles/getComments', pagination);
        this.$store.dispatch('articles/getArticles');
    }

}
</script>