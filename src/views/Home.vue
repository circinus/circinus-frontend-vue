<template>
  <div>

    <section id="current-news" class="habbo--section mt-5">
      <div class="d-flex flex-row mb-4">
        <img class="mr-2 object-contain image-pixelated" src="/assets/images/icons/news.png" alt="News" />
        <div class="d-inline-flex flex-column justify-content-center">
          <span class="section-title">Actuele nieuws</span>
          <span class="section-description">Wat zijn de hoogtepunten binnen ons hotel?</span>
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
          <span class="section-title">Foto- berichten</span>
          <span class="section-description">Zie hier collage van leuke momenten!</span>
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
