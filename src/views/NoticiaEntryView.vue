<template>
  <!-- El siguiente template puede ser modularizado en un componente Entry -->
  <template v-if="noticia">
    <div class="noticia-entry-view">
      <h3>{{ noticia.fecha + ' - ' + capitalize(noticia.categoria) }}</h3>
      <h2>{{ noticia.titulo }}</h2>
      <img :src="noticia.imagen" :alt="noticia.titulo">
      <p class="intro">{{ noticia.subtitulo }}</p>
      <p class="body">{{ noticia.cuerpo }}</p>
      <RouterLink :to="'/noticias'" class="boton-volver">Volver</RouterLink>
    </div>
  </template>
</template>
  
<script setup>
import { onMounted, onUnmounted, watch, computed, capitalize } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
  
const store = useStore();
const noticia = computed(() => {
  return store.state.web.noticiaById
});

const route = useRoute();

const cargarNoticia = (categoria, id, mutation) => {
  store.dispatch('web/loadNoticiaById', {categoria, id, mutation})
};

onMounted(() => {
  const noticiaIndex = Number(route.params.id);
  const noticiaCategoria = route.params.categoria;
  if (!isNaN(noticiaIndex) && noticiaIndex >= 0) {
    cargarNoticia(noticiaCategoria, noticiaIndex, 'setNoticiaById')
  }
});

onUnmounted(() => {
  noticia.value = null;
  console.log(noticia.value)
})

watch(() => route.params.id, () => {
  cargarNoticia();
});

</script>
  
  <style scoped>
  /* Estilos para la vista de entrada de la noticia */
  .noticia-entry-view {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para el título y fecha de la noticia */
  .noticia-entry-view h2 {
    color: #333;
  }

  .noticia-entry-view h3 {
    color: rgba(0, 0, 0, 0.5)
  }
  
  /* Estilos para la imagen de la noticia */
  .noticia-entry-view img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  /* Estilos para el cuerpo de la noticia */
  .noticia-entry-view .intro {
    text-align: justify;
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    padding: 5px;
    border-radius: 10px;
  }

  .noticia-entry-view .body {
    text-align: justify;
    margin-top: 10px;
    font-size: 1.2rem;
    color: #000;
    line-height: 1.6;
  }

  .boton-volver {
  /* Agrega estilos según sea necesario */
    display: inline-block;
    padding: 10px;
    background-color: rgb(0, 41, 66);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
  </style>
  