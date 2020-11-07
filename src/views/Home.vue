<template>
    <div>
        <vue-headful title="Homepage" />
        <section id="current-news" class="habbo--section mt-5">
            <div class="d-flex flex-row mb-4">
                <img class="mr-2 object-contain image-pixelated" src="/assets/images/icons/news.png" alt="News" />
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.dashboard.news.title'"></span>
                    <span class="section-description" v-t="'layout.dashboard.news.description'"></span>
                </div>
            </div>

            <div class="row">
                <articles
                    v-for="(stories, index) in newStories"
                    :key="index"
                    :articles="stories"
                    :index="index"
                >
                </articles>
            </div>

        </section>

        <section id="popular-news" class="habbo--section">
            <div class="d-flex flex-row mb-4">
                <img class="mr-2 object-contain image-pixelated" src="/assets/images/icons/news.png" alt="News" />
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title" v-t="'layout.dashboard.photos.title'"></span>
                    <span class="section-description" v-t="'layout.dashboard.photos.description'"></span>
                </div>
            </div>

            <div class="row">
                <photos
                v-for="(photos, index) in getPhotos"
                :key="index"
                :photo="photos"
                >
                </photos>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Articles from '../components/Home/Articles';
import Photos from '../components/Home/Photos';

export default {
  name: 'Home',

  components: {
    Articles,
    Photos
  },

  computed: {
    ...mapState('articles', {
      newStories: 'stories'
    }),

    ...mapState('photos', {
      getPhotos: 'photos'
    })
  },

  created: function () {
    this.$store.dispatch('articles/getStories');
    this.$store.dispatch('photos/getPhotos');
  }

}
</script>
