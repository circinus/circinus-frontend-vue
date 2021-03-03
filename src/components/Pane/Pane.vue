<template>
    <div
        :class="['pane', horizontal && 'horizontal']"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pane extends Vue {
    @Prop({ default: false }) private horizontal!: boolean;
}
</script>
