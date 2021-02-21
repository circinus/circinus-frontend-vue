<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-9">
                <router-view />
            </div>
            <div class="col-md-3">
                <b-list-group>
                    <div class="list-group-header" v-t="'layout.component.settings.user.title'"></div>
                    <b-list-group-item
                        :to="{ name: 'settings' }"
                        v-t="'layout.component.settings.account.title'"
                    />
                    <b-list-group-item
                        :to="{ name: 'security-settings' }"
                        v-t="'layout.component.settings.security.title'"
                    />
                </b-list-group>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BListGroup, BListGroupItem } from 'bootstrap-vue';

@Component({
    components: {
        BListGroup,
        BListGroupItem
    }
})
export default class Settings extends Vue {

}
</script>
