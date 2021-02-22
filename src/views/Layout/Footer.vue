<template>
    <footer class="page-footer d-flex flex-column mt-4">
        <div class="container d-flex flex-column py-3">
            <strong v-t="'layout.footer.credits'"></strong>
            <small v-t="'layout.footer.description'"></small>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Footer extends Vue {

}
</script>

<style scoped>

</style>
