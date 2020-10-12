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
                <input type="text" placeholder="Emailadres..." name="username" value="" id="username" class="form-control">
                <input type="email" placeholder="Emailadres..." name="mail" value="" id="mail" class="form-control">
                <input type="password" placeholder="Wachtwoord..." name="password" class="form-control">
                <input type="password" placeholder="Wachtwoord herhalen..." name="repeatpassword" class="form-control">
                <select class="form-control display" name="gender" id="gender">
                  <option value="M">Man</option>
                  <option value="F">Woman</option>
                </select>
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
          <div class="card flex-column mt-3">
            <div class="card-body">
              <div class="row mt-3">
                <div class="col-md-12">
                  <input type="submit" class="btn btn-outline-info w-100" value="Registreren">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-xs-12 col-md-12">
                  <a href="/" class="btn btn-outline-warning w-100">INLOGGEN?</a>
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
export default {
  name: "Register"
}
</script>