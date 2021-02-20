<template>
    <li>
        <div class="avatar">
            <img :src="guildImaging + '/' + this.guild.badge">
        </div>
        <div class="row">
            <div class="col">
                <span class="title">{{ this.guild.name }}</span>
            </div>
            <div class="w-100"></div>
            <div class="col">
                <span class="description">{{ this.guild.description }}</span>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { IGuild } from '@/store/modules/guilds/IGuild';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { environment } from '../../../environment';

@Component({})
export default class Guilds extends Vue {
    @Prop({ required: true }) private guild!: IGuild;

    private guildImaging = environment.SITE.GUILDSIMAGING
}
</script>
