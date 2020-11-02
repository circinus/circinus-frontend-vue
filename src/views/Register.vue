<template>
  <div>
    <div class="row register--body">
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
                        <input type="text" class="form-control" :class="classes" id="usernameRegister" placeholder="Username" v-model="form.username">
                        <label for="usernameRegister">Username</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>

                    </ValidationProvider>

                    <ValidationProvider name="password" :rules="{required: true, min: 6, regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/}" v-slot="{ classes, errors }" vid="passwordRegister">
                      <div class="form-label-group">
                        <input type="password" class="form-control" :class="classes" id="passwordRegister" placeholder="Password" v-model="form.password">
                        <label for="passwordRegister">Password</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="passwordRepeat" :rules="{required: true, min: 6, confirmed: 'passwordRegister', regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/}"  v-slot="{ classes, errors }">
                      <div class="form-label-group">
                        <input type="password" class="form-control" :class="classes" id="passwordRepeatRegister" placeholder="Password confirmation" v-model="form.password_confirmation">
                        <label for="passwordRepeatRegister">Password</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="email" rules="required|email" v-slot="{ classes, errors }">
                      <div class="form-label-group">
                        <input type="email" class="form-control" :class="classes" id="emailRegister" placeholder="Email adress" v-model="form.mail">
                        <label for="emailRegister">Email adress</label>
                        <span class="error">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider name="gender" rules="required" v-slot="{ classes, errors }">
                      <select class="form-control display" v-model="form.gender" @change="changeGender($event)">
                        <option value="" disabled>Gender</option>
                        <option v-for="gender in genders" :value="gender.value" :data-gender="gender.gender">{{ gender.text }}</option>
                      </select>
                    </ValidationProvider>

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

                <div class="row mt-4">
                  <div class="pl-5" v-for="(item, index) in looks" :key="index" @click="changeAvatar(item)">
                    <img :class="{selected:item === form.look}" class="looks" v-bind:src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + item + '&headonly=1'" />
                  </div>
                </div>

              </div>
              <div class="col-md-4">
                  <div class="selected-look" :data-random="avatarPreload">
                    <img style="margin-left: 35px;" v-if="form.look" :src="'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + form.look + '&amp;size=l'">
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

import Looks from "../components/Register/Looks";

export default {

  name: "Register",

  data() {
      return {
          looks: [],
          avatarPreload: 8,
          genders: [
            { value: 'M', text: 'Boys', 'gender': 'boys' },
            { value: 'F', text: 'Girls', 'gender': 'girls' }
          ],
          form: {
              username: '',
              password: '',
              password_confirmation: '',
              mail: '',
              gender: '',
              look: ''
          },
      }
  },

  components: {
      Looks
  },

  computed: {

    ...mapState('register', {
        getLooks: 'looks'
    })

  },

  methods: {

    ...mapActions({
        register: 'auth/register',
        look: 'register/getLooks'
    }),

    submit() {
        this.register(this.form).then(() => {
            this.$router.replace({
              name: 'dashboard'
            })
        })
    },

    changeAvatar(item) {
        this.form.look = item
        this.preLoad()
    },

    changeGender: function(event) {
      this.look(event.target.selectedOptions[0].dataset.gender).then(response => {
            this.form.look = response[1] ?? response[5];
            this.looks = response
            this.preLoad()
        })
    },

    preLoad() {

      if(this.avatarPreload > 0) {
          setTimeout(() => {
              this.avatarPreload -= 1
              this.preLoad()
          }, 50)
      } else {
          this.avatarPreload = 8
      }
    }
  }
}
</script>