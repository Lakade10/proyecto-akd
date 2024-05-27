<template>
  <div class="carousel-container">
    <button @click="decrementarJugador" class="btn-arrow left">&#8249;</button>
    <div class="carousel-track-container">
      <h2 class="carousel-track-title">{{ titulo }}</h2>
      <div class="carousel-track" :style="trackStyle">
        <slot name="contenido" :items="jugadoresVisibles"></slot>
      </div>
    </div>
    <button @click="incrementarJugador" class="btn-arrow right">&#8250;</button>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, onBeforeMount, onUnmounted } from 'vue';

const props = defineProps(['jugadores', 'titulo'])

const index = ref(0);
const jugadoresPorPagina = ref(getJugadoresPorPagina());

const jugadoresVisibles = computed(() => {
  return props.jugadores//.slice(index.value, index.value + jugadoresPorPagina);
});

const incrementarJugador = () => {
  if (index.value + jugadoresPorPagina.value < props.jugadores.length) {
    index.value++;
  }
};

const decrementarJugador = () => {
  if (index.value > 0) {
    index.value--;
  }
};

const trackStyle = computed(() => {
  return {
    transform: `translateX(-${index.value * (100 / jugadoresPorPagina.value)}%)`,
  };
});

function getJugadoresPorPagina() {
  const width = window.innerWidth;
  if (width > 1120) return 5;
  if (width > 700) return 4;
  if (width > 520) return 3;
  return 2;
}

function handleResize() {
  jugadoresPorPagina.value = getJugadoresPorPagina();
}

onBeforeMount(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Call initially to set the correct value
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track-title {
  border-bottom: 5px groove rgb(80, 194, 236);
  text-align: left;
  padding-left: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.btn-arrow {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.btn-arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}

.btn-arrow.left {
  left: 0;
}

.btn-arrow.right {
  right: 0;
}

</style>