<template>
    <div class="shop">
        <div>
            <Menubar :model="items" @item-click="cambiarCategoria"></Menubar>
        </div>
        <div>
          <CarritoItemsComponent/>
        </div>
        <CatalogoItemsComponent/>
    </div>
</template>

<script setup>
import CatalogoItemsComponent from '@/components/CatalogoItems.vue'
import CarritoItemsComponent from '@/components/CarritoItems.vue'
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
  console.log(`cambiarCategoria: ${categoria}, ${mutation}`);
  store.dispatch('web/loadProductos', { categoria, mutation });
};

onMounted(() => {
    cambiarCategoria('destacados', 'setProductosDestacados')
})

</script>

<style scoped>

</style>