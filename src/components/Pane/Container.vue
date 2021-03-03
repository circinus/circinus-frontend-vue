<template>
    <div
        :class="['pane-container', vertical && 'vertical']"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PaneContainer extends Vue {
    @Prop({ default: false }) private vertical!: boolean;
}
</script>
