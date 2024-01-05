<template>
    <div class="noticias">
        <NoticiasListaComponent/>
    </div>
</template>

<script>
import NoticiasListaComponent from '@/components/NoticiasLista.vue'

export default {
    name: 'NoticiasView',
    components: { NoticiasListaComponent }
}

</script>

<style scoped>
    .noticias {
        padding: 20px;
    }
</style>