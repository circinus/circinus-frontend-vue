<template>
    <Fragment>
        <PaneContainer class="page">
            <Pane class="page-navigation">
                Menu
            </Pane>
            <Pane>
                <Header>
                    Header
                </Header>
                <slot />
            </Pane>
        </PaneContainer>
    </Fragment>
</template>

<script lang="ts" >

import { Component, Vue } from 'vue-property-decorator';
import { Fragment } from 'vue-fragment';
import PaneContainer from '@/components/Pane/Container.vue';
import Pane from '@/components/Pane/Pane.vue';
import Header from '@/views/Layout/Header.vue';

@Component({
    components: {
        Fragment,
        PaneContainer,
        Pane,
        Header
    }
})
export default class Page extends Vue {}
</script>
