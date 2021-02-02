<template>
  <div>
    <load-component module="getList">

      <div class="row">
        <div class="col-md-12 text-center">
          <div class="header">
            <h1 v-t="'layout.nav.members'"></h1>
            <h5 v-t="'layout.staff.subtitle'" class="text-muted">Lorem ipsum dolor sit amet!</h5>
          </div>
        </div>
      </div>


      <div class="row mt-4">
        <div class="col-md-6 mt-0 pt-0">

          <div v-for="(rank, index) in list" :key="index" :ranks="rank">
            <div class="card rankCard">
              <h5 class="pl-2 rankTitle">
                {{ rank.rank_name }}
              </h5>
              <p class="pl-2 pb-0 mb-0 text-muted">Hier komt een subtitle</p>
            </div>
            <div class="row mb-2">
              <div class="col-md-6" v-for="(user, index) in rank.users" :key="index" :user="user">
                <div class="card staffCard">
                  <div class="userContent mb-3">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="staffImg mt-2">
                          <img class="img-fluid avatar"
                               :src="'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=' + user.look + '&amp;action=std&amp;gesture=sml&amp;direction=2&amp;head_direction=2&amp;size=l&headonly=1'">
                        </div>
                      </div>
                      <div class="col-md-7 userText">
                        <h4 class="mt-2 text-white">
                            <span class="username">
                            {{ user.username }}
                          </span>
                          <span :class="user.online === 3 ? 'onlineDot' : 'offlineDot'"></span>
                        </h4>
                        <h6 class="text-white">
                          {{ rank.rank_name }}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer rankCardFooter">
                    <div class="row">
                      <div class="col-md-3">
                        <img
                            src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                            alt="">
                      </div>
                      <div class="col-md-3">
                        <img
                            src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                            alt="">
                      </div>
                      <div class="col-md-3">
                        <img
                            src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                            alt="">
                      </div>
                      <div class="col-md-3">
                        <img
                            src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                            alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 staffText">
          <div class="card">
            <div class="card-body">
              <h5>
                <img class="mt-2 mb-2"
                     src="http://forum.ragezone.com/attachment.php?attachmentid=121693&d=1358624254&thumb=1&s=bbdd218dd373fb0f931612db712c53f7"
                     width="40" alt="">
                {{ title }} Staff</h5>
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