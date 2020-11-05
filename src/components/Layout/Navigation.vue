<template>
  <nav id="navbar--primary" class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar--primary-collapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar--primary-collapse">
        <ul class="navbar-nav mr-auto" v-if="authenticated">
          <div class="row">
            <div class="col user--statics">
              <div class="icon credits"></div>
              <div class="pt-1" style="margin-left: 50px;">
                <div class="font-weight-bold">{{user.credits}}</div> <span>CREDITS</span>
              </div>
            </div>
            <div v-for="currency in user.currencies" :key="currency.name" class="col user--statics">
              <div class="icon" :class="currency.name"></div>
              <div class="pt-1" style="margin-left: 50px;">
                <div class="font-weight-bold">{{currency.amount}}</div> <span>{{ currency.name }}</span>
              </div>
            </div>
          </div>
        </ul>

        <template v-if="!authenticated">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown mb-xl-0 mb-lg-0 mb-md-0 mb-sm-4">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t("header.login") }}</a>
              <div class="dropdown-menu user--login p-4" aria-labelledby="dropdownMenuLink">

                <ValidationObserver v-slot="{ handleSubmit }">
                  <form class="d-flex flex-column " @submit.prevent="handleSubmit(submit)">

                    <ValidationProvider name="username" rules="required|max:16" v-slot="{ classes }">
                      <div class="form-label-group">
                        <input type="text" class="form-control" :class="classes" id="username" placeholder="Username" v-model="form.username" required="" autofocus="">
                        <label for="username">Username</label>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="password" rules="required|min:6" v-slot="{ classes }">
                      <div class="form-label-group">
                        <input type="password" class="form-control" :class="classes" name="password" placeholder="Password" id="password" v-model="form.password">
                        <label for="password">Password</label>
                      </div>
                    </ValidationProvider>

                    <button class="btn btn-primary btn-block" type="submit">
                      <span>Login</span>
                    </button>
                  </form>
                </ValidationObserver>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link btn btn-warning" :to="{ name: 'register' }">{{ $t("header.create_account") }}</router-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <div class="dropdown">
                <button type="button" class="btn btn--light-dark dropdown-toggle" data-toggle="dropdown">
                  <img src="https://habbo.com.br/habbo-imaging/avatarimage?figure=hr-802-37.hd-185-1.ch-804-82.lg-280-73.sh-3068-1408-1408.wa-2001&amp;gesture=sml&size=s&amp;headonly=1" alt="Raizers" class="pixelated">
                  {{ user.username }}
                </button>
                <div class="dropdown-menu">
                    <router-link class="dropdown-item" :to="{ name: 'logout' }"  v-on:click.native="signOut">{{ $t("header.logout") }}</router-link>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
      signOutAction: 'auth/signOut'
    }),

    submit() {
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: 'dashboard'
        })
      })
    },

    signOut () {
      this.signOutAction().then(() => {
          this.$router.push('/')
      })
    }
  }
}
</script>