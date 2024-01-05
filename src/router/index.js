import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import(/* webpackChunkName: "noticias" */ '../views/NoticiasView.vue'),
  },
  {
    path: '/estadisticas',
    name: 'estadisticas',
    component: () => import(/* webpackChunkName: "estadisticas" */ '../views/EstadisticasView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopView.vue')
  },
  {
    path: '/noticias/:id',
    name: 'entry',
    component: () => import(/* webpackChunkName: "entry" */ '@/views/NoticiaEntryView.vue'),
    props: (route) => {
      return {
        id: route.params.id
      }
    } 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
