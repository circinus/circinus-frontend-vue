<template>
  <div>

    <section id="current-news" class="habbo--section mt-4">
      <div class="d-flex flex-row mb-4">
        <img class="mr-2 object-contain image-pixelated" src="/assets/images/icons/news.png" alt="News" />
        <div class="d-inline-flex flex-column justify-content-center">
          <span class="section-title">Aktuelle Neugikeiten</span>
          <span class="section-description">Die aktuellen Neugikeiten auf einen Blick</span>
        </div>
      </div>

      <div class="row">

        <div v-for="(stories, index) in newStories" class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <a :href="[stories.slug]" class="opacity-1">
            <div class="card card--news d-flex flex-column p-4 mb-4" style="background-image: url('/assets/images/news/news_img.png')">
              <div class="flex-fill d-inline-flex flex-row justify-content-center">
                <div class="flex-fill">
                  <span class="news--category">Algemeen</span>
                </div>
              </div>

              <span class="news--title">{{ stories.title }}</span>
              <span class="news--description">
                {{ stories.description }}
            </span>
            </div>
          </a>
        </div>
      </div>

    </section>

    <section id="popular-news" class="habbo--section">
      <div class="d-flex flex-row mb-4">
        <img class="mr-2 object-contain image-pixelated" src="/assets/images/icons/news.png" alt="News" />
        <div class="d-inline-flex flex-column justify-content-center">
          <span class="section-title">Beliebtesten Neugikeiten</span>
          <span class="section-description">Sieh dir die beliebtesten Neugikeiten an</span>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="news--info d-flex flex-row align-items-center mb-3">
            <div class="user--rounded-image bg-white mr-2">
              <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=3&head_direction=3" alt="necmi" />
            </div>

            <div class="flex-fill d-inline-flex flex-column">
              <strong class="mb-0">necmi</strong>

              <div class="d-inline-flex flex-row">
                <span class="flex-fill">Allgemein</span>
                <span>27. September 2020</span>
              </div>
            </div>
          </div>
          <a href="#" class="opacity-1">
            <div class="card card--popular-news d-flex flex-column mb-4">
              <div class="card-img-top" style="background-image: url('/assets/images/news/news_img.png')">
                <div class="flex-fill d-inline-flex flex-row justify-content-center">
                  <span class="news--category ml-3 mt-3">Allgemein</span>
                </div>
              </div>

              <div class="card-body d-flex flex-column">
                <span class="news--title">Habbo Festivals 2020!</span>
                <span class="news--description">
                                        Bereitet euch auf einen Monat voller Überraschungen vor. Für weitere Informationen...
                                    </span>

                <div class="d-inline-flex flex-row mt-3 align-items-center">
                  <i class="far fa-heart mr-2"></i>
                  <span class="mr-3 font-weight-bold">1337</span>

                  <i class="far fa-comment-alt mr-2"></i>
                  <span class="mr-3 font-weight-bold">1337</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="news--info d-flex flex-row align-items-center mb-3">
            <div class="user--rounded-image bg-white mr-2">
              <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=3&head_direction=3" alt="necmi" />
            </div>

            <div class="flex-fill d-inline-flex flex-column">
              <strong class="mb-0">necmi</strong>

              <div class="d-inline-flex flex-row">
                <span class="flex-fill">Allgemein</span>
                <span>27. September 2020</span>
              </div>
            </div>
          </div>
          <a href="#" class="opacity-1">
            <div class="card card--popular-news d-flex flex-column mb-4">
              <div class="card-img-top" style="background-image: url('/assets/images/news/news_img.png')">
                <div class="flex-fill d-inline-flex flex-row justify-content-center">
                  <span class="news--category ml-3 mt-3">Allgemein</span>
                </div>
              </div>

              <div class="card-body d-flex flex-column">
                <span class="news--title">Habbo Festivals 2020!</span>
                <span class="news--description">
                                        Bereitet euch auf einen Monat voller Überraschungen vor. Für weitere Informationen...
                                    </span>

                <div class="d-inline-flex flex-row mt-3 align-items-center">
                  <i class="far fa-heart mr-2"></i>
                  <span class="mr-3 font-weight-bold">1337</span>

                  <i class="far fa-comment-alt mr-2"></i>
                  <span class="mr-3 font-weight-bold">1337</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="news--info d-flex flex-row align-items-center mb-3">
            <div class="user--rounded-image bg-white mr-2">
              <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=3&head_direction=3" alt="necmi" />
            </div>

            <div class="flex-fill d-inline-flex flex-column">
              <strong class="mb-0">necmi</strong>

              <div class="d-inline-flex flex-row">
                <span class="flex-fill">Allgemein</span>
                <span>27. September 2020</span>
              </div>
            </div>
          </div>
          <a href="#" class="opacity-1">
            <div class="card card--popular-news d-flex flex-column mb-4">
              <div class="card-img-top" style="background-image: url('/assets/images/news/news_img.png')">
                <div class="flex-fill d-inline-flex flex-row justify-content-center">
                  <span class="news--category ml-3 mt-3">Allgemein</span>
                </div>
              </div>

              <div class="card-body d-flex flex-column">
                <span class="news--title">Habbo Festivals 2020!</span>
                <span class="news--description">
                                        Bereitet euch auf einen Monat voller Überraschungen vor. Für weitere Informationen...
                                    </span>

                <div class="d-inline-flex flex-row mt-3 align-items-center">
                  <i class="far fa-heart mr-2"></i>
                  <span class="mr-3 font-weight-bold">1337</span>

                  <i class="far fa-comment-alt mr-2"></i>
                  <span class="mr-3 font-weight-bold">1337</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapState('articles', {
        newStories: 'stories'
    })
  },

  created: function () {
      this.$store.dispatch('articles/getStories');
  }

}
</script>
