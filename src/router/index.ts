import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayouts from '@/layouts/DefaultLayouts.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayouts,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('@/views/ProductsView.vue'),
      },
      {
        path: 'product/:id/:slug',
        name: 'product-detail',
        component: () => import('@/views/ProductDetailView.vue'),
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('@/views/CategoriesView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue')
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
