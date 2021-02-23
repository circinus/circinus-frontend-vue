<template>
    <b-col xl="4" lg="5" md="12" sm="12">
      <router-link :to="'/articles/' + this.article.id + '/' + this.article.slug" class="opacity-1">
        <b-card no-body class="card--news d-flex flex-column p-4 mb-4" v-bind:style="{ backgroundImage: 'url(' + this.article.image + ')' }">
          <div class="flex-fill d-inline-flex flex-row justify-content-center" >
            <div class="flex-fill">
              <span class="news--category">Algemeen</span>
            </div>
          </div>

          <span class="news--title">{{ this.article.title }}</span>
          <span class="news--description">
                {{ this.article.description }}
            </span>
        </b-card>
      </router-link>
      </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IArticle } from '@/store/modules/articles/IArticle';
import { BCard, BCol } from 'bootstrap-vue';

@Component({
    components: {
        BCard,
        BCol
    }
})
export default class Articles extends Vue {
    @Prop({ required: true }) private article!: IArticle;
}
</script>
