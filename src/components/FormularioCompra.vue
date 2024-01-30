<template>
  <div v-if="mostrarFormulario" class="overlay"></div>
  <div v-if="mostrarFormulario" class="formulario-compra">
    <h2>Formulario de Compra</h2>
    <form @submit.prevent="enviarFormulario">
      <div class="campo">
        <label for="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" v-model="nombre" required />
      </div>

      <div class="campo">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="campo">
        <label for="direccion">Dirección de Envío:</label>
        <textarea id="direccion" v-model="direccion" required></textarea>
      </div>

      <div class="campo">
        <label for="tarjeta">Número de Tarjeta:</label>
        <input type="text" id="tarjeta" v-model="numeroTarjeta" required />
      </div>

      <div class="campo">
        <label for="fecha-expiracion">Fecha de Expiración:</label>
        <input type="text" id="fecha-expiracion" v-model="fechaExpiracion" required />
      </div>

      <div class="campo">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv" required />
      </div>

      <button type="submit" class="boton-finalizar">Finalizar Compra</button>
      <button @click="cerrarFormulario" class="boton-cerrar">Cerrar</button>
    </form>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// Desarrollar la action en CarritoItems.vue para settear en true la prop, mismo en false acá
const mostrarFormulario = computed(() => store.state.web.showForm);

const nombre = ref('');
const email = ref('');
const direccion = ref('');
const numeroTarjeta = ref('');
const fechaExpiracion = ref('');
const cvv = ref('');

const enviarFormulario = () => {
  // Lógica para enviar el formulario (puede variar según tu backend)
  // Puedes acceder a los productos en el carrito con store.state.web.carrito
  alert('Formulario enviado');
  reiniciarFormulario();
};

const reiniciarFormulario = () => {
  nombre.value = '';
  email.value = '';
  direccion.value = '';
  numeroTarjeta.value = '';
  fechaExpiracion.value = '';
  cvv.value = '';
  store.dispatch('web/deshabilitarFormulario')
};

const cerrarFormulario = () => {
  console.log('Formulario cerrado sin finalizar la compra');
  store.dispatch('web/deshabilitarFormulario')
};

</script>

<style scoped>
.formulario-compra {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1002;
}

.campo {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.boton-finalizar {
  background-color: rgb(68, 147, 70);
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

.boton-cerrar {
  background-color: rgb(177, 76, 76);
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001; /* Debe ser menor que el z-index del formulario */
}
</style>