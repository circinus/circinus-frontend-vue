<template>
    <Fragment>
        <Header>
            Header
        </Header>
        <section class="home-landing-section mb-32">
            <Container>
                <Grid cols="2">
                    <div class="flex justify-center">
                        <div>
                            <h2>Welkom in Circinus</h2>
                            <h1>Word nu gratis lid!</h1>
                            <p class="mb-4">
                                Wat leuke welkomsttekst bladiebla
                            </p>
                            <Button
                                variant="success"
                                :big="true"
                                :round="true"
                            >
                                Registreer nu
                                <template v-slot:iconRight>
                                    +
                                </template>
                            </Button>
                        </div>
                    </div>
                    <div>
                        Image
                    </div>
                </Grid>
            </Container>
        </section>
        <Container>
            <h2>Laatste nieuws</h2>
            <Grid cols="3" gap="4">
                <ComponentLoader :state="articleModule.getLoadingState('get-articles')">
                    <ArticlePreview
                        v-for="(article) in articleModule.articles"
                        :article="article"
                        :key="article.id"
                    />
                </ComponentLoader>
            </Grid>
        </Container>
        <!-- <section id="current-news" class="habbo--section mt-5">

            <div class="d-flex flex-row mb-4">
                <i class="icon--news"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.component.news.title'"></span>
                    <span class="section-description" v-t="'layout.component.news.description'"></span>
                </div>
            </div>

            <ComponentLoader :state="articleModule.getLoadingState('get-articles')">
                <b-row>
                    <articles
                        v-for="(article, index) in articleModule.articles"
                        :key="index"
                        :article="article"
                        :index="index"
                    >
                    </articles>
                </b-row>
            </ComponentLoader>
        </section>

        <section id="popular-news" class="habbo--section">

            <div class="d-flex flex-row mb-4">
                <i class="icon--friends mt-2 mr-2"></i>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.component.photos.title'"></span>
                    <span class="section-description" v-t="'layout.component.photos.description'"></span>
                </div>
            </div>

            <ComponentLoader :state="photoModule.getLoadingState('get-photos')">
                <b-row>
                    <Photos
                        v-for="(photos, index) in photoModule.photos"
                        :key="index"
                        :photo="photos"
                    >
                    </Photos>
                </b-row>
            </ComponentLoader>
        </section> -->
    </Fragment>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BRow } from 'bootstrap-vue';
import { ComponentOptions } from 'vue';
import { Observer } from 'mobx-vue';
import { Fragment } from 'vue-fragment';
import Articles from '@/components/Home/Dashboard/Articles.vue';
import Photos from '@/components/Home/Dashboard/Photos.vue';
import { articleModule } from '@/store/modules/articles/ArticleModule';
import { photoModule } from '@/store/modules/photos/PhotoModule';
import Header from '@/views/Layout/Header.vue';
import Container from '@/components/Container/index.vue';
import Grid from '@/components/Grid/index.vue';
import Button from '@/components/Button/index.vue';
import Article from '@/views/Community/Article.vue';
import ArticlePreview from '@/components/Article/Preview.vue';
import ComponentLoader from '@/components/ComponentLoader.vue';

@Observer
@Component({
    components: {
        ArticlePreview,
        Article,
        ComponentLoader,
        Header,
        Container,
        Fragment,
        Grid,
        Button
    }
})
export default class Home extends Vue implements ComponentOptions<Vue> {
    private articleModule = articleModule;
    private photoModule = photoModule;

    public mounted(): void {
        this.articleModule.getArticles();
        this.photoModule.getPhotos();
    }
}
</script>
