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
        <slot />
    </component>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Variant } from '@/components/interfaces/Variant';

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
}
</script>
