<template>
  <NavbarComponent/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <FooterComponent/>
</template>

<script setup>
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';
</script>

<style>

* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif, Arial, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
