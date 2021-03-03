<template>
    <div
        :class="[
            'grid',
            rows && `grid-rows-${rows}`,
            cols && `grid-cols-${cols}`,
            gap && `gap-${gap}`,
        ]"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
    @Prop({ default: 0 }) private rows!: number;
    @Prop({ default: 0 }) private cols!: number;
    @Prop({ default: 0 }) private gap!: number;
}

</script>
