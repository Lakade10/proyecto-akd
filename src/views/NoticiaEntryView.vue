<template>
  <!-- El siguiente template puede ser modularizado en un componente Entry -->
  <template v-if="noticia">
    <div class="noticia-entry-view">
      <h2>{{ noticia.title }}</h2>
      <img :src="noticia.image" :alt="noticia.title">
      <p class="intro">{{ noticia.content }}</p>
      <p class="body">{{ noticia.body }}</p>
      <RouterLink :to="'/noticias'" class="boton-volver">Volver</RouterLink>
    </div>
  </template>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
  
const noticia = ref(null);
  
const noticias = ref([
  {
    title: 'NO SE DIÓ EN CASA...',
    content: 'La academia cae 1 a 0 frente a Boca, pese al juego colectivo y posesión dominante',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Odio morbi quis commodo odio aenean sed adipiscing diam. Odio euismod lacinia at quis risus sed. Enim facilisis gravida neque convallis a cras. Purus faucibus ornare suspendisse sed nisi lacus sed. Commodo viverra maecenas accumsan lacus vel. Blandit turpis cursus in hac habitasse platea. Sed elementum tempus egestas sed sed risus pretium quam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. A arcu cursus vitae congue mauris rhoncus aenean vel elit.',
    image: require('@/assets/imagenesNoticias/boca1racing0.jpeg'),
    link: '4'
  },
  { 
    title: 'ROGER, OTRA VEZ',
    content: 'Golazo agónico del colombiano otra vez para quedarnos con el 4to puesto de la tabla frente a Huracán',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Odio morbi quis commodo odio aenean sed adipiscing diam. Odio euismod lacinia at quis risus sed. Enim facilisis gravida neque convallis a cras. Purus faucibus ornare suspendisse sed nisi lacus sed. Commodo viverra maecenas accumsan lacus vel. Blandit turpis cursus in hac habitasse platea. Sed elementum tempus egestas sed sed risus pretium quam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. A arcu cursus vitae congue mauris rhoncus aenean vel elit.',
    image: require('@/assets/imagenesNoticias/racingHuracan.jpg'),
    link: '3'
  },
  { 
    title: 'VICTORIA EN ALBERDI',
    content: 'Un golazo firmado por Roger para imponer a la acadé de visitante frente a Belgrano',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Odio morbi quis commodo odio aenean sed adipiscing diam. Odio euismod lacinia at quis risus sed. Enim facilisis gravida neque convallis a cras. Purus faucibus ornare suspendisse sed nisi lacus sed. Commodo viverra maecenas accumsan lacus vel. Blandit turpis cursus in hac habitasse platea. Sed elementum tempus egestas sed sed risus pretium quam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. A arcu cursus vitae congue mauris rhoncus aenean vel elit.',
    image: require('@/assets/imagenesNoticias/belgranoRacing.jpg'),
    link: '2'
  },
  { 
    title: 'LA NOCHE DEL DEMONIO',
    content: 'Doblete y asistencia de Hauche para cerrar la noche de local contra Gimnasia (LP)',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris commodo. Odio morbi quis commodo odio aenean sed adipiscing diam. Odio euismod lacinia at quis risus sed. Enim facilisis gravida neque convallis a cras. Purus faucibus ornare suspendisse sed nisi lacus sed. Commodo viverra maecenas accumsan lacus vel. Blandit turpis cursus in hac habitasse platea. Sed elementum tempus egestas sed sed risus pretium quam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. A arcu cursus vitae congue mauris rhoncus aenean vel elit.',
    image: require('@/assets/imagenesNoticias/hauche.jpeg'),
    link: '1'
  }
])

const route = useRoute();

onMounted(() => {
  cargarNoticia();
});

onUnmounted(() => {
  noticia.value = null;
})

watch(() => route.params.id, () => {
  cargarNoticia();
});

const cargarNoticia = () => {
  const noticiaIndex = Number(route.params.id);
  if (!isNaN(noticiaIndex) && noticiaIndex >= 0 && noticiaIndex < noticias.value.length) {
    noticia.value = noticias.value[noticiaIndex];
  }
};

</script>
  
  <style scoped>
  /* Estilos para la vista de entrada de la noticia */
  .noticia-entry-view {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para el título de la noticia */
  .noticia-entry-view h2 {
    color: #333;
  }
  
  /* Estilos para la imagen de la noticia */
  .noticia-entry-view img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  /* Estilos para el cuerpo de la noticia */
  .noticia-entry-view .intro {
    text-align: justify;
    margin-top: 10px;
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    background-color: rgba(255, 234, 42, 0.5);
    padding: 5px;
    border-radius: 10px;
  }

  .noticia-entry-view .body {
    text-align: justify;
    margin-top: 10px;
    font-size: 1.2rem;
    color: #000;
    line-height: 1.6;
  }

  .boton-volver {
  /* Agrega estilos según sea necesario */
    display: inline-block;
    padding: 10px;
    background-color: rgb(0, 41, 66);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
  </style>
  