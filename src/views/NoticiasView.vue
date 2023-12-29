<template>
    <div class="noticias">
        <NoticiasListaComponent/>
    </div>

    <RouterView>

    </RouterView>
</template>

<script >
import NoticiasListaComponent from '@/components/NoticiasLista.vue'

export default {
    name: 'NoticiasView',
    components: { NoticiasListaComponent }
}

</script>

<style>

</style>