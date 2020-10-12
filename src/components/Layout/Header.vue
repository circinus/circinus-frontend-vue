<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 d-flex flex-column my-4">
        <h3 id="header--title" class="mb-3">
          Meteor: Leuke Meteor's, vriendelijk, gezelligheid! Wees er snel bij en maak vrienden!
        </h3>

        <p id="header--description">
          Maak vandaag nog je account aan en ontvang een welkomst- bonus, waar wacht je op?
        </p>

        <router-link class="btn btn--light w-50" :to="{ name: 'register' }">Register</router-link>
      </div>

      <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
        <div id="header--image" class="d-flex justify-content-center align-items-center p-4 h-100">
          <template v-if="authenticated">
              <div class="card card--user w-75 d-flex flex-column p-4">
                <div class="user--rounded-image align-self-center">
                  <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=3&head_direction=3" alt="necmi" />
                </div>

                <p class="username align-self-center pt-2">{{ user.username }}</p>

                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-center">
                    <span class="user--info-title">Credits</span>
                    <span class="user--info-value">{{ user.credits }}</span>
                  </div>

                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-center">
                    <span class="user--info-title">Diamonds</span>
                    <span class="user--info-value">1.10M</span>
                  </div>

                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-center">
                    <span class="user--info-title">Duckets</span>
                    <span class="user--info-value">1.10M</span>
                  </div>
                </div>
              </div>
          </template>
        </div>
      </div>
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