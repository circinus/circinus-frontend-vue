<template>
  <div class="row">
    <div class="col-sm" v-for="look in looks">
      <img class="looks" v-bind:src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + look + '&headonly=1'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Looks extends Vue {
    @Prop() private looks!: Array<string>;
}
</script>
