<template>
<div class="fixture-resumen">
    <h2>Últimos Resultados</h2>
    <button @click="mostrarPartidosAnteriores">&#8249;</button>
    <button @click="mostrarPartidosSiguientes">&#8250;</button>
    <div class="contenedor-partidos">
        <div v-for="(partido, index) in partidosVisibles" :key="index" class="partido">
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
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

const fixtureData = ref([
    {
        torneo: 'Liga Profesional de Fútbol',
        fecha: '01/02/2023',
        equipoLocal: {
            nombre: 'Racing Club',
            escudo: require('@/assets/escudos/racingClub.png')
        },
        equipoVisitante: {
            nombre: 'Genérico FC',
            escudo: require('@/assets/escudos/escudoGenerico.png')
        },
        resultado: '2 - 0'
    },
    {
        torneo: 'Liga Profesional de Fútbol',
        fecha: '04/02/2023',
        equipoLocal: {
            nombre: 'Racing Club',
            escudo: require('@/assets/escudos/racingClub.png')
        },
        equipoVisitante: {
            nombre: 'Genérico FC',
            escudo: require('@/assets/escudos/escudoGenerico.png')
        },
        resultado: '1 - 1'
    },
    {
        torneo: 'Copa Libertadores',
        fecha: '07/02/2023',
        equipoLocal: {
            nombre: 'Racing Club',
            escudo: require('@/assets/escudos/racingClub.png')
        },
        equipoVisitante: {
            nombre: 'Genérico FC',
            escudo: require('@/assets/escudos/escudoGenerico.png')
        },
        resultado: '3 - 2'
    },
    {
        torneo: 'Copa Argentina',
        fecha: '12/02/2023',
        equipoLocal: {
            nombre: 'Racing Club',
            escudo: require('@/assets/escudos/racingClub.png')
        },
        equipoVisitante: {
            nombre: 'Genérico FC',
            escudo: require('@/assets/escudos/escudoGenerico.png')
        },
        resultado: '2 - 1'
    }

])
const partidosPorPagina = 2
const indiceInicial = ref(0)

const partidosVisibles = ref([])

const actualizarPartidosVisibles = () => {
    partidosVisibles.value = fixtureData.value.slice(
        indiceInicial.value, indiceInicial.value + partidosPorPagina
    )
}

actualizarPartidosVisibles()

    // Método para mostrar partidos anteriores
    const mostrarPartidosAnteriores = () => {
      if (indiceInicial.value >= partidosPorPagina) {
        indiceInicial.value -= partidosPorPagina;
        actualizarPartidosVisibles();
      }
    };

    // Método para mostrar partidos siguientes
    const mostrarPartidosSiguientes = () => {
      if (indiceInicial.value + partidosPorPagina < fixtureData.value.length) {
        indiceInicial.value += partidosPorPagina;
        actualizarPartidosVisibles();
      }
    };
    

</script>

<style scoped>

.fixture-resumen {
    width: max-content;
    margin: 25px 10px 25px 0;
}

.contenedor-partidos {
    margin-top: 10px;
}
.partido {
    height: 230px;
    border: 2px solid rgb(0, 41, 66);
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