<template>
  <footer class="d-flex flex-column mt-4">
    <div class="footer--secondary py-4">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
            <img src="/../../assets/images/logo.png" class="object-contain" height="90" width="170" alt="Habbo Hotel" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mt-3">
            <ul class="list-unstyled footer--list">
              <li class="list-title">Support</li>
              <li>
                <a href="#">Passwort vergessen?</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
              <li>
                <a href="#">Entwickler-Dokumentation</a>
              </li>
              <li>
                <a href="#">Kontaktformular</a>
              </li>
            </ul>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mt-3">
            <ul class="list-unstyled footer--list">
              <li class="list-title">Informationen</li>
              <li>
                <a href="#">Was ist Habbo?</a>
              </li>
              <li>
                <a href="#">Wie wird gespielt?</a>
              </li>
              <li>
                <a href="#">Habbo Benimmregeln</a>
              </li>
              <li>
                <a href="#">Sicherheit</a>
              </li>
              <li>
                <a href="#">Hilfe</a>
              </li>
            </ul>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column mt-3">
            <span class="list-title">Desktop App</span>
            <p>Downloade dir die Desktop App, um einfacher ins Hotel zukommen.</p>

            <button class="btn btn-dark">Habbo downloaden</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex flex-column py-3">
      <strong>&copy; 2020 by necmi</strong>
      <small>Das Design wurde von necmi speziell für Raizer entwickelt.</small>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer.vue"
}
</script>

<style scoped>

</style>