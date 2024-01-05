<template>
    <div>
        <Menubar :model="items" @item-click="cambiarCategoria"></Menubar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import Menubar from 'primevue/menubar';

const items = ref([
  { label: 'Deportivo', icon: 'pi pi-home', command: () => cambiarCategoria('deportivo', 'setProductosDeportivos') },
  { label: 'Casual', icon: 'pi pi-desktop', command: () => cambiarCategoria('casual', 'setProductosCasuales') },
  { label: 'Accesorios', icon: 'pi pi-tag', command: () => cambiarCategoria('accesorios', 'setProductosAccesorios') },
  { label: 'hogar', icon: 'pi pi-tag', command: () => cambiarCategoria('hogar', 'setProductosHogar') }
]);

const store = useStore()

const cambiarCategoria = (categoria, mutation) => {
  store.dispatch('web/loadProductos', { categoria, mutation });
};

// const { loadProductosDeportivos } = store.dispatch('web/loadProductosDeportivos') 
// const { loadProductosCasuales } = store.dispatch('web/loadProductosCasuales')
// const { loadProductosAccesorios } = store.dispatch('web/loadProductosAccesorios')
// const { loadProductosHogar } = store.dispatch('web/loadProductosHogar')

// onMounted(() => {
//     loadProductosDeportivos, loadProductosCasuales, loadProductosAccesorios, loadProductosHogar
// })
</script>