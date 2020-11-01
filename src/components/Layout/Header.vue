<template>
    <div id="header--image" class="row">
      <div class="d-flex flex-column justify-content-center align-items-center my-4" style="position: absolute; width: 100%;">

        <p id="header--description">
          Chatten, vrienden maken en lekker jezelf zijn, dat bieden wij op de gezelligste community van Nederland! Kom jij ook?
        </p>

        <a href="#" class="btn btn--light w-25" v-if="!authenticated">Meld je aan!</a>
        <a href="#" class="btn btn--light w-25" v-if="authenticated">Ga naar binnen</a>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import api from '../../helpers/api'

export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  },

  created() {
      //api.post('articles/list').then((response) => {
        //console.log(response)
      //});
  }
}
</script>

<style scoped>

</style>