import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'simpson',
      component: () => import('../views/SimpsonView.vue')
    }
  ]
})

export default router
