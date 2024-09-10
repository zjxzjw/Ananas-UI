import { createRouter, createWebHistory } from 'vue-router'
import page from './page/index'

const router = createRouter({
  history: createWebHistory('/Ananas-UI'),
  routes: [...page]
})

export default router
