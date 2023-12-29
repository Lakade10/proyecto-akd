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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import(/* webpackChunkName: "noticias" */ '../views/NoticiasView.vue'),
    children: [
      {
        path: ':id',
        name: 'entry',
        component: () => import(/* webpackChunkName: "noticiaEntry" */ '@/views/NoticiaEntryView.vue'),
        // props: (route) => {
        //   return {
        //     id: route.params.id
        //   }
        // },
        // props: true
      }
    ]
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
