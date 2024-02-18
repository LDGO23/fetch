import { createRouter, createWebHistory } from 'vue-router'
import dcrud from '../components/comps/dcrud.vue'
import Login from '../components/comps/login.vue'
import Registro from '../components/comps/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: dcrud
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    }
  ]
})

export default router