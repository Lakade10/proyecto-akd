<template>
    <div class="shop">
        <div>
          <Menubar :model="items" @item-click="cambiarCategoria">
            <template #start>
              <div class="start-container">
                <div class="start-title-container">
                  <h2>locademia</h2>
                  <p>TIENDAS OFICIALES RACING CLUB</p>
                </div>
                <img height="50px" src="../assets/locademiaLogo.png" alt="Shop Logo">
              </div>
            </template>
          </Menubar>
        </div>
        <div>
          <CarritoItemsComponent/>
        </div>
        <div>
          <CatalogoItemsComponent/>
        </div>
        <div>
          <FormularioCompraComponent/>
        </div>
    </div>
</template>

<script setup>
import CatalogoItemsComponent from '@/components/CatalogoItems.vue'
import CarritoItemsComponent from '@/components/CarritoItems.vue'
import FormularioCompraComponent from '@/components/FormularioCompra.vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex';
import Menubar from 'primevue/menubar';
import "@fortawesome/fontawesome-free/css/all.min.css";


const items = ref([
  { label: 'Destacados', icon: 'fas fa-star', command: () => cambiarCategoria('destacados', 'setProductosDestacados') },
  { label: 'Deportivo', icon: 'fas fa-person-running', command: () => cambiarCategoria('deportivo', 'setProductosDeportivos') },
  { label: 'Casual', icon: 'fas fa-shirt', command: () => cambiarCategoria('casual', 'setProductosCasuales') },
  { label: 'Accesorios', icon: 'fas fa-bag-shopping', command: () => cambiarCategoria('accesorios', 'setProductosAccesorios') },
  { label: 'Hogar', icon: 'fas fa-house', command: () => cambiarCategoria('hogar', 'setProductosHogar') },
]);

const store = useStore()

const cambiarCategoria = (categoria, mutation) => {
  // console.log(`cambiarCategoria: ${categoria}, ${mutation}`);
  store.dispatch('web/loadProductos', { categoria, mutation });
};

onMounted(() => {
    cambiarCategoria('destacados', 'setProductosDestacados')
})

</script>

<style scoped>

.start-container {
  display: flex;
  align-items: center;
}

.start-title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.start-title-container h2 {
  color: rgb(0, 41, 66);
  font-size: 1.8rem;
  letter-spacing: -1.5px;
}

.start-title-container p {
  color: #3498db;
  font-size: 0.7rem;
  letter-spacing: -1px;
  font-weight: 500;
}

</style>