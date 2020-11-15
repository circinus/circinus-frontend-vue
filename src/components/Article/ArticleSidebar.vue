<template>
         <div class="row">
            <div class="col-12 mb-3 ng-star-inserted">
                <div class="card card--article cursor-pointer">
                    <div class="d-flex flex-row p-4">
                        <img :src="this.articles.image" class="mr-3">
                        <div class="d-inline-flex flex-column article--info mt-1">
                            <span class="article--title">{{ this.articles.title }}</span>
                            <span class="article--description flex-fill">{{ this.articles.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
export default {
    name: "ArticleSidebar",
    props: ['articles'],
}
</script>

<style scoped>

</style>