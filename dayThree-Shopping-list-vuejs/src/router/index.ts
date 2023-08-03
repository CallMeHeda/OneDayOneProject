import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products-list',
      component: () => import('../views/ProductsListView.vue')
    }
  ]
})

export default router
