<template>
  <div class="min-h-screen bg-slate-100 flex flex-col">

    <!-- NAVBAR -->
   <nav class="bg-slate-900 shadow-lg sticky top-0 z-50">

  <div class="max-w-7xl mx-auto px-4">

    <div class="flex justify-between items-center h-20">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl md:text-3xl font-extrabold text-white"
      >
        HM<span class="text-indigo-400">Technologies</span>
      </RouterLink>

      <!-- Botón móvil -->
      <button
        @click="menuAbierto = !menuAbierto"
        class="md:hidden text-white text-3xl"
      >
        ☰
      </button>

      <!-- Menú escritorio -->
      <div class="hidden md:flex gap-4">

        <RouterLink
          to="/"
          class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white"
        >
          Inicio
        </RouterLink>

        <RouterLink
          to="/login"
          class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white"
        >
          Login
        </RouterLink>

        <RouterLink
          to="/producto"
          class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white"
        >
          Gestión de Productos
        </RouterLink>

        <RouterLink
          to="/productos-venta"
          class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white"
        >
          Ventas
        </RouterLink>

        <RouterLink
          to="/carrito"
          class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white"
        >
          Carrito
        </RouterLink>

        <RouterLink
          to="/blog"
          class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white"
        >
          Blog
        </RouterLink>

      </div>

    </div>

    <!-- Menú móvil -->

    <div
      v-if="menuAbierto"
      class="md:hidden pb-5 flex flex-col gap-3"
    >

      <RouterLink @click="menuAbierto=false" to="/" class="text-white">
        Inicio
      </RouterLink>

      <RouterLink @click="menuAbierto=false" to="/login" class="text-white">
        Login
      </RouterLink>

      <RouterLink @click="menuAbierto=false" to="/producto" class="text-white">
        Gestión de Productos
      </RouterLink>

      <RouterLink @click="menuAbierto=false" to="/productos-venta" class="text-white">
        Productos Venta
      </RouterLink>

      <RouterLink @click="menuAbierto=false" to="/carrito" class="text-white">
        Carrito
      </RouterLink>

      <RouterLink @click="menuAbierto=false" to="/blog" class="text-white">
        Blog
      </RouterLink>

    </div>

  </div>

</nav>

    <!-- CONTENIDO -->
    <main class="flex-1">

      <div class="max-w-7xl mx-auto p-8">

        <RouterView />

      </div>

    </main>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-gray-400 py-6 mt-10">

      <div class="max-w-7xl mx-auto flex justify-between items-center">

        <h2 class="font-bold text-white">
          HM<span class="text-indigo-400">Technologies</span>
        </h2>

        <p>
          © 2026 Todos los derechos reservados.
        </p>

      </div>

    </footer>

  </div>
</template>


<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuAbierto = ref(false)
</script>
