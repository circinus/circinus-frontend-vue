<template>
    <div>
        <section id="current-news" class="habbo--section mt-5">

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
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Articles from '@/components/Home/Dashboard/Articles.vue';
import { ComponentOptions } from 'vue';
import Photos from '@/components/Home/Dashboard/Photos.vue';
import ComponentLoader from '@/components/ComponentLoader.vue';
import { articleModule } from '@/store/modules/articles/ArticleModule';
import { Observer } from 'mobx-vue';
import { photoModule } from '@/store/modules/photos/PhotoModule';
import { BRow } from 'bootstrap-vue';

@Observer
@Component({
    components: {
        Articles,
        Photos,
        ComponentLoader,
        BRow
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
