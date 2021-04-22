<template>
  <div class="container is-fluid py-6">
    <Slogan />
    <hr class="linea" />
    <div class="container">
      <div class="columns mb-6">
        <Tab
        :image="columna.image"
        :alt="columna.alt"
        :title="columna.title"
        :description="columna.description"
        v-for="(columna, index) in columnas" :key="index"
        />
      </div>
    </div>
    <Colaborated />
  </div>
</template>

<script>
import Slogan from '~/components/Slogan'
import Tab from '~/components/Tab'
import Colaborated from '~/components/Colaborated'
export default {
  components: {
    Slogan,
    Tab,
    Colaborated
  },

  data() {
    return {
      columnas: [
        {
          image: 'comunidad',
          alt: 'comunidad',
          title: 'Comunidad',
          description: 'Existe una cantidad creciente de comunidades ChainCoin donde es posible encontrar soporte.'
        },
        {
          image: 'candado',
          alt: 'candado',
          title: 'Cifrado de la cartera electrónica',
          description: 'El cifrado de la cartera electrónica permite asegurar las claves privadas en la cartera.'
        },
        {
          image: 'desarrollo',
          alt: 'desarrollo',
          title: 'Desarrollo',
          description: ' El desarrollo de ChainCoin sigue muy de cerca la implementación de nuevas características y parches de la red Bitcoin.'
        },
      ]
    }
  }
}
</script>

<style>
  hr.linea {
    border: 2px solid white;
    width: 100%;
  }
</style>