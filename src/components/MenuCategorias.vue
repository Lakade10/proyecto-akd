<template>
    <div>
        <Menubar :model="items" @item-click="cambiarCategoria"></Menubar>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex';
import Menubar from 'primevue/menubar';

const items = ref([
  { label: 'destacados', icon: 'pi pi-star', command: () => cambiarCategoria('destacados', 'setProductosDestacados') },
  { label: 'Deportivo', icon: 'pi pi-home', command: () => cambiarCategoria('deportivo', 'setProductosDeportivos') },
  { label: 'Casual', icon: 'pi pi-desktop', command: () => cambiarCategoria('casual', 'setProductosCasuales') },
  { label: 'Accesorios', icon: 'pi pi-tag', command: () => cambiarCategoria('accesorios', 'setProductosAccesorios') },
  { label: 'hogar', icon: 'pi pi-tag', command: () => cambiarCategoria('hogar', 'setProductosHogar') },
]);

const store = useStore()

const cambiarCategoria = (categoria, mutation) => {
  store.dispatch('web/loadProductos', { categoria, mutation });
};

onMounted(() => {
  store.dispatch('web/loadProductosDestacados')
})

</script>