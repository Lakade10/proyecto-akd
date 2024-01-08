<template>
    <div class="catalogo">
        <div v-for="item in catalogoItems" :key="item.id">
            <img :src="item.imagen" :alt="item.nombre">
            <h3>{{ item.nombre }}</h3>
            <p>${{ item.precio }} - Stock disponible: {{ item.stock }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'; 

const store = useStore();

// Utiliza una computed property para obtener los items del catálogo según la categoría seleccionada
const catalogoItems = computed(() => {
  return store.state.web.productosSeleccionados
});

</script>