<template>
    <Menubar :model="categorias" @item-click="cambiarCategoriaNoticias">
        <template #start>
            <h2 id="h2-seccion">SECCIÓN NOTICIAS</h2>
        </template>
    </Menubar>
    <div class="noticias">
        <NoticiasListaComponent :noticias="noticiasCategorias"/>
    </div>
</template>

<script setup>
import NoticiasListaComponent from '@/components/NoticiasLista.vue';
import Menubar from 'primevue/menubar';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import "@fortawesome/fontawesome-free/css/all.min.css";

const categorias = ref([
    { label: 'Fútbol', icon: 'fas fa-futbol', command: () => cambiarCategoriaNoticias('futbol', 'setNoticiasFutbol') },
    { label: 'Institucional', icon: 'fas fa-building-columns', command: () => cambiarCategoriaNoticias('institucional', 'setNoticiasInstitucional') },
    { label: 'Básquet', icon: 'fas fa-basketball', command: () => cambiarCategoriaNoticias('basquet', 'setNoticiasBasquet') },
    { label: 'Últimas Noticias', icon: 'fas fa-newspaper', command: () => cambiarCategoriaNoticias('ultimas_noticias', 'setUltimasNoticias')}
])

const store = useStore();

const noticiasCategorias = computed(() => {
  return store.state.web.noticiasSeleccionadas
});

const cambiarCategoriaNoticias = (categoria, mutation) => {
  store.dispatch('web/loadNoticias', {categoria, mutation})
};

onMounted(() => {
    cambiarCategoriaNoticias('ultimas_noticias', 'setUltimasNoticias')
})

</script>

<style scoped>
.noticias {
    padding: 20px;
}

#h2-seccion {
    color: rgb(0, 41, 66);
    letter-spacing: -1.5px;
    margin-right: 5px;
}
</style>