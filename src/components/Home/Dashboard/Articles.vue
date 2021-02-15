<template>
    <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12">
      <router-link :to="'/articles/' + this.article.id + '/' + this.article.slug" class="opacity-1">
        <div class="card card--news d-flex flex-column p-4 mb-4" v-bind:style="{ backgroundImage: 'url(' + this.article.image + ')' }">
          <div class="flex-fill d-inline-flex flex-row justify-content-center" >
            <div class="flex-fill">
              <span class="news--category">Algemeen</span>
            </div>
          </div>

          <span class="news--title">{{ this.article.title }}</span>
          <span class="news--description">
                {{ this.article.description }}
            </span>
        </div>
      </router-link>
      </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IArticle } from '@/store/modules/home/IArticle'

@Component
export default class Articles extends Vue {
    @Prop({ required: true }) private article!: IArticle;
}
</script>
