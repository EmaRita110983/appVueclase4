import Inicio from '../views/Inicio.vue'
import Producto from '../views/Producto.vue'
import Login from '../views/Login.vue'
import Carrito from '../views/Carrito.vue'
import Blog from '../views/Blog.vue'
import NoFoundComponent from '../views/errors/NoFoundComponent.vue'
import ProductosVenta from '../views/ProductosVenta.vue'

import { createRouter, createWebHistory } from 'vue-router'

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
  },
  {
    path: '/productos-venta',
    name: 'ProductosVenta',
    component: ProductosVenta
  },
  {
  path: '/carrito',
  name: 'Carrito',
  component: Carrito
},
{path: '/:pathMatch(.*)*', component: NoFoundComponent}

];

export const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: mis_rutas
});