<template>
    <div class="catalogo">
        <div v-for="item in catalogoItems" :key="item.id" class="catalogo-item">
          <img :src="item.imagen" :alt="item.nombre">
          <h3>{{ item.nombre }}</h3>
          <p><b>${{ item.precio }}</b> - Stock disponible: <b>{{ item.stock }}</b></p>
          <button v-if="item.stock > 0" @click="agregarAlCarrito(item)" class="boton-añadir">
          <i class="pi pi-cart-plus"></i> Añadir</button>
          <h3 v-else class="header-fuera-de-stock">FUERA DE STOCK</h3>
          <Transition name="fade">
            <div v-if="item.mensajeAñadido" class="mini-modal">
              Añadido al carrito! Podés modificar la cantidad en el mismo
            </div>
          </Transition>
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
  producto.mensajeAñadido = true
  setTimeout(() => {
    producto.mensajeAñadido = false
  }, 2000);
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

.catalogo .catalogo-item {
  position: relative;
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

.mini-modal {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

/* Estilos transición mini-modal */

.fade-enter-active {
  transition: all 0.2s ease-in;
}

.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilos transicion items */

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