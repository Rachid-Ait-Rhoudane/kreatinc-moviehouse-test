import { createRouter, createWebHistory } from 'vue-router'
import MainVue from '@/views/MainVue.vue'
import WatchlistVue from '@/views/WatchlistVue.vue'
import MovieVue from '@/views/MovieVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainvue',
      component: MainVue
    },
    {
      path: '/watchlist',
      name: 'watchlistvue',
      component: WatchlistVue
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieVue
    }
  ]
})

export default router
