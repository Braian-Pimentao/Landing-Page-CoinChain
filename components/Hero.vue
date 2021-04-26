<template>
<div class="hero is-medium fondo">
        <div class=" hero-body">
            <div class="has-text-centered">
                <h1 class="title is-1 has-text-white has-text-centered fuente1"> Descubre ChainCoin</h1>
                <h2 class="title is-3 has-text-white has-text-centered fuente"> Una criptomoneda desarrollada por ChainGo.</h2>
                <h2 class="title is-3 has-text-white has-text-centered fuente"> Versatil y totalmente segura.</h2>
                <a class="button has-text-black is-primary is-rounded has-centered is-hovered">Iniciar Sesión </a>
            </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.center {
    text-align: center;
}

.fondo {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),url("./assets/images/hero.jpg");
    height: 100%;
    padding: 5%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 10px;
  }

.fuente{
    font-family: "Roboto";
}
</style>