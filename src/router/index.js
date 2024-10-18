// import GameCard from '@/components/GameCard.vue'
import LoginPage from '@/views/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MatchesView from '@/views/MatchesView.vue'
import HomeView from '@/views/HomeView.vue'
import ProfilePage from '@/views/ProfilePage.vue'

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
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  { path: '/home', name: 'navbar', component: HomeView },
  { path: '/matches', name: 'matches', component: MatchesView },
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
