<template>
    <h2 v-if="jugador" class="jugadores-title">Estadísticas de {{ jugador.Nombre }}</h2>
    <div v-if="jugador" class="jugador-container">
        <img :src="jugador.img" alt="Foto del jugador">
        <DataTable :value="datosTabla" paginator :rows="5" responsiveLayout="scroll" class="jugador-tabla" tableStyle="min-width: 500px; min-height: 300px;">
            <Column field="name" header="Característica" style="font-weight: bold;"></Column>
            <Column field="value" header="Valor"></Column>
        </DataTable>
        <Chart type="radar" :data="chartData" :options="chartOptions" style="width: 400px; height: 400px;" />
    </div>
</template>


<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import webApi from "@/api/webApi";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chart from 'primevue/chart';

const jugador = ref();
const datosTabla = ref([]);
const chartData = ref();
const route = useRoute();
const chartOptions = ref();

const loadJugador = async () => {
    try {
        const jugadorId = Number(route.params.id);
        const { data } = await webApi.get(`/jugadores/jugador${jugadorId}.json`);
        jugador.value = data;

        chartData.value = {
            labels: ["ATAQUE", "DEFENSA", "FÍSICO", "RITMO", "MENTALIDAD"],
            datasets: [
                {
                    label: "Estadísticas del Jugador",
                    data: [
                        jugador.value.Atk,
                        jugador.value.Def,
                        jugador.value.Fis,
                        jugador.value.Rit,
                        jugador.value.Men,
                    ],
                    backgroundColor: "rgba(80, 194, 236, 0.2)",
                    borderColor: "rgba(0, 41, 66, 1)",
                    borderWidth: 1,
                },
            ],
        };

        chartOptions.value = {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Adaptar los datos para DataTable
        datosTabla.value = [
            { name: "N°", value: jugador.value["Nº"] },
            { name: "Edad", value: jugador.value["Edad"] },
            { name: "Posición", value: jugador.value["Posición"] },
            { name: "Altura", value: jugador.value["Altura"] },
            { name: "Peso", value: jugador.value["Peso"] },
            { name: "Pierna Buena", value: jugador.value["Pierna buena"] },
            { name: "Nacionalidad", value: jugador.value["Nac"] },
            { name: "Partidos Totales", value: jugador.value["Part TT"] },
            { name: "Partidos Titular", value: jugador.value["Titular"] },
            { name: "Minutos", value: jugador.value["Min"] },
            { name: "Goles", value: jugador.value["Gol"] },
            { name: "Asistencias", value: jugador.value["Asis"] },
            { name: "xG", value: jugador.value["xG"] },
            { name: "xA", value: jugador.value["xA"] },
            { name: "Rojas", value: jugador.value["Roj"] },
            { name: "Amarillas", value: jugador.value["Ama"] },
            { name: "Valor", value: jugador.value["Valor de traspaso"] },
            { name: "Sueldo", value: jugador.value["Sueldo"] },
        ];
    } catch (error) {
        console.error('Error al cargar los datos del jugador: ', error);
    }
}

onBeforeMount(() => {
    loadJugador();
});

</script>

<style scoped>
.jugadores-title {
    border-top: 5px outset rgb(80, 194, 236);
    border-bottom: 5px outset rgb(80, 194, 236);
    text-align: left;
    padding: 10px 0 10px 20px;
    background-color: rgba(80, 194, 236, 0.25);
}

.jugador-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 20px;
    margin: 20px 0;
}

.jugador-container img {
    width: 350px;
    margin-right: 20px;
    border: 2px solid rgb(80, 194, 236);
}

@media (max-width: 520px){
    .jugador-container img {
        width: 300px;
    }

    .jugador-tabla {
        width: 350px !important;
    }
}

</style>