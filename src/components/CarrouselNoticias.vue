<template>
<div class="carousel-container">
  <div class="noticias">
    <h2>Noticias</h2>
    <a :href="noticiaActual.link">
      <img :src="noticiaActual.image" :alt="noticiaActual.title">
    </a>
    <div class="texto-container">
      <h3>{{ noticiaActual.title }}</h3>
      <p>{{ noticiaActual.content }}</p>
    </div>
    <button @click="decrementarNoticia()" class="btn-arrow">&#8249;</button>
    <button @click="incrementarNoticia()" class="btn-arrow">&#8250;</button>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue';

const index = ref(0)

const noticias = ref([
  {
    title: 'NO SE DIÓ EN CASA...',
    content: 'La academia cae 1 a 0 frente a Boca, pese al juego colectivo y posesión dominante',
    image: require('@/assets/imagenesNoticias/boca1racing0.jpeg'),
    link: '#'
  },
  { 
    title: 'ROGER, OTRA VEZ',
    content: 'Golazo agónico del colombiano otra vez para quedarnos con el 4to puesto de la tabla frente a Huracán',
    image: require('@/assets/imagenesNoticias/racingHuracan.jpg'),
    link: '#'
  },
  { 
    title: 'VICTORIA EN ALBERDI',
    content: 'Un golazo firmado por Roger para imponer a la acadé de visitante frente a Belgrano',
    image: require('@/assets/imagenesNoticias/belgranoRacing.jpg'),
    link: '#'
  },
  { 
    title: 'LA NOCHE DEL DEMONIO',
    content: 'Doblete y asistencia de Hauche para cerrar la noche de local contra Gimnasia (LP)',
    image: require('@/assets/imagenesNoticias/hauche.jpeg'),
    link: '#'
  }
])

const incrementarNoticia = () => {
  if(index.value < noticias.value.length - 1){
    index.value++
  }
}

const decrementarNoticia = () => {
  if(index.value > 0 ){
    index.value--
  }
}

const noticiaActual = computed(() => noticias.value[index.value])

</script>

<style>

.noticias {
  position: relative;
}

.noticias > h2 {
  position: absolute;
  left: 10%;
  top: 2%;
  color: rgba(255, 255, 255, 0.7);
}


.noticias > a > img {
  width: 1100px;
  height: 650px;
  object-fit: cover;
}


.noticias > button:first-of-type {
  position: absolute;
  left: 10%;
  top: 50%;
}

.texto-container {
  position: absolute;
  width: 75%;
  bottom: 7%;
  left: 10%;
  text-align: justify;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 10px;
  
}

.texto-container > h3 {
  font-size: 1rem;
  color: white;
}

.texto-container > p {
  font-size: 0.8rem;
  color: white;
}

.texto-container > button {
  text-align: center;
}

.btn-arrow {
  position: absolute;
  top: 50%;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  padding: 20px;
}

.btn-arrow:first-of-type {
  left: 10%;
}

.btn-arrow:last-of-type {
  right: 10%;
}

@media (min-width: 1000px){
  .texto-container {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
  }
  
  .texto-container > h3 {
    font-size: 1.5rem;
  }
  
  .texto-container > p {
    font-size: 1rem;
  }
}

@media (min-width: 550px){
  .noticias > a > h2 {
    font-size: 2rem;
  }
}

@media (max-width: 1400px){
  .noticias > a > img {
    width: 900px;
    height: 550px;
  }
  
}

@media (max-width: 1100px){
  .noticias > a > img {
    width: 725px;
    height: 425px;
  } 
}

@media (max-width: 1000px){
  .noticias > a > img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 600px){

  .texto-container {
    width: 50%;
    padding: 5px;
    left: 25%;
  }

  .btn-arrow {
    padding: 5px;
  }

}

</style>