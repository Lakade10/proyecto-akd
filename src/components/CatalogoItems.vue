<template>
    <div class="catalogo">
        <div v-for="item in catalogoItems" :key="item.id">
            <img :src="item.imagen" :alt="item.nombre">
            <h3>{{ item.nombre }}</h3>
            <p><b>${{ item.precio }}</b> - Stock disponible: <b>{{ item.stock }}</b></p>
            <button v-if="item.stock > 0" @click="agregarAlCarrito(item)" class="boton-añadir"><i class="pi pi-cart-plus"></i> Añadir</button>
            <h3 v-else class="header-fuera-de-stock">FUERA DE STOCK</h3>
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

const agregarAlCarrito = (producto) => {
  store.dispatch('web/agregarAlCarrito', producto )
}

</script>

<style scoped>

.catalogo {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.catalogo img {
  width: 100%;
  height: 200px; 
  object-fit: cover; /* Ajusta la imagen dentro del contenedor sin distorsionarla */
  border-radius: 10px;
}

.catalogo div {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color linear 0.2s;
}

.catalogo div:hover {
  background-color: rgb(217, 242, 251);
}

.boton-añadir {
  display: inline-block;
  padding: 5px;
  background-color: rgb(68, 147, 70);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
}

.boton-añadir:active {
  background-color: rgb(38, 82, 39);
}

h3 {
  line-height: 1.6;
}

.header-fuera-de-stock {
  margin-top: 10px;
  text-decoration: underline;
}

p b {
  font-size: 1.2rem;
}

</style>