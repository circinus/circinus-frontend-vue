<template>
  <div>
    <load-component module="getList">

      <div class="row">
        <div class="col-md-8 mt-0 pt-0">


          <div v-for="(rank, index) in list" :key="index" :ranks="rank">

            <h5>
              {{ rank.rank_name }}
            </h5>

            <div class="col-md-8 ml-0 pl-0">


              <div class="row">
                <div class="col-md-6 mt-2 mb-2" v-for="(user, index) in rank.users" :key="index" :user="user">
                  <div class="card">
                    <img class="img-fluid align-self-center"
                         :src="'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=' + user.look + '&amp;action=std&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=l&headonly=1'" width="100">
                    {{ user.username }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>{{ title }} Staff</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem earum eos incidunt
                iure labore laborum molestias mollitia neque nostrum officiis provident quam quasi, quis reiciendis
                rerum sed veritatis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </load-component>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Staff',
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  },
  computed: {
    ...mapGetters({
      list: 'permissions/list'
    })
  },
  created() {
    this.$store.dispatch('permissions/getStafflist');
  },
}
</script>