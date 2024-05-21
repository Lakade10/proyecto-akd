<template>
    <div class="noticias-list">
      <TransitionGroup name="scale">
        <div v-for="noticia in props.noticias" :key="noticia.id" class="noticia-panel">
          <!-- Enlace que lleva a la página de noticia completa -->
          <router-link :to="'/noticias/'+ noticia.categoria + '/' + noticia.id">
            <p>{{ noticia.fecha }}</p>
            <img :src="noticia.imagen" :alt="noticia.titulo">
            <h3>{{ noticia.titulo }}</h3>
          </router-link>
        </div>
      </TransitionGroup>
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
  
const props = defineProps(['noticias'])

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

.noticia-panel p {
  color: #333;
  margin-bottom: 5px;
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
  text-decoration: none;
}

a {
  text-decoration: none;
}

.scale-enter-active {
  transition: all 1s ease;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.scale-leave-active {
  position: absolute;
  opacity: 0;
}

</style>
  