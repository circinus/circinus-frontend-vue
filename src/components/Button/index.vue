<template>
    <button
        :class="['btn']"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { Variant } from '@/components/interfaces/Variant';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop() private variant?: Variant;
}
</script>
