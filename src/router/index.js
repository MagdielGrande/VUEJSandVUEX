import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PasteleroView from '../views/PasteleroView.vue'
import PedidoView from '../views/PedidoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/acercade',
    name: 'about',
    
    component: AboutView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    
    component: PasteleroView
  },
  {
    path: '/pedidos',
    name: 'orderes',
    
    component: PedidoView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
