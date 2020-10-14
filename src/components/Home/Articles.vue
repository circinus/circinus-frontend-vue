<template>
    <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12">
      <a v-bind:href="'articles/' + this.articles.slug" class="opacity-1">
        <div class="card card--news d-flex flex-column p-4 mb-4" v-bind:style="{ backgroundImage: 'url(' + this.articles.image + ')' }">
          <div class="flex-fill d-inline-flex flex-row justify-content-center" >
            <div class="flex-fill">
              <span class="news--category">Algemeen</span>
            </div>
          </div>

          <span class="news--title">{{ this.articles.title }}</span>
          <span class="news--description">
                {{ this.articles.description }}
            </span>
        </div>
      </a>
      </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>