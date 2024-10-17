// import GameCard from '@/components/GameCard.vue'
import LoginPage from '@/views/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'

const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  { path: '/navbar', name: 'navbar', component: NavbarComponent },
  // {
  //   path: '/card',
  //   name: 'card',
  //   component: GameCard
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
