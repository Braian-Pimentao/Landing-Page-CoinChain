<template>
  <div class=" container is-fluid py-6 has-background-grey">
    <Hero />
  
    <ViewCryptos />
    <hr class="linea" />
    <div class="container">
      <div class="columns mb-6">
        <Tab
        :image="columna.image"
        :alt="columna.alt"
        :title="columna.title"
        :description="columna.description"
        v-for="(columna, index) in columnas" :key="index"/>
      </div>
    </div>

    <hr class="linea" />
    <div style="position: relative; z-index: 0;">
      <h1 class="title has-text-centered" >TITULO</h1>
      <parallax>
          <img src="../assets/images/hero.jpg" alt="movil"/>
      </parallax>
    </div>

    <div class="tabs is-toggle is-toggle-rounded is-centered is-medium">
      <ul>
        <li :class="{'is-active': tabs[0]}" @click="cambiarTab(0)"><a>Opcion 1</a></li>
        <li :class="{'is-active': !tabs[1]}" @click="cambiarTab(1)"><a>Opcion 2</a></li>
        <li :class="{'is-active': !tabs[2]}" @click="cambiarTab(2)"><a>Opcion 3</a></li>
        <li :class="{'is-active': !tabs[3]}" @click="cambiarTab(3)"><a>Opcion 4</a></li>
      </ul>
    </div>
    
    <Colaborated />
    
  </div>

</template>

<script>
import Hero from '~/components/Hero'
import Tab from '~/components/Tab'
import Colaborated from '~/components/Colaborated'
import Parallax from 'vue-parallaxy'

import ViewCryptos from '~/components/ViewCryptos'
export default {
  components: {
    Hero,
    Tab,
    Colaborated,
    ViewCryptos,
    Parallax
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
      ],
      tabs: [true,false,false,false]
    }
  },
  methods: {
    cambiarTab(index){
      for (var i=0; i<this.tabs.length;i++){
        if (i===index) {
          console.log("_________________________________________________________________________________________________" + index)
          this.tabs[i]=true
        } else{
          this.tabs[i]= false
        }
      }
    }
  }

}
</script>

<style>
  hr.linea {
    border: 2px solid white;
    width: 100%;
  }
  .posicion{
    z-index: -10;
  }
</style>