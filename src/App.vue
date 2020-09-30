<template>
  <div id="app">
    <div>
      <header class="bg-primary mb-4">
        <Navigation/>
        <Header/>


        <nav id="navbar--secondary" class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar--secondary-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar--secondary-collapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" :to="{ name: 'home' }">Homepagina</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Community</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Neugikeiten</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Community</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Itemshop</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main class="flex-fill container">
        <router-view />
      </main>

      <Footer/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
    components: {
        Navigation,
        Header,
        Footer
    }
}
</script>