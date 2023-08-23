import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'music-player',
      component: () => import('../views/MusicPlayerView.vue')
    }
  ]
})

export default router
