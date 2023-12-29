<template>
    <header>
        <div class="navbar">
            <div class="logotipo1">
                <img id="logo1" src="../assets/Escudo_de_Racing_Club_(2014).png" alt="Escudo de Racing Club">
            </div>
            <div id="leyenda">
                <h1>RACING CLUB</h1>
                <p>EL PRIMER GRANDE</p>
            </div>
    
            <Menubar :model="secciones" id="menubar">
                <template #start>
                    <img height="50px" src="../assets/escudo1918.png" alt="Escudo de Racing Club">
                </template>
                <template #item="{ item }">
                    <RouterLink :to="item.to" v-slot="{ href, navigate }">
                        <a v-ripple :href="href" @click="navigate" class="p-menuitem-link">
                            <span>
                                <i :class="item.icon"></i>
                            </span>
                            <span class="ml-2">
                                {{ item.label }}
                            </span>
                        </a>
                    </RouterLink>
                </template>
            </Menubar>
        </div>
    </header>
</template>

<script>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import Menubar from "primevue/menubar"

export default {
    name: 'NavbarComponent',
    components: {
        Menubar,
        RouterLink
    },
    setup() {
        const secciones = ref([
            { label: 'HOME', icon: 'pi pi-home', to: '/' },
            { label: 'NOTICIAS', icon: 'pi pi-align-left', to: '/noticias' },
            { label: 'ESTADÍSTICAS', icon: 'pi pi-chart-bar', to: '/estadisticas' },
            { label: 'SHOP', icon: 'pi pi-shopping-cart', to: '/shop' }
        ])

        return { secciones }
    }
}

</script>

<style scoped>
.navbar {
    background-color: rgba(80, 194, 236, 0.8);
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    width: 100vw;
}

.logotipo1, #leyenda, #menubar {
    max-height: 80%;
}

a {
    text-decoration: none 
}

#menubar {
    margin: 15px;
}

#leyenda {
    font-family: sans-serif, Arial, Helvetica;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
}

#leyenda > h1 {
    font-size: 3rem;
    margin: 0;
}

#leyenda > p {
    font-size: 1.5rem;
    margin: 0;
}

#logo1 {
    height: 80px;
    margin: 0 15px;
}

@media (max-width: 575.98px) {
    #leyenda > h1 {
        font-size: 1.5rem;
    }

    #leyenda > p {
        font-size: 1rem;
    }

}
</style>