<template>
  <Transition name="slide-fade">
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
            <p>Precio: ${{ producto.precio }} - Cantidad: {{ producto.cantidad === producto.stock? producto.cantidad + ' (máxima)': producto.cantidad }}</p>
            <!-- se usa la misma funcion de CatalogoItems, ya que al tomar un producto ya añadido, el botón solo suma la cantidad -->
            <button @click="agregarAlCarrito(producto)" class="boton-añadir-mini"><i class="pi pi-plus"></i></button>
            <button @click="quitarDelCarrito(producto)" class="boton-quitar-mini"><i class="pi pi-minus"></i></button>
          </div>
        </div>
      </div>
      <div class="carrito-total">
        <p>Total: ${{ calcularTotalCarrito() }}</p>
      </div>
      <div class="carrito-botones" v-if="!carritoVacio">
        <button @click="removerTodo" class="boton-remover-todo">Remover Todo</button>
        <button @click="habilitarFormulario" class="boton-finalizar-compra">Finalizar Compra</button>
      </div>
    </div>
  </Transition>
  <div @click="toggleCarrito" class="carrito-icon">
    <span>{{ carrito.length }}</span>
    <i class="pi pi-shopping-cart"></i>
  </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const mostrarCarrito = ref(false);
  
  const carrito = computed(() => store.state.web.carrito);

  const carritoVacio = computed(() => carrito.value.length === 0)
  
  const toggleCarrito = () => {
    mostrarCarrito.value = !mostrarCarrito.value;
  };
  
  const cerrarCarrito = () => {
    mostrarCarrito.value = false;
  };
  
  const calcularTotalCarrito = () => {
    return carrito.value.reduce((total, producto) => total + producto.totalPrecio, 0);
  };

  const agregarAlCarrito = (producto) => {
    store.dispatch('web/agregarAlCarrito', producto )
  }

  const quitarDelCarrito = (producto) => {
    store.dispatch('web/quitarDelCarrito', producto)
  }

  const removerTodo = () => {
    store.dispatch('web/removerTodoDelCarrito')
  }

  const habilitarFormulario = () => {
    store.dispatch('web/habilitarFormulario')
  } 

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
    z-index: 1001;
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
    z-index: 1000;
  }

  /* Estilos botones de añadir y quitar */

  .boton-añadir-mini {
    background-color: rgb(68, 147, 70);
    color: #fff;
    border: none;
    border-radius: 50px;
    margin-right: 10px;
    margin: 5px 5px 0 0;
    padding: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;

  }

  .boton-quitar-mini {
    background-color: rgb(177, 76, 76);
    color: #fff;
    border: none;
    border-radius: 50px;
    margin: 5px 0 0 5px;
    padding: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .boton-añadir-mini:active, .boton-quitar-mini:active {
    filter: brightness(80%);
  }

  /* Estilos botones remover y finalizar */

  .carrito-botones {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .boton-remover-todo {
    background-color: rgb(177, 76, 76);
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }

  .boton-finalizar-compra {
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }

  .boton-finalizar-compra:active, .boton-remover-todo:active {
    filter: brightness(80%);
  }

  /* Estilos transición de carrito */

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(300px);
    opacity: 0;
  }

  </style>