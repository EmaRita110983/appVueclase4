<template>
  <div class="min-h-screen bg-slate-100 flex flex-col">

    <!-- NAVBAR -->
    <nav class="bg-slate-900 shadow-lg sticky top-0 z-50">

      <div class="max-w-7xl mx-auto h-20 px-8 flex justify-between items-center">

        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-3xl font-extrabold tracking-wide text-white">
          Mi<span class="text-indigo-400">Aplicación</span>
        </RouterLink>

        <!-- Menú -->
        <div class="flex gap-4">

          <RouterLink
            to="/"
            class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white transition"
            active-class="bg-indigo-600 text-white shadow-lg">
            Inicio
          </RouterLink>

          <RouterLink
            to="/login"
            class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white transition"
            active-class="bg-indigo-600 text-white shadow-lg">
            Login
          </RouterLink>

          <RouterLink
            to="/producto"
            class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white transition"
            active-class="bg-indigo-600 text-white shadow-lg">
            Productos
          </RouterLink>

          <RouterLink
            to="/blog"
            class="px-5 py-2 rounded-lg font-semibold text-gray-300 hover:bg-indigo-600 hover:text-white transition"
            active-class="bg-indigo-600 text-white shadow-lg">
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
          Mi<span class="text-indigo-400">Aplicación</span>
        </h2>

        <p>
          © 2026 Todos los derechos reservados.
        </p>

      </div>

    </footer>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>