<template>
    <nav id="navbar--secondary" class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar--secondary-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar--secondary-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{ name: 'home' }">{{ $t("nav.link_1") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t("nav.link_2") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t("nav.link_3") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t("nav.link_4") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t("nav.link_5") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t("nav.link_6") }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>