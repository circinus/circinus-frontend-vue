<template>
  <nav id="navbar--primary" class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <div class="navbar-brand d-xl-none d-lg-none d-md-none d-block">
        <img src="/../../assets/images/logo.png" alt="Habbo Logo" />
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar--primary-collapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar--primary-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Wieso HabboMP?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">HabboMP Desktop App</a>
          </li>
        </ul>


        <template v-if="!authenticated">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown mb-xl-0 mb-lg-0 mb-md-0 mb-sm-4">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inloggen</a>
              <div class="dropdown-menu user--login p-4" aria-labelledby="dropdownMenuLink">

                <ValidationObserver v-slot="{ handleSubmit }">
                  <form class="d-flex flex-column " @submit.prevent="handleSubmit(submit)">

                    <ValidationProvider name="username" rules="required|max:16" v-slot="{ classes, invalid, valid }">
                      <div class="form-label-group">
                        <input type="text" class="form-control" :class="{'is-invalid': invalid, 'is-valid': valid }" id="username" placeholder="Username" v-model="form.username" required="" autofocus="">
                        <label for="username">Username</label>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="password" rules="required|min:6" v-slot="{ classes, invalid, valid }">
                      <div class="form-label-group">
                        <input type="password" class="form-control" :class="{'is-invalid': invalid, 'is-valid': valid }" name="password" id="password" v-model="form.password">
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
              <router-link class="nav-link btn btn-warning" :to="{ name: 'register' }">Maak account</router-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link btn btn-warning" @click.prevent="signOut">Uitloggen</a>
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
        this.$router.replace({
          name: 'home'
        })
      })
    }
  }
}
</script>