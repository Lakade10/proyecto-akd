<template>
  <div class="home">
    <div class="main-content">
      <CarrouselNoticiasComponent/>
    </div>
    <div class="sidebar">
      <FixtureResumenComponent/>
    </div>
  </div>
</template>

<script>
import CarrouselNoticiasComponent from '@/components/CarrouselNoticias.vue';
import FixtureResumenComponent from '@/components/FixtureResumen.vue';

export default {
  name: 'HomeView',
  components: { CarrouselNoticiasComponent, FixtureResumenComponent }
}
</script>

<style scoped>

.home {
  display: flex;
}

/* Estilos para la barra lateral */
.sidebar {
  width: 25%;
  display: flex;
  justify-content: center;
}

/* Estilos para el contenido principal */
.main-content {
  flex-grow: 1; /* Ocupa el espacio restante */
  max-width: 100%; /* Ajusta según sea necesario */
  margin: 30px 0 20px 0;
}

@media (max-width: 1000px){
  .home {
    flex-direction: column;
  }

  .sidebar {
    width: auto;
  }

  .main-content {
    max-width: none;
    margin: 0;
  }
}

</style>
