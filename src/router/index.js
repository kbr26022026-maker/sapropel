import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ArticlesPage from '@/pages/ArticlesPage.vue'
import ArticlePage from '@/pages/ArticlePage.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/articles', component: ArticlesPage },
  { path: '/articles/', component: ArticlesPage },
  { path: '/articles/:slug', component: ArticlePage },
  { path: '/articles/:slug/', component: ArticlePage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/privacy-policy/', component: PrivacyPolicyPage }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth', top: 80 })
        }, 100)
      })
    }
    return { top: 0 }
  }
})
