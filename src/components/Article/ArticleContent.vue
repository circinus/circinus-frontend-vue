<template>
    <section id="current-news" class="habbo--section mt-5">

        <div class="row">
            <div class="col-xl-8 col-lg-8 col-sm-12">
                <div class="d-flex flex-row mb-4">
                    <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News" />
                    <div class="d-inline-flex flex-column justify-content-center">
                        <span class="section-title">{{this.article.title}}</span>
                        <span class="section-description">{{this.article.description}}</span>
                    </div>
                </div>

                <div class="card article--card d-flex px-4 py-2 mb-4">
                    <div class="card-header d-inline-flex align-items-center flex-row px-0">
                        <div class="author--look mr-2">
                            <img class="looks" v-bind:src="'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=' + this.article.user.look + '&amp;action=std&amp;direction=2&amp;head_direction=2&amp;img_format=png&amp;gesture=std&amp;headonly=0&amp;size=s'" :alt="this.article.user.look" />
                        </div>
                        <span class="mr-2 flex-fill" style="font-size: 15px;">{{this.article.user.username}}</span>
                        <div class="d-inline-flex flex-row align-items-center mr-2">
                            <i class="sprite sprite--date mr-2"></i>
                            <span>23/09/2020 - 09:09</span>
                        </div>
                    </div>
                    <div class="card-body" v-html="this.article.content"></div>
                </div>

                <div class="card card--comments mb-4">


                    <div class="card article--card d-flex px-4 py-2 mb-4">
                        <div class="card-header d-inline-flex align-items-center flex-row px-0">
                            <i class="sprite sprite--comments"></i>

                            <h5 class="mt-3 p-1 flex-fill" v-t="'layout.article.reactions'"></h5>

                            <div class="d-inline-flex flex-row align-items-center mr-2" v-if="authenticated">
                                <button class="nav-link btn btn-warning" style="color:#fff" @click="$refs.articleComment.openClose()" v-t="'layout.article.react'"></button>
                            </div>
                        </div>
                    </div>

                    <div class="comments row mx-4">
                            <article-comments
                                v-for="(stories, index) in this.comments"
                                :key="index"
                                :comment="stories"
                                :index="index"
                                >
                            </article-comments>
                    </div>
                </div>
            </div>


            <div class="col-xl-4 col-lg-4 col-sm-12">
                <div class="d-flex flex-row mb-4">
                    <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News" />
                    <div class="d-inline-flex flex-column justify-content-center">
                        <span class="section-title" v-t="'layout.article.more_news'"></span>
                    </div>

                </div>
                <article-sidebar
                    v-for="(stories, index) in this.articles"
                    :key="index"
                    :articles="stories"
                    :index="index"
                >
                </article-sidebar>
            </div>

            <modal ref="articleComment" :title="$t('layout.article.react_on')" v-if="authenticated">
                <template v-slot:body>
                    <div class="form-group">
                        <textarea v-model="articleComment"  class="form-control display-1" rows="3"></textarea>
                    </div>
                </template>
            </modal>

        </div>


    </section>


</template>

<script>
import ArticleSidebar from '@/components/Article/ArticleSidebar';
import ArticleComments from '@/components/Article/ArticleComments';
import Modal from '@/components/Modal';
import bus from "@/helpers/bus";

import {mapActions, mapGetters} from "vuex";

export default {
    name: "Article",
    props: ['article', 'articles'],

    data() {
        return {
            comment: {
                id: this.article.id,
                page: 1,
                offset: 8
            },
            articleComment: null
        }
    },

    components: {
        ArticleSidebar,
        ArticleComments,
        Modal
    },

    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            comments: 'articles/comments'
        })
    },

    methods: {
        ...mapActions({
            storeComment: 'articles/storeComment'
        }),

        getComments() {
            this.$store.dispatch('articles/getComments', this.comment);
        }
    },

    mounted() {
        this.getComments()
    },

    created() {

        bus.$on('saveModal', () => {

            const form_data = { content: this.articleComment, article_id: this.article.id }

            this.storeComment(form_data).then(() => {
                this.getComments()
                this.$refs.articleComment.openClose();
            })
        })
    }
}
</script>

<style scoped>

</style>