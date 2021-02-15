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

            <LoadComponent module="getArticles">
                <div class="row">
                    <articles
                        v-for="(article, index) in articles"
                        :key="index"
                        :article="article"
                        :index="index"
                    >
                    </articles>
                </div>
            </LoadComponent>

        </section>

        <section id="popular-news" class="habbo--section">
            <div class="d-flex flex-row mb-4">
                <img class="mr-2 object-contain image-pixelated" src="@/assets/images/icons/news.png" alt="News"/>
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.dashboard.photos.title'"></span>
                    <span class="section-description" v-t="'layout.dashboard.photos.description'"></span>
                </div>
            </div>

            <LoadComponent module="getPhotos">
                <div class="row">
                    <photos
                        v-for="(photos, index) in photos"
                        :key="index"
                        :photo="photos"
                    >
                    </photos>
                </div>
            </LoadComponent>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Articles from '@/components/Home/Dashboard/Articles.vue'
import { Getter } from 'vuex-class'
import { IArticle } from '@/store/modules/home/IArticle'
import { ComponentOptions } from 'vue'
import Photos from '@/components/Home/Dashboard/Photos.vue'
import ComponentLoader from '@/components/ComponentLoader.vue'
import LoadComponent from '@/components/ComponentLoader.vue'
import { IPhoto } from '@/store/modules/home/IPhoto'

@Component({
    components: {
        LoadComponent,
        Articles,
        Photos,
        ComponentLoader
    }
})
export default class Home extends Vue implements ComponentOptions<Vue> {
    @Getter('articles/articles') private articles!: Array<IArticle>;
    @Getter('photos/photos') private photos!: Array<IPhoto>;

    public mounted(): void {
        this.$store.dispatch('articles/getArticles')
        this.$store.dispatch('photos/setPhotos')
    }
}
</script>
