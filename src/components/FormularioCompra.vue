<template>
  <div v-if="mostrarFormulario" class="overlay"></div>
  <div v-if="mostrarFormulario" class="formulario-compra">
    <h2>Formulario de Compra</h2>
    <form @submit.prevent="enviarFormulario" novalidate="true">
      <div class="campo">
        <label for="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" v-model="nombreCompleto" />
      </div>

      <div class="campo">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="campo">
        <label for="ciudad">Ciudad:</label>
        <select id="ciudad" v-model="ciudadSeleccionada">
          <option v-for="ciudad in ciudades" :key="ciudad">{{ ciudad }}</option>
        </select>      
      </div>

      <div class="campo">
        <label for="direccion">Dirección de Envío:</label>
        <input type="text" id="direccion" v-model="direccion" />
      </div>

      <div class="campo">
        <label for="tarjeta">Número de Tarjeta:</label>
        <input type="text" id="tarjeta" v-model="numeroTarjeta" />
      </div>

      <div class="agrupador-campos">
        <div class="campo">
          <label for="fecha-expiracion">Fecha de Expiración:</label>
          <input type="text" id="fecha-expiracion" v-model="fechaExpiracion" />
        </div>
  
        <div class="campo">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="cvv" />
        </div>
      </div>

      <div class="lista-carrito">
        <h3>Estas comprando:</h3>
        <p v-if="carrito.length === 0">No hay items en el carrito.</p>
        <div v-else class="lista">
          <span v-for="(item, index) in carrito" :key="index">{{ item.nombre }} ({{ item.cantidad }}u.), </span>
          <b>Total: ${{ calcularTotalCarrito() }}</b> 
        </div>
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
const mostrarFormulario = computed(() => store.state.web.showForm);

const carrito = computed(() => store.state.web.carrito);

const nombreCompleto = ref('');
const email = ref('');
// const ciudadSeleccionada = ref();
const direccion = ref('');
const numeroTarjeta = ref('');
const fechaExpiracion = ref('');
const cvv = ref('');
// const errores = ref({})

const ciudades = ['Buenos Aires', 'CABA', 'Córdoba', 'Santa Fé', 'Neuquén']; // Puedes cambiar este array según tus necesidades

const calcularTotalCarrito = () => {
  return carrito.value.reduce((total, producto) => total + producto.totalPrecio, 0);
};

const enviarFormulario = () => {
  // Lógica para enviar el formulario (puede variar según tu backend)
  // Puedes acceder a los productos en el carrito con store.state.web.carrito
  // validarFormulario();
  alert('Formulario enviado');
  reiniciarFormulario();
};

const reiniciarFormulario = () => {
  nombreCompleto.value = '';
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

// const validarFormulario = () => {


// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


// errores.value.pais = paisSeleccionado.value ? null : 'Campo Obligatorio';
// if(provinciasDisabled.value === false){
//   errores.value.provincia = provinciaSeleccionada.value.id  ? null : 'Campo Obligatorio';
// }else {
//     errores.value.provincia = null
// }

// if(localidadesDisabled.value === false){
//   errores.value.localidad = localidadSeleccionada.value.id  ? null : 'Campo Obligatorio';
// }else {
//     errores.value.localidad = null
// }
// errores.value.cp = cp.value.length < 4 || cp.value.length > 10 ? null : 'Ingrese un CP Valido';
// errores.value.cp = cp.value ? null : 'Campo Obligatorio';
// if(errores.value.cp === null){
//   errores.value.cp = cp.value.length >= 4 ? null : 'Ingrese un Codigo Valido';
// }
// errores.value.telefono = telefono.value ? null : 'Campo Obligatorio';
// if(errores.value.telefono === null){
//   errores.value.telefono = telefono.value.length >= 8 ? null : 'Ingrese un Telefono Valido';
// }
// errores.value.direccion = direccion.value && direccion.value.length > 4 ? null : 'Campo Obligatorio';
// errores.value.email = email.value? null : 'Campo Obligatorio';
// if(errores.value.email === null){
//   errores.value.email = emailRegex.test(email.value) ? null : 'Ingrese un Email Valido';
// }

// return Object.values(errores.value).every((error) => !error);
// };

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
  max-width: 414px;
}

h2 {
  margin-bottom: 5px;
}

.campo {
  margin-bottom: 15px;
}

.agrupador-campos {
  display: flex;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.lista {
  margin: 5px 0;
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