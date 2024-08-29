<template>
    <h2 v-if="jugador" class="jugadores-title">Estadísticas de {{ jugador.Nombre }}</h2>
    <div v-if="jugador" class="jugador-container">
        <img :src="jugador.img">
        <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>EDAD</th>
                    <th>POSICIÓN</th>
                    <th>ALTURA</th>
                    <th>PESO</th>
                    <th>PIERNA BUENA</th>
                    <th>NACIONALIDAD</th>
                    <th>PARTIDOS TOTALES</th>
                    <th>PARTIDOS TITULAR</th>
                    <th>MINUTOS</th>
                    <th>GOLES</th>
                    <th>ASISTENCIAS</th>
                    <th>xG</th>
                    <th>xA</th>
                    <th>ROJAS</th>
                    <th>AMARILLAS</th>
                    <th>VALOR</th>
                    <th>SUELDO</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>
</template>

<script setup>
import webApi from "@/api/webApi";
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const jugador = ref();
const route = useRoute();

const loadJugador = async () => {
    try {
        const jugadorId = Number(route.params.id);
        const { data } = await webApi.get(`/jugadores/jugador${jugadorId}.json`);
        jugador.value = data;
    } catch (error) {
        console.error('Error al cargar productos: ', error);
    }
}

onBeforeMount(() => {
    loadJugador();
})

</script>

<style scoped>

.jugadores-title {
    border-top: 5px outset rgb(80, 194, 236);
    border-bottom: 5px outset rgb(80, 194, 236);
    text-align: left;
    padding: 10px 0 10px 20px;
    background-color: rgba(80, 194, 236, 0.25);
}

.jugador-container img {
    width: 400px;
}

</style>