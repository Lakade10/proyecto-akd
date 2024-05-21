<template>
  <div class="home">
    <div class="main-content">
      <CarrouselNoticiasComponent v-if="noticias" :noticias="noticias"/>
    </div>
    <div class="sidebar">
      <FixtureResumenComponent :partidos="partidos" :partidosPorPagina="2"/>
    </div>
  </div>
</template>

<script setup>
// EL CÓDIGO FUNCIONÓ UNA VEZ ASÍ, PERO COMO LA CARGA ES TEMPRANA PUEDE QUE SEA EL MOTIVO POR EL CUAL LA PROP NOTICIAS NO LLEGA A CARGARSE
import CarrouselNoticiasComponent from '@/components/CarrouselNoticias.vue';
import FixtureResumenComponent from '@/components/FixtureResumen.vue';
import { ref, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import racingClubEscudo from '@/assets/escudos/racingClub.png';
import escudoGenerico from '@/assets/escudos/escudoGenerico.png';

const store = useStore();

const cambiarCategoriaNoticias = (categoria, mutation) => {
  store.dispatch('web/loadNoticias', {categoria, mutation})
};

onBeforeMount(() => {
    cambiarCategoriaNoticias('ultimas_noticias', 'setUltimasNoticias')
})

const noticias = computed(() => {
  return Object.values(store.state.web.noticiasSeleccionadas)
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

</script>

<style scoped>

.home {
  display: flex;
  align-items: center;
  gap: 30px;
}

/* Estilos para la barra lateral */
.sidebar {
  display: flex;
  justify-content: center;
  margin-right: 30px;
}

/* Estilos para el contenido principal */
.main-content {
  flex-grow: 1; /* Ocupa el espacio restante */
  max-width: 100%; /* Ajusta según sea necesario */
  margin: 20px 0 20px 0;
}

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
