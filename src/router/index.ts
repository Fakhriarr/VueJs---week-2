import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../pages/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/about.vue')
    },
    {
      path: '/restricted',
      name: 'home',
      component: ()=>import('../pages/restricted.vue')
    },
    {
      path: '/login',
      name: 'home',
      component: ()=>import('../pages/login.vue')
    }
  ]
})

export default router
