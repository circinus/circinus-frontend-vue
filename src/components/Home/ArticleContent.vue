<template>
    <section id="current-news" class="habbo--section mt-5">

        <div class="col-xl-8 col-lg-8 col-sm-12">
            <div class="d-flex flex-row mb-4">
                <img class="mr-2 object-contain image-pixelated" src="/assets/images/icons/news.png" alt="News" />
                <div class="d-inline-flex flex-column justify-content-center">
                    <span class="section-title">{{this.article.title}}</span>
                    <span class="section-description">{{this.article.description}}</span>
                </div>

            </div>

            <div class="card article--card d-flex px-4 py-2 mb-4">
                <div class="card-header d-inline-flex align-items-center flex-row px-0">
                    <div class="author--look mr-2">
                        <img class="looks" v-bind:src="'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=' + this.article.user.look + '&amp;action=std&amp;direction=2&amp;head_direction=2&amp;img_format=png&amp;gesture=std&amp;headonly=0&amp;size=s'" :alt="this.article.user.look" />
                    </div>
                    <span class="mr-2 flex-fill">{{this.article.user.username}}</span>
                    <div class="d-inline-flex flex-row align-items-center mr-2">
                        <i class="sprite sprite--date mr-2"></i>
                        <span>23/09/2020 - 09:09</span>
                    </div>
                </div>
                <div class="card-body" v-html="this.article.content"></div>
            </div>
        </div>
    </section>


</template>

<script>
export default {
    name: "Article",

    props: ['article'],
}
</script>

<style scoped>

</style>