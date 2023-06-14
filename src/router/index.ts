import { createRouter, createWebHistory } from 'vue-router';
import Info from '@/views/info.vue';
import TheArcana from '@/views/routerviews/the-arcana.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Info
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../auto generated files/AboutView.vue')
    },
    {
      path: '/the-arcana',
      name: 'The Arcana',
      component: TheArcana
    }
  ]
})

export default router