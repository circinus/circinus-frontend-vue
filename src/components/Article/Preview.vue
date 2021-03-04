<template>
    <div class="article-preview">
        {{ article.title }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IArticle } from '../../store/modules/articles/IArticle';

@Component
export default class ArticlePreview extends Vue {
    @Prop() private article!: IArticle;
}
</script>
