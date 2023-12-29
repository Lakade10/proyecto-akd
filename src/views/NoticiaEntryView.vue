<template>
    <template v-if="noticia">
      <div class="noticia-entry-view">
        <h2>{{ noticia.title }}</h2>
        <img :src="noticia.image" :alt="noticia.title">
        <p>{{ noticia.content }}</p>
      </div>
    </template>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
  const noticia = ref(null);
  
  const noticias = ref([
  {
    title: 'NO SE DIÓ EN CASA...',
    content: 'La academia cae 1 a 0 frente a Boca, pese al juego colectivo y posesión dominante',
    image: require('@/assets/imagenesNoticias/boca1racing0.jpeg'),
    link: '4'
  },
  { 
    title: 'ROGER, OTRA VEZ',
    content: 'Golazo agónico del colombiano otra vez para quedarnos con el 4to puesto de la tabla frente a Huracán',
    image: require('@/assets/imagenesNoticias/racingHuracan.jpg'),
    link: '3'
  },
  { 
    title: 'VICTORIA EN ALBERDI',
    content: 'Un golazo firmado por Roger para imponer a la acadé de visitante frente a Belgrano',
    image: require('@/assets/imagenesNoticias/belgranoRacing.jpg'),
    link: '2'
  },
  { 
    title: 'LA NOCHE DEL DEMONIO',
    content: 'Doblete y asistencia de Hauche para cerrar la noche de local contra Gimnasia (LP)',
    image: require('@/assets/imagenesNoticias/hauche.jpeg'),
    link: '1'
  }
])

  const route = useRoute();

  onMounted(() => {
  cargarNoticia();
});

watch(() => route.params.id, () => {
  cargarNoticia();
});

const cargarNoticia = () => {
  const noticiaIndex = Number(route.params.id);
  if (!isNaN(noticiaIndex) && noticiaIndex >= 0 && noticiaIndex < noticias.value.length) {
    noticia.value = noticias.value[noticiaIndex];
  }
};
  </script>
  
  <style scoped>
  /* Estilos para la vista de entrada de la noticia */
  .noticia-entry-view {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para el título de la noticia */
  .noticia-entry-view h2 {
    color: #333;
  }
  
  /* Estilos para la imagen de la noticia */
  .noticia-entry-view img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  /* Estilos para el cuerpo de la noticia */
  .noticia-entry-view p {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
  }
  </style>
  