<template>
    <footer class="footer">
        <div class="container">
            <div class="about">
                <h2>Sobre Nosotros</h2>
                <p>Página web creada con el objetvo de poner en práctica múltiples tecnologias y herramientas con las que 
                    desarrollar diversas funcionalidades de una aplicación web, consumiendo datos relacionados a una partida de FM24 para 
                    simular una alternativa a la web oficial de Racing Club de Avellaneda.
                </p>
            </div>
            <div class="social">
                <h2>Redes Sociales Oficiales</h2>
                <nav class="sociales">
                    <ul>
                        <li v-for="red in redes" :key="red.nombre">
                            <a :href="red.url">
                                <i :class="red.icono"><span>{{ red.nombre }}</span></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="autoria">
            <p>Creado por Thiago Santero. Todos los derechos pertenecen a Racing Club de Avellaneda y Sports Interactive</p>
        </div>
    </footer>
</template>

<script>
import { ref } from "vue"

export default {
    name: 'FooterComponent',
    setup(){
        const redes = ref([
            { nombre: ' Página Oficial', url: 'https://www.racingclub.com.ar/', icono: 'pi pi-bookmark-fill' },
            { nombre: ' Locademia', url: 'https://locademia.racingclub.com.ar/', icono: 'pi pi-shopping-bag' },
            { nombre: ' Instagram', url: 'https://www.instagram.com/racingclub/?hl=es-la', icono: 'pi pi-instagram' },
            { nombre: ' X', url: 'https://twitter.com/RacingClub?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', icono: 'pi pi-twitter' }
        ])

        return { redes }
    },

}

</script>

<style scoped>

.footer {
    background-color: rgb(0, 41, 66);
    padding-top: 1rem;
    color: rgb(217, 242, 251);
}

footer h2 {
    text-transform: uppercase;
}

@media screen and (min-width:768px) {
    .footer .container {
        display: flex;
        justify-content: space-around;
    }
    .footer .about {
        flex: 1;
    }
}

.container {
    margin: 0 2rem;
}

.container div {
    margin: 0 2rem;
}

.about {
    max-width: 600px;
}

.sociales {
    padding: 10px;
}

.sociales ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex: 1 0 auto;
    list-style: none;
    margin-top: 15px;
}

.sociales ul li {
    margin-right: 1rem;
}

.sociales ul li span {
    font-family: sans-serif;
}

.sociales ul li a:before {
    color: rgb(80, 194, 236);
    font-size: 2rem;
    
}

.sociales ul li a {
    text-decoration: none;
    color: rgb(80, 194, 236);
}

.autoria {
    padding: 15px;
    color: rgb(0, 100, 162);
}

@media (max-width: 575.98px){

    h2 {
        font-size: 1.2rem;
        margin: 10px 0 0 0;
    }

    p, a, i {
        font-size: 0.8rem;
    }

    ul {
        padding: 0;
    }

}

</style>