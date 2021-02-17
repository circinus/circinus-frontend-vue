<template>
    <div>
        <section id="current-news" class="habbo--section mt-5">
            <div class="d-flex flex-row mb-4">
                <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News"/>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.dashboard.news.title'"></span>
                    <span class="section-description" v-t="'layout.dashboard.news.description'"></span>
                </div>
            </div>

            <ComponentLoader :state="articleModule.getLoadingState('get-articles')">
                <div class="row">
                    <articles
                        v-for="(article, index) in articleModule.articles"
                        :key="index"
                        :article="article"
                        :index="index"
                    >
                    </articles>
                </div>
            </ComponentLoader>
        </section>

        <section id="popular-news" class="habbo--section">
            <div class="d-flex flex-row mb-4">
                <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News"/>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.dashboard.photos.title'"></span>
                    <span class="section-description" v-t="'layout.dashboard.photos.description'"></span>
                </div>
            </div>

<!--            <div class="row">-->
<!--                <photos-->
<!--                    v-for="(photos, index) in photos"-->
<!--                    :key="index"-->
<!--                    :photo="photos"-->
<!--                >-->
<!--                </photos>-->
<!--            </div>-->
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

@Observer
@Component({
    components: {
        Articles,
        Photos,
        ComponentLoader
    }
})
export default class Home extends Vue implements ComponentOptions<Vue> {
    private articleModule = articleModule

    public mounted(): void {
        this.articleModule.getArticles();
        this.$store.dispatch('photos/setPhotos');
    }
}
</script>
