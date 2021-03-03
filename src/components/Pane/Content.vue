<template>
    <div
        :class="['pane-content']"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PaneContent extends Vue {}
</script>
