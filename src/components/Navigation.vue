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
              <form class="d-flex flex-column" @submit.prevent="submit">
                <div class="form-label-group">
                  <input type="text" class="form-control" name="username" id="username" v-model="form.username">
                  <label for="username">Gebruikersnaam</label>
                </div>

                <div class="form-label-group mb-3">
                  <input type="password" class="form-control" name="password" id="password" v-model="form.password">
                  <label for="password">Wachtwoord</label>
                </div>

                <div class="custom-control custom-checkbox mb-4">
                  <input type="checkbox" class="custom-control-input" id="rememberMeInput">
                  <label class="custom-control-label" for="rememberMeInput">Eingeloggt bleiben</label>
                </div>

                <button class="btn btn-primary btn-block" type="submit">
                  <span>Login</span>
                </button>

                <div class="d-inline-flex flex-row mt-4">
                  <i class="fas fa-info-circle mr-2 pt-1"></i>
                  <p class="mb-0">Beim Einloggen, akzeptierst du die <a href="#">AGB</a> von Habbo und bestätigst, dass du die <a href="#">Datenschutzrichtlinien</a> gelesen hast.</p>
                </div>
              </form>
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