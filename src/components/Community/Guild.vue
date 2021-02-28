<template>
    <b-nav-item>
    <b-col>
        <b-card no-body>
            <b-row no-gutters>
                <b-col md="3" class="text-center d-flex">
                    <img :src="guildImaging + '/' + this.guild.badge">
                </b-col>
                    <b-col md="7">
                        <span class="title">{{ this.guild.name }}</span>
                        <span class="description">{{ this.guild.description }}</span>
                    </b-col>
            </b-row>
        </b-card>
    </b-col>
    </b-nav-item>
</template>

<script lang="ts">
import { IGuild } from '@/store/modules/guilds/IGuild';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { environment } from '../../../environment';
import { BNavItem, BRow, BCol } from 'bootstrap-vue';

@Component({
    components: {
        BNavItem,
        BRow,
        BCol
    }
})
export default class Guilds extends Vue {
    @Prop({ required: true }) private guild!: IGuild;

    private guildImaging = environment.SITE.GUILDSIMAGING
}
</script>
