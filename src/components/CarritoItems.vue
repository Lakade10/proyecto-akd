<template>
    <div v-if="mostrarCarrito" class="carrito">
      <div class="carrito-header">
        <span @click="cerrarCarrito">X</span>
        <h2>Carrito de Compras</h2>
      </div>
      <div class="carrito-items">
        <div v-for="producto in carrito" :key="producto.id" class="carrito-item">
          <img :src="producto.imagen" :alt="producto.nombre">
          <div>
            <h3>{{ producto.nombre }}</h3>
            <p>Precio: ${{ producto.precio }}</p>
          </div>
        </div>
      </div>
      <div class="carrito-total">
        <p>Total: ${{ calcularTotalCarrito() }}</p>
      </div>
    </div>
    <div @click="toggleCarrito" class="carrito-icon">
      <span>{{ carrito.length }}</span>
      <!-- Icono del carrito -->
      <i class="pi pi-shopping-cart"></i>
      <!-- Agrega aquí el icono que desees para representar el carrito -->
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const mostrarCarrito = ref(false);
  
  const carrito = computed(() => store.state.web.carrito);
  
  const toggleCarrito = () => {
    mostrarCarrito.value = !mostrarCarrito.value;
  };
  
  const cerrarCarrito = () => {
    mostrarCarrito.value = false;
  };
  
  const calcularTotalCarrito = () => {
    // Puedes ajustar esta función según la estructura de tu producto y tus necesidades
    return carrito.value.reduce((total, producto) => total + producto.precio, 0);
  };
  </script>
  
  <style scoped>
  /* Estilos para el carrito */
  .carrito {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1000;
    overflow-y: auto;
  }
  
  .carrito-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .carrito-header span {
    cursor: pointer;
    font-size: 18px;
  }
  
  .carrito-items {
    margin-bottom: 20px;
  }
  
  .carrito-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    padding: 10px;
  }

  .carrito-item:hover {
    background-color: rgb(217, 242, 251);
  }
  
  .carrito-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin: 0 10px 0;
    border-radius: 50px;
  }
  
  .carrito-total {
    text-align: right;
    font-size: 18px;
    font-weight: bold;
  }
  
  /* Estilos para el ícono del carrito */
  .carrito-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
  }
  
  </style>
  
  