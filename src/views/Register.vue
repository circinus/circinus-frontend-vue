<template>
  <div>
    <div class="row">
      <div class="col-md-6 mt-5">
        <div class="card card--content">
          <div class="card-body">
            <h5>Registreer op Meteor</h5>
            <hr>
            <div class="row text-left">
              <div class="col-md-12">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form class="d-flex flex-column " @submit.prevent="handleSubmit(submit)">

                    <ValidationProvider name="username" rules="required|min:6" v-slot="{ classes, errors }">
                      <div class="form-label-group">
                        <input type="text" class="form-control" :class="classes" id="usernameRegister" v-model="form.username" autofocus="">
                        <label for="usernameRegister">Username</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>

                    </ValidationProvider>

                    <ValidationProvider name="password" :rules="{required: true, min: 6, regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/}" v-slot="{ classes, errors }" vid="passwordRegister">
                      <div class="form-label-group">
                        <input type="password" class="form-control" :class="classes" id="passwordRegister"  v-model="form.password" required="" autofocus="">
                        <label for="passwordRegister">Password</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="passwordRepeat" :rules="{required: true, min: 6, confirmed: 'passwordRegister', regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/}"  v-slot="{ classes, errors }">
                      <div class="form-label-group">
                        <input type="password" class="form-control" :class="classes" id="passwordRepeatRegister" v-model="form.password_confirmation" required="" autofocus="">
                        <label for="passwordRepeatRegister">Password</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="email" rules="required|email" v-slot="{ classes, errors }">
                      <div class="form-label-group">
                        <input type="email" class="form-control" :class="classes" id="emailRegister" v-model="form.mail" required="" autofocus="">
                        <label for="emailRegister">Email adress</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <select class="form-control display" name="gender" id="gender" v-model="form.gender">
                      <option value="M">Man</option>
                      <option value="F">Woman</option>
                    </select>

                    <button type="submit" class="btn btn-primary btn-block mt-4"><span>Create Account</span></button>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-5">
        <div class="col-md-12 p-0 flex-column">
          <div class="card card card--content flex-column">
            <div class="card-body">
              <h5>Personaliseer je Meteor</h5>
              <hr>
              <div class="row text-left">
                <div class="col-md-8">
                  Na het aanmaken van je account wordt doorgelinkt naar ons hotel. Daar kun je je Meteor poppetje en naam geven en persionaliseren van je uiterlijk.
                  Ook kun je een startkamer kiezen waar je eerste meubeltjes in staan om zo een beeld te geven wat je hier allemaal kunt doen!
                </div>
                <div class="col-md-4"><img class="img-fluid" src="https://i.imgur.com/Zan1NPK.gif"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {

  name: "Register",
  data() {
    return {
      form: {
        username: '',
        password: '',
        password_confirmation: '',
        mail: '',
        gender: ''
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),

    submit() {
      this.register(this.form).then(() => {
        this.$router.replace({
          name: 'dashboard'
        })
      })
    },
  }
}
</script>