<template>
<div class="carousel-container">
  <a :href="`#/noticias/${noticiaActual.categoria}/${noticiaActual.id}`">
    <transition name="fade" mode="out-in">
      <div :key="noticiaActual.id" :class="{'noticias': true }" :style="{ backgroundImage: `url(${noticiaActual.imagen})`}">
        
        <h2 style="text-shadow: 0px 0px 5px black;">{{ capitalize(noticiaActual.categoria) }}</h2>
  
        <div class="botones-container">
          <button @click.prevent="decrementarNoticia()" class="btn-arrow">&#8249;</button>
          <button @click.prevent="incrementarNoticia()" class="btn-arrow">&#8250;</button>
        </div>
        
        <div class="texto-container">
          <h3>{{ noticiaActual.titulo }}</h3>
          <p>{{ noticiaActual.subtitulo }}</p>
        </div>
  
      </div>
    </transition>
  </a>
</div>
</template>

<script setup>
import { ref, computed, defineProps, capitalize } from 'vue';

const props = defineProps(['noticias'])

const index = ref(0)

const incrementarNoticia = () => {
  if(index.value < props.noticias.length - 1){
    index.value++;
  }
}

const decrementarNoticia = () => {
  if(index.value > 0 ){
    index.value--;
  }
}

const noticiaActual = computed(() => props.noticias[index.value])


</script>

<style scoped>

a {
  text-decoration: none;
}

.noticias {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  border-radius: 0 10px 10px 0;
}

h2 {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
}

.texto-container {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
}

.texto-container h3 {
  font-size: 1.4rem;
  color: white;
}

.texto-container p {
  font-size: 1rem;
  color: white;
}

.botones-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.btn-arrow {
  font-size: 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  padding: 20px;
  margin: 10px;
}

.btn-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 1000px){
.noticias {
  height: 300px;
  border-radius: 0;
}
}

</style>