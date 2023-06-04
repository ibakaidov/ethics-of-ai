// Composables
import { useGetricsStore } from '@/store/getrics'
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
    path: '/gameover',
    component: () => import('@/views/GameOver.vue'),
  },
  {
    path: '/final',
    component: () => import('@/views/Final.vue'),
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
  {
    path: '/plot/:id',
    component: () => import('@/views/Plot.vue'),

  }
]

const router = createRouter({
  history: createWebHistory('/ethics-of-ai/'),
  routes,
  
})
router.beforeEach((item)=>{
  console.log(item.path);
  
  const getricsStore = useGetricsStore()
  if(!getricsStore.isPositive&&item.path!='/gameover'){
    router.push({
      path: '/gameover'
    })
  }
})

export default router
