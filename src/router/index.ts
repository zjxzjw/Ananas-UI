import { createRouter, createWebHashHistory } from 'vue-router'
import page from './page/index'

const router = createRouter({
  history: createWebHashHistory('/Ananas-UI'),
  routes: [...page]
})

export default router
