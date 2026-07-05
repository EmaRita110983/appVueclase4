import Inicio from '../views/Inicio.vue'
import Producto from '../views/Producto.vue'
import Login from '../views/Login.vue'
import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Blog from '../views/Blog.vue';

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
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }

];

export const routes = createRouter({
  history: createWebHashHistory('/appVueclase4/'),
  routes: mis_rutas
})

