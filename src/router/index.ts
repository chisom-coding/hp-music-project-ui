import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import ArtistView from '@/views/ArtistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView,
    },
    {
      path: '/artists/:artistId',
      name: 'artists',
      component: ArtistView,
    },
  ],
})

export default router
