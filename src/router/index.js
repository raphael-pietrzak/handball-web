// import GameCard from '@/components/GameCard.vue'
import LoginPage from '@/views/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MatchesView from '@/views/MatchesView.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ShopView from '@/views/ShopView.vue'
import SignUpView from '@/views/SignUpView.vue'

const routes = [
  { path: '/', redirect: "/home" },
  { path: '/login', name: 'login',component: LoginPage },
  { path: '/signup', name: 'signup', component: SignUpView },
  { path: '/home', name: 'navbar', component: HomeView },
  { path: '/matches', name: 'matches', component: MatchesView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/shop', name: 'shop', component: ShopView },


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
