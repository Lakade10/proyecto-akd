<template>
  <div class="home">
    <div class="main-content">
      <CarrouselNoticiasComponent v-if="noticias" :noticias="noticias"/>
    </div>
    <div class="sidebar">
      <FixtureResumenComponent :partidos="partidos" :partidosPorPagina="2"/>
    </div>
  </div>
  <div class="carousel-jugadores">
    <CarrouselJugadoresComponent :jugadores="jugadores" :titulo="'PLANTEL PROFESIONAL'">
      <template #contenido="slotProps">
        <div v-for="jugador in slotProps.items" :key="jugador.id" class="jugador-card">
          <a class="jugador-image-container" :href="`#/estadisticas/${jugador.id}`">
            <img :src="jugador.imagen" :alt="jugador.nombre" class="jugador-image">
            <div class="hover-overlay"><b>Ver Datos</b></div>
          </a>
          <h3 style="text-wrap: nowrap; margin-top: 10px;"><span style="color: gray">{{ '#' + jugador.dorsal + ' - '}}</span>{{ jugador.nombre }}</h3>
        </div>
      </template>
    </CarrouselJugadoresComponent>
  </div>
  <div class="carousel-productos">
    <CarrouselJugadoresComponent :jugadores="productos" :titulo="'PRODUCTOS DESTACADOS'" >

      <template #contenido="slotProps">
        <div v-for="item in slotProps.items" :key="item.id" class="producto-card">
          <a class="producto-image-container" href="#/shop" style="border: 2px solid rgb(80, 194, 236);">
            <img :src="item.imagen" :alt="item.nombre" class="producto-image">
            <div class="hover-overlay"><b>Ver en Shop</b></div>
          </a>
          <h3 style="text-wrap: nowrap; margin-top: 10px;">{{ item.nombre }}</h3>
        </div>
      </template>

    </CarrouselJugadoresComponent>
  </div>
</template>

<script setup>
// EL CÓDIGO FUNCIONÓ UNA VEZ ASÍ, PERO COMO LA CARGA ES TEMPRANA PUEDE QUE SEA EL MOTIVO POR EL CUAL LA PROP NOTICIAS NO LLEGA A CARGARSE
import CarrouselNoticiasComponent from '@/components/CarrouselNoticias.vue';
import FixtureResumenComponent from '@/components/FixtureResumen.vue';
import CarrouselJugadoresComponent from '@/components/CarrouselJugadores.vue';
import { ref, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import racingClubEscudo from '@/assets/escudos/racingClub.png';
import escudoGenerico from '@/assets/escudos/escudoGenerico.png';

const store = useStore();

const cambiarCategoriaNoticias = (categoria, mutation) => {
  store.dispatch('web/loadNoticias', {categoria, mutation})
};

const cambiarCategoriaCatalogo = (categoria, mutation) => {
  // console.log(`cambiarCategoria: ${categoria}, ${mutation}`);
  store.dispatch('web/loadProductos', { categoria, mutation });
};

onBeforeMount(() => {
    cambiarCategoriaNoticias('ultimas_noticias', 'setUltimasNoticias')
    cambiarCategoriaCatalogo('destacados', 'setProductosDestacados')

})

const noticias = computed(() => {
  return Object.values(store.state.web.noticiasSeleccionadas)
});

const productos = computed(() => {
  return store.state.web.productosSeleccionados
});

const partidos = ref([
    {
      id: 1,
      torneo: 'LPF',
      fecha: '01/02/2023',
      equipoLocal: {
          nombre: 'Racing Club',
          escudo: racingClubEscudo
      },
      equipoVisitante: {
          nombre: 'Genérico FC',
          escudo: escudoGenerico
      },
      resultado: '2 - 0'
    },
    {
      id: 2,
      torneo: 'LPF',
      fecha: '04/02/2023',
      equipoLocal: {
          nombre: 'Racing Club',
          escudo: racingClubEscudo
      },
      equipoVisitante: {
          nombre: 'Genérico FC',
          escudo: escudoGenerico
      },
      resultado: '1 - 1'
    },
    {   
      id: 3,
      torneo: 'Copa Libertadores',
      fecha: '07/02/2023',
      equipoLocal: {
          nombre: 'Racing Club',
          escudo: racingClubEscudo
      },
      equipoVisitante: {
          nombre: 'Genérico FC',
          escudo: escudoGenerico
      },
      resultado: '3 - 2'
    },
    {
      id: 4,
      torneo: 'Copa Argentina',
      fecha: '12/02/2023',
      equipoLocal: {
          nombre: 'Racing Club',
          escudo: racingClubEscudo
      },
      equipoVisitante: {
          nombre: 'Genérico FC',
          escudo: escudoGenerico
      },
      resultado: '2 - 1'
    }

])

const jugadores = ref([
  {
    id: 1,
    nombre: 'Gabriel Arias',
    imagen: require('@/assets/imagenesJugadores/arias.jpg'),
    dorsal: 1
  },
  {
    id: 2,
    nombre: 'Gonzalo Escudero',
    imagen: require('@/assets/imagenesJugadores/escudero.jpg'),
    dorsal: 43
  },
  {
    id: 3,
    nombre: 'Gabriel Rojas',
    imagen: require('@/assets/imagenesJugadores/rojas.jpg'),
    dorsal: 27
  },
  {
    id: 4,
    nombre: 'Juan Nardoni',
    imagen: require('@/assets/imagenesJugadores/nardoni.jpg'),
    dorsal: 5
  },
  {
    id: 5,
    nombre: 'Agustín Almendra',
    imagen: require('@/assets/imagenesJugadores/almendra.jpg'),
    dorsal: 32
  },
  {
    id: 6,
    nombre: 'Bruno Zuculini',
    imagen: require('@/assets/imagenesJugadores/zuculini.jpg'),
    dorsal: 36
  },
  {
    id: 7,
    nombre: 'Baltasar Rodriguez',
    imagen: require('@/assets/imagenesJugadores/baltasar.jpg'),
    dorsal: 22
  },
  {
    id: 8,
    nombre: 'Juan Fernando Quintero',
    imagen: require('@/assets/imagenesJugadores/quintero.jpg'),
    dorsal: 8
  },
  {
    id: 9,
    nombre: 'Santiago Solari',
    imagen: require('@/assets/imagenesJugadores/solari.jpg'),
    dorsal: 28
  },
  {
    id: 10,
    nombre: 'Roger Martinez',
    imagen: require('@/assets/imagenesJugadores/martinez.jpg'),
    dorsal: 9
  }
])

</script>

<style scoped>

.home {
  display: flex;
  align-items: center;
  gap: 30px;
}

.sidebar {
  display: flex;
  justify-content: center;
  margin-right: 30px;
}

.main-content {
  flex-grow: 1;
  max-width: 100%;
  margin: 20px 0 20px 0;
}

.carousel-productos {
  margin-top: 30px;
}

/* Estilos contenido de CarouselJugadoresComponent */

.jugador-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  box-sizing: border-box;
  padding: 10px;
}

.producto-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  box-sizing: border-box;
  padding: 10px;
}

.jugador-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
  color: inherit;
}

.producto-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
  color: inherit;
}

.jugador-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.producto-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(80, 194, 236, 0.5);
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.jugador-image-container:hover .jugador-image, .producto-image-container:hover .producto-image {
  opacity: 0;
}

.jugador-image-container:hover .hover-overlay, .producto-image-container:hover .hover-overlay {
  opacity: 1;
}

@media (max-width: 1120px){
  .jugador-image-container, .producto-image-container {
    width: 150px;
    height: 150px;
  }
  .jugador-card h3, .producto-card h3 {
    font-size: 1em;
  }
}

@media (max-width: 870px){
  .jugador-card, .producto-card {
    min-width: 25%;
  }
}

@media (max-width: 700px){
  .jugador-card, .producto-card {
    min-width: 33.33%;
  }
}

@media (max-width: 520px){
  .jugador-card, .producto-card {
    min-width: 50%;
  }
}

/* Fin de estilos del contenido de CarouselJugadoresComponent */

@media (max-width: 1000px){
  .home {
    flex-direction: column;
    align-items: normal;
    gap: 0;
  }

  .sidebar {
    margin-right: 0;
  }

  .main-content {
    max-width: none;
    margin: 0;
  }
}

</style>
