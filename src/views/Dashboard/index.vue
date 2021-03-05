<template>
    <Page>
        Dashboard
    </Page>
</template>

<script lang="ts" >

import { Component, Vue } from 'vue-property-decorator';
import Page from '@/views/Layout/Page.vue';

@Component({
    components: {
        Page
    }
})
export default class Dashboard extends Vue {

}
</script>
