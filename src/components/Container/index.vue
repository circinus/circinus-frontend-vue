<template>
    <div class="md:container mx-auto">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {

}
</script>
