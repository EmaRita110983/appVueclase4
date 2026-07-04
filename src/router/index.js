import Inicio from '../views/Inicio.vue'
import Producto from '../views/Producto.vue'
import Login from '../views/Login.vue'
import { createRouter, createWebHistory} from 'vue-router'

const mis_rutas = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/producto',
    name: 'Producto',
    component: Producto
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }


];

export const routes =createRouter({
  history: createWebHistory('/App-Vue-Clase4/'),
  routes: mis_rutas
});

