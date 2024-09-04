<template>
    <div class="estadisticas">
        <h2 class="jugadores-title">PLANTEL PROFESIONAL</h2>
        <div class="jugadores-container">
            <router-link :to="'estadisticas/jugador/' + jugador.id" v-for="jugador in jugadores" :key="jugador.id" class="jugador-card">
                <img :src="jugador.img">
                <div class="jugador-nombre">
                    <b>{{ jugador.Nombre }}</b>
                    <br>
                    {{ jugador.Posición }}
                </div>
                <span><b>{{ jugador.Nº }}</b></span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import webApi from "@/api/webApi";
import { ref, onBeforeMount } from 'vue';

const jugadores = ref();

const loadJugadores = async () => {
    try {
        const { data } = await webApi.get(`/jugadores.json`)
        jugadores.value = data;
    } catch (error) {
        console.error('Error al cargar productos: ', error)
    }
}

onBeforeMount(() => {
    loadJugadores();
})

</script>

<style scoped>
.estadisticas {
    background-image: linear-gradient(to bottom, rgba(80, 194, 236), rgba(0, 41, 66) );
}

.jugadores-title {
    border-top: 5px outset rgb(80, 194, 236);
    border-bottom: 5px outset rgb(80, 194, 236);
    text-align: left;
    padding: 10px 0 10px 20px;
    background-color: #cffcff;;
}

.jugadores-container {
    display: flex;
    justify-content: flex-start ;
    flex-wrap: wrap;
    padding: 10px;
}

.jugador-card {
    width: 19.0%;
    margin: 0.5%;
    position: relative;
    box-sizing: border-box;
    transition: transform 0.2s ease-in-out;
    /* transition: all 0.5s ease; */
}

.jugador-card:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.05);
}

.jugador-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.jugador-card span {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 40px;
    color: #e8e8e8;
    opacity: 0.2;
}

.jugador-nombre {
    position: absolute;
    bottom: 0%;
    padding: 5%;
    width: 100%;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.1);
    color: #ffffff;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
}

.jugador-card:hover .jugador-nombre {
    background-color: rgba(80, 194, 236, 0.5);
    font-size: 25px;
}

@media (max-width: 1120px){
    .jugador-card {
        width: 24.0%;
    }
}

@media (max-width: 870px){
    .jugador-card {
        width: 32.3%;
    }

    .jugador-nombre {
        font-size: 17px;
    }

    .jugador-card:hover .jugador-nombre {
        font-size: 20px;
    }
}

@media (max-width: 520px){
    .jugador-card {
        width: 49.0%;
    }

    .jugador-nombre {
        font-size: 15px;
    }

    .jugador-card:hover .jugador-nombre {
        font-size: 18px;
    }
}

</style>