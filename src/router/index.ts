// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/instruction',
    component: () => import('@/views/Instruction.vue'),
  },
  {
    path: '/gargetChoose',
    component: () => import('@/views/GargetChoose.vue'),
  },
  {
    path: '/exposition/:id',
    component: () => import('@/views/Exposition.vue'),
  },
  {
    path: '/upshot/:id',
    component: () => import('@/views/Upshot.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
