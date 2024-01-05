<template>
    <div class="noticias-list">
      <div v-for="(noticia, index) in noticias" :key="index" class="noticia-panel">
        <!-- Enlace que lleva a la página de noticia completa -->
        <router-link :to="'/noticias/' + index">
          <img :src="noticia.image" :alt="noticia.title">
          <h3>{{ noticia.title }}</h3>
        </router-link>
      </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
  
const noticias = ref([
  {
      title: 'NO SE DIÓ EN CASA...',
      content: 'La academia cae 1 a 0 frente a Boca, pese al juego colectivo y posesión dominante',
      image: require('@/assets/imagenesNoticias/boca1racing0.jpeg'),
      link: '/noticias/0'
  },
  { 
      title: 'ROGER, OTRA VEZ',
      content: 'Golazo agónico del colombiano otra vez para quedarnos con el 4to puesto de la tabla frente a Huracán',
      image: require('@/assets/imagenesNoticias/racingHuracan.jpg'),
      link: '/noticias/1'
  },
  { 
      title: 'VICTORIA EN ALBERDI',
      content: 'Un golazo firmado por Roger para imponer a la acadé de visitante frente a Belgrano',
      image: require('@/assets/imagenesNoticias/belgranoRacing.jpg'),
      link: '/noticias/2'
  },
  { 
      title: 'LA NOCHE DEL DEMONIO',
      content: 'Doblete y asistencia de Hauche para cerrar la noche de local contra Gimnasia (LP)',
      image: require('@/assets/imagenesNoticias/hauche.jpeg'),
      link: '/noticias/3'
  }
])

</script>
  
  <style scoped>
  /* Estilos para el contenedor de noticias */
  .noticias-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }
  
  /* Estilos para cada panel de noticia */
  .noticia-panel {
    width: 300px; /* Ancho deseado del panel */
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para la imagen dentro del panel */
  .noticia-panel img {
    width: 100%;
    height: 150px; /* Altura deseada de la imagen */
    object-fit: cover; /* Ajusta la imagen dentro del contenedor sin distorsionarla */
    border-radius: 8px;
  }
  
  /* Estilos para el título de la noticia */
  .noticia-panel h3 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #333;
    cursor: pointer;
  }
  </style>
  