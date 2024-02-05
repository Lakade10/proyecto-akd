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

      <div class="agrupador-campos">
        <div class="campo">
          <label for="direccion">Dirección de Envío:</label>
          <input type="text" id="direccion" v-model="direccion" />
        </div>

        <div class="campo">
          <label for="cp">Código Postal:</label>
          <input type="number" id="cp" v-model="cp" min="1000" max="9999999999" inputmode="numeric" />
        </div>
      </div>

      <div class="campo">
        <label for="tarjeta">Número de Tarjeta:</label>
        <input type="text" id="tarjeta" v-model="numeroTarjeta" placeholder="XXXX XXXX XXXX XXXX" />
      </div>

      <div class="agrupador-campos">
        <div class="campo">
          <label for="fecha-expiracion">Fecha de Expiración:</label>
          <input type="text" id="fecha-expiracion" v-model="fechaExpiracion" placeholder="XX/XX" />
        </div>
  
        <div class="campo">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="cvv" placeholder="XXX" />
        </div>
      </div>

      <div class="lista-carrito">
        <h3>Estas comprando:</h3>
        <p v-if="carrito.length === 0">No hay items en el carrito.</p>
        <div v-else class="lista">
          <span v-for="(item, index) in carrito" :key="index">{{ item.nombre }} ({{ item.cantidad }}u), </span>
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

const nombreCompleto = ref();
const email = ref();
const ciudadSeleccionada = ref();
const direccion = ref();
const cp = ref()
const numeroTarjeta = ref();
const fechaExpiracion = ref();
const cvv = ref();
const errores = ref({});

const ciudades = ['Buenos Aires', 'CABA', 'Córdoba', 'Santa Fé', 'Neuquén'];

const calcularTotalCarrito = () => {
  return carrito.value.reduce((total, producto) => total + producto.totalPrecio, 0);
};

const enviarFormulario = () => {
  validarFormulario();
  // alert('Formulario enviado');
  // reiniciarFormulario();
};

const reiniciarFormulario = () => {
  nombreCompleto.value = null;
  ciudadSeleccionada.value = null;
  email.value = null;
  direccion.value = null;
  numeroTarjeta.value = null;
  fechaExpiracion.value = null;
  cp.value = null
  cvv.value = null;
  store.dispatch('web/deshabilitarFormulario')
  store.dispatch('web/removerTodoDelCarrito')
};

const cerrarFormulario = () => {
  console.log('Formulario cerrado sin finalizar la compra');
  store.dispatch('web/deshabilitarFormulario')
};

const validarFormulario = () => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  errores.value.nombreCompleto = nombreCompleto.value ? null : 'Campo Nombre Completo Obligatorio';
  if(errores.value.nombreCompleto === null){
    const nombreCompletoSinEspacios = nombreCompleto.value.trim();
    errores.value.nombreCompleto = nombreCompletoSinEspacios.includes(' ') && nombreCompletoSinEspacios.length >= 6 ? null : 'Ingrese un Nombre Completo Válido';
    nombreCompleto.value = nombreCompletoSinEspacios;
  }

  errores.value.ciudad = ciudadSeleccionada.value ? null : 'Campo Ciudad Obligatorio';

  errores.value.cp = cp.value ? null : 'Campo CP Obligatorio';
  if(errores.value.cp === null){
    errores.value.cp = cp.value >= 1000 && cp.value <= 9999? null : 'Ingrese un CP Valido';
  }
  
  errores.value.direccion = direccion.value ? null : 'Campo Dirección Obligatorio';
  if(errores.value.direccion === null){
    errores.value.direccion = direccion.value.length > 4 && direccion.value.length < 100 ? null : 'Ingrese una Dirección Válida';
  }
  errores.value.email = email.value? null : 'Campo Email Obligatorio';
  if(errores.value.email === null){
    errores.value.email = emailRegex.test(email.value) ? null : 'Ingrese un Email Valido';
  }
  
  errores.value.numeroTarjeta = numeroTarjeta.value ? null : 'Campo Número de Tarjeta Obligatorio';
  
  if(errores.value.numeroTarjeta === null){
    errores.value.numeroTarjeta = numeroTarjeta.value.length === 16 ? null : 'Ingrese un Número de Tarjeta Válido (16 caracteres)';
    
    if(errores.value.numeroTarjeta === null){
      const soloNumeros = /^[0-9]*$/;
      errores.value.numeroTarjeta = soloNumeros.test(numeroTarjeta.value) ? null : 'Ingrese Solo Números en el Campo Tarjeta';
      
      if(errores.value.numeroTarjeta === null){
        const sinEspacios = numeroTarjeta.value.replace(/\s/g, '');
        const formatoValido = /^(\d{4}\s?){3}\d{4}$/;
        errores.value.numeroTarjeta = formatoValido.test(sinEspacios) ? null : 'Ingrese un Número de Tarjeta Válido (espacios)';
      }
    }
  }
  
  errores.value.fechaExpiracion = fechaExpiracion.value ? null : 'Campo Fecha de Expiración Obligatorio';
  if(errores.value.fechaExpiracion === null){
    const fechaExpiracionRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    errores.value.fechaExpiracion = fechaExpiracionRegex.test(fechaExpiracion.value) ? null : 'Ingrese la Fecha en el Formato Correcto'
  }

  errores.value.cvv = cvv.value ? null : 'Campo CVV Obligatorio';
  if(errores.value.cvv === null){
    errores.value.cvv = cvv.value.length === 3 ? null : 'Ingrese un CVV Válido'
  }

  const mensajesErrores = Object.values(errores.value).filter((error) => error !== null);

  if (mensajesErrores.length === 0) {
    // No hay errores
    alert('Formulario validado correctamente');
    reiniciarFormulario();
  } else {
    // Hay errores, mostrar mensajes
    alert(`Hay errores en el formulario:\n${mensajesErrores.join('\n')}`);
  }
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