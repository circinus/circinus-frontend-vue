<template>
    <component
        :is="to ? 'router-link' : 'button'"
        :to="to"
        :class="[
            'btn',
            `btn-${this.variant}`,
            loading && 'btn-loading',
            big && 'btn-big',
            round && 'btn-round'
        ]"
        :type="type"
    >
        <template v-if="hasLeftIcon()">
            <span class="icon-container left">
                <slot name="iconLeft" />
            </span>
        </template>
        <span class="btn-text">
            <slot />
        </span>
        <template v-if="hasRightIcon()">
            <span class="icon-container right">
                <slot name="iconRight" />
            </span>
        </template>
    </component>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Variant } from '@/components/interfaces/Variant';
import { VNode } from 'vue';

export enum ButtonType {
    SUBMIT = 'submit',
    BUTTON = 'button'
}

@Component
export default class Button extends Vue {
    @Prop({ default: ButtonType.BUTTON }) private type!: ButtonType;
    @Prop() private to?: { name: string; };
    @Prop({ default: Variant.PRIMARY }) private variant!: Variant;
    @Prop({ default: false }) private loading!: boolean;
    @Prop() private big?: boolean;
    @Prop() private round?: boolean;

    public $slots!: {
        iconLeft?: VNode[];
        iconRight?: VNode[];
    }

    private hasLeftIcon(): boolean {
        return !!this.$slots.iconLeft;
    }

    private hasRightIcon(): boolean {
        return !!this.$slots.iconRight;
    }
}
</script>
