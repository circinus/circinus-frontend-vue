<template>
    <section id="current-news" class="habbo--section mt-5">

        <div class="row">
            <div class="col-xl-8 col-lg-8 col-sm-12">
                <div class="d-flex flex-row mb-4">
                    <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News"/>
                    <div class="d-inline-flex flex-column justify-content-center">
                        <span class="section-title">{{ this.article.title }}</span>
                        <span class="section-description">{{ this.article.description }}</span>
                    </div>
                </div>

                <div class="card article--card d-flex px-4 py-2 mb-4">
                    <div class="card-header d-inline-flex align-items-center flex-row px-0">
                        <div class="author--look mr-2">
                            <img class="looks"
                                 v-bind:src=" this.avatarImaging + this.article.user.look + '&amp;action=std&amp;direction=2&amp;head_direction=2&amp;img_format=png&amp;gesture=std&amp;headonly=0&amp;size=s'"
                                 :alt="this.article.user.look"/>
                        </div>
                        <span class="mr-2 flex-fill" style="font-size: 15px;">{{ this.article.user.username }}</span>
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

                            <div class="d-inline-flex flex-row align-items-center mr-2" v-if="authModule.authenticated">
                                <button class="nav-link btn btn-warning" style="color:#fff"
                                        @click="$refs.articleComment.openClose()" v-t="'layout.article.react'"></button>
                            </div>
                        </div>
                    </div>

                    <ComponentLoader :state="articleModule.getLoadingState('get-articles')">
                        <div class="comments row mx-4">
                            <ArticleComments
                                v-for="(stories, index) in articleComments"
                                :key="stories.id"
                                :comment="stories"
                                :index="index"
                            />
                        </div>
                    </ComponentLoader>
                </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-sm-12">
                <div class="d-flex flex-row mb-4">
                    <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News"/>
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

            <modal ref="articleComment" :title="$t('layout.article.react_on')" saveButton="true" v-if="authModule.authenticated">

                <template v-slot:body>
                    <div class="form-group">
                        <textarea v-model="newComment" class="form-control display-1" rows="3"></textarea>
                    </div>
                </template>
            </modal>

        </div>

    </section>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IArticle } from '@/store/modules/articles/IArticle';
import bus from '@/helpers/bus';
import ArticleSidebar from '@/components/Article/ArticleSidebar.vue';
import ArticleComments from '@/components/Article/ArticleComments.vue';
import Modal from '@/components/Modal.vue';
import { ComponentOptions } from 'vue';
import { INewComment } from '@/store/modules/articles/INewComment';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { authModule } from '@/store/modules/auth/AuthModule';
import { articleModule } from '@/store/modules/articles/ArticleModule';
import { IComment } from '@/store/modules/articles/IComment';
import { Observer } from 'mobx-vue';
import { environment } from '../../../environment';

@Observer
@Component({
    components: {
        ArticleSidebar,
        ArticleComments,
        Modal,
        ComponentLoader
    }
})
export default class ArticleContent extends Vue implements ComponentOptions<Vue> {
    private avatarImaging = environment.SITE.FIGUREIMAGING

    @Prop({ required: true }) private article!: IArticle;
    @Prop({ default: [] }) private articles!: Array<IArticle>;
    private authModule = authModule;
    private articleModule = articleModule;
    private articleComments: Array<IComment> = [];
    public $refs!: {
        articleComment: Modal;
    }

    private newComment = '';

    public mounted(): void {
        this.refreshComments();
    }

    private async refreshComments(): Promise<void> {
        this.articleComments = await this.articleModule.getComments({
            id: this.article.id,
            page: 1,
            offset: 8
        });
    }

    public created(): void {
        bus.$on('saveModal', () => {
            const newComment: INewComment = {
                content: this.newComment,
                article_id: this.article.id
            };

            this.articleModule.createComment(newComment).then(() => {
                this.refreshComments();
                this.$refs.articleComment.openClose();
            });
        });
    }
}
</script>

<style scoped>

</style>
