import { Observer } from 'mobx-vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Fragment } from 'vue-fragment';
import { ComponentOptions, CreateElement, VNode } from 'vue';
import { LoadingState } from '@/store/modules/loading/LoadingState';

@Observer
@Component({
    components: {
        Fragment
    }
})
export default class ComponentLoader extends Vue implements ComponentOptions<Vue> {
    @Prop({ required: true }) private state!: LoadingState;
    private loadingState = LoadingState.LOADING;

    public $slots!: {
        default: VNode[];
    }

    public render(createElement: CreateElement): VNode {
        console.log(this.state, this.loadingState);
        if (this.state === this.loadingState) {
            return createElement(
                'div', {
                    class: 'lds-ripple'
                }, [
                    createElement('div'),
                    createElement('div')
                ]
            );
        } else {
            return createElement('div', this.$slots.default);
        }
    }
}
