<template>
<div class="fixture-resumen">
    <h2>Últimos Resultados</h2>
    <button @click="mostrarPartidosAnteriores" class="btn-arrow-fixture">&#8249;</button>
    <button @click="mostrarPartidosSiguientes" class="btn-arrow-fixture">&#8250;</button>
    <div class="contenedor-partidos">
        <TransitionGroup name="slide">
            <div v-for="partido in partidosVisibles" :key="partido.id" class="partido">
                <div class="info-torneo">{{ partido.torneo }}</div>
                <div class="info-fecha">{{ partido.fecha }}</div>
                <div class="info-equipos">
                    <div class="equipo-local">
                        <img :src="partido.equipoLocal.escudo" alt="Escudo Local" />
                        <span>{{ partido.equipoLocal.nombre }}</span>
                    </div>
                    <div class="resultado">{{ partido.resultado }}</div>
                    <div class="equipo-visitante">
                        <span>{{ partido.equipoVisitante.nombre }}</span>
                        <img :src="partido.equipoVisitante.escudo" alt="Escudo Visitante" />
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
</div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['partidos', 'partidosPorPagina'])

const partidosPorPagina = ref(props.partidosPorPagina)
const indiceInicial = ref(0)

const partidosVisibles = ref([])

const actualizarPartidosVisibles = () => {
    partidosVisibles.value = null;
    partidosVisibles.value = props.partidos.slice(
        indiceInicial.value, indiceInicial.value + partidosPorPagina.value
    )        
}

actualizarPartidosVisibles()
// Método para mostrar partidos anteriores
const mostrarPartidosAnteriores = () => {
    if (indiceInicial.value >= partidosPorPagina.value) {
    indiceInicial.value -= partidosPorPagina.value;
    actualizarPartidosVisibles();
    }
};
// Método para mostrar partidos siguientes
const mostrarPartidosSiguientes = () => {
    if (indiceInicial.value + partidosPorPagina.value < props.partidos.length) {
    indiceInicial.value += partidosPorPagina.value;
    actualizarPartidosVisibles();
    }
};    

</script>

<style scoped>

.fixture-resumen {
    width: max-content;
}

.btn-arrow-fixture {
    border: none;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(0, 41, 66, 0.8);
    width: 30px;
    height: 30px;
    margin: 0 10px;
    cursor: pointer;
}

.btn-arrow-fixture:hover {
    background-color: rgb(0, 41, 66);
}

.contenedor-partidos {
    margin-top: 10px;
    overflow: hidden;
    position: relative;
}
.partido {
    height: 230px;
    border: 2px solid rgb(0, 41, 66);
    background-color: rgba(80, 194, 236, 0.25);
    display: flex;
    flex-direction: column;
    color: rgb(0, 41, 66);
}

.partido:last-of-type {
    margin-top: 10px;
}

.partido:first-of-type {
    margin-bottom: 10px;
}

.info-torneo {
    border-bottom: 2px solid rgb(0, 41, 66);
    white-space: nowrap;
}

.info-torneo, .info-fecha {
    padding: 8px 0;
    margin: 0 0 10px;
    font-size: 90%;
    font-weight: bold;
    font-family: sans-serif;
    text-transform: uppercase;
}

.info-equipos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info-equipos > .equipo-local > img, .info-equipos > .equipo-visitante > img {
    max-height: 45px;
    max-width: 45px;
}

.equipo-local {
    display: flex;
    align-items: center;
}

.equipo-visitante {
    display: flex;
    align-items: center;
}

.resultado {
    font-size: 2rem;
    color: black;
}

span {
    line-height: -50px;
    margin: 10px;
}

.slide-enter-active {
    transition: all 0.5s ease;
}
.slide-enter-from {
    transform: scale(0.6);
}

.slide-leave-active {
    position: absolute;
    opacity: 0;
}

@media (max-width: 1000px){
    .contenedor-partidos {
        display: flex;
    }

    .fixture-resumen {
        margin: 25px 0;
    }

    .partido:last-of-type {
        margin-left: 5px;
        margin-top: auto;
    }

    .partido:first-of-type {
        margin-right: 5px;
        margin-bottom: auto;
    }
}

@media (max-width: 500px){
    .partido {
        font-size: 0.75rem;
    }
}

</style>